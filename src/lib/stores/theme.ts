import { writable } from "svelte/store";
import { browser } from "$app/environment";

const theme = (() => {
    const getSavedTheme = () => {
        const savedTheme = (browser) ? localStorage.getItem("theme") : null;
        if (savedTheme) {
            return savedTheme as Theme;
        }
        return "system";
    }

    const saveTheme = (theme: Theme) => {
        if (browser) {
            localStorage.setItem("theme", theme);
        }
    }

    const subscribers = new Set<(value: Theme) => void>();

    const subscribe = (subscriber: (value: Theme) => void) => {
        let savedTheme = getSavedTheme();
        if (savedTheme === "system") {
            savedTheme = (browser) ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : "light";
        }
        subscriber(savedTheme);
        subscribers.add(subscriber);

        return () => {
            subscribers.delete(subscriber);
        }
    }

    const set = (theme: Theme) => {
        console.log("Setting theme to", theme)
        saveTheme(theme);
        subscribers.forEach((subscriber) => {
            subscriber(theme);
        });
    }

    const update = (fn: (value: Theme) => Theme) => {
        set(fn(getSavedTheme()));
    }

    return {
        subscribe,
        set,
        update
    };
})();

type Theme = "system" | "light" | "dark";


export default theme;
export type { Theme }
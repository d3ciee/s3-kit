<script>
	import '../app.pcss';
	import * as ToggleGroup from '$lib/ui/toggle-group';
	import { Sun, MoonStar, Monitor } from 'lucide-svelte';
	import theme from '$lib/stores/theme';
	import { cn } from '$lib/ui/utils';
</script>

<div
	class={cn(
		'root flex flex-col',
		$theme === 'system'
			? window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light'
			: $theme
	)}
>
	<slot></slot>
	<footer>
		<div class="flex w-full max-w-screen-xl justify-between border-t p-4 lg:px-8">
			<div>© 2024</div>
			<div>
				<ToggleGroup.Root size="sm" type="single" bind:value={$theme}>
					<ToggleGroup.Item class="rounded-full" value="dark" aria-label="Toggle dark mode">
						<MoonStar class="h-4 w-4" />
					</ToggleGroup.Item>
					<ToggleGroup.Item class="rounded-full" value="light" aria-label="Toggle light mode">
						<Sun class="h-4 w-4" />
					</ToggleGroup.Item>
					<ToggleGroup.Item class="rounded-full" value="system" aria-label="Use system theme">
						<Monitor class="h-4 w-4" />
					</ToggleGroup.Item>
				</ToggleGroup.Root>
			</div>
		</div>
	</footer>
</div>

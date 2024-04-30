import type { Config } from 'drizzle-kit';

export default {
    schema: './src/lib/config/db/schema.ts',
    out: './.migrations',
    driver: 'libsql',
    dbCredentials: {
        url: "file:./.data/local.sqlite"
    },
    breakpoints: true
} satisfies Config;
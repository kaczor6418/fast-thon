import { defineConfig } from 'vitest/config';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    pool: 'threads',
    include: ['**/src/**/*.spec.ts'],
    exclude: ['**/test/integration/**', 'node_modules/'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json'],
      reportsDirectory: './coverage/unit',
    },
    inspect: false,
  },
  cacheDir: './.vitest_cache/unit',
});

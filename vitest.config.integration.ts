import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    setupFiles: [resolve(__dirname, './test/integration/integration-setup.ts')],
    include: [resolve(__dirname, 'test/integration/**/*.spec.ts')],
    fileParallelism: false,
    maxConcurrency: 5,
    testTimeout: 15000,
    coverage: {
      enabled: false,
      provider: 'v8',
      reportsDirectory: './coverage/integration',
    },
  },
  cacheDir: './.vitest_cache/integration',
});

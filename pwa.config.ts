import { VitePWAOptions } from 'vite-plugin-pwa';

const fileExtensionsToCache = ['js', 'css', 'html', 'ico', 'jpg', 'png', 'svg', 'webp'];
export const PWA_CONFIG: Partial<VitePWAOptions> = {
  registerType: 'autoUpdate',
  injectRegister: 'script',
  strategies: 'generateSW',
  workbox: {
    globPatterns: [`**/*.{${fileExtensionsToCache.join(',')}}`],
    runtimeCaching: [
      {
        handler: 'StaleWhileRevalidate',
        urlPattern: () => true,
      },
    ],
  },
};

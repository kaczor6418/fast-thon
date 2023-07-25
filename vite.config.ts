import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { PWA_CONFIG } from './pwa.config';

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), VitePWA(PWA_CONFIG)],
  build: {
    outDir: './firebase/dist',
  },
});

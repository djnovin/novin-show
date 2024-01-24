import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './Subscription': './src/components/Subscription',
        './Campaigns': './src/components/Campaigns',
        './Trending': './src/components/Trending',
      },
      shared: ['react', 'react-dom', 'tailwindcss'],
    }),
  ],
  server: {
    watch: {
      usePolling: true,
    },
  },
  build: {
    cssCodeSplit: false,
    minify: false,
    modulePreload: false,
    target: 'esnext',
  },
});

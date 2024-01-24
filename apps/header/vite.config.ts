import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'header',
      filename: 'remoteEntry.js',
      exposes: {
        './Header': './src/components/Header',
      },
      shared: ['react', 'react-dom'],
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

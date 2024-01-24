import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'footer',
      filename: 'remoteEntry.js',
      exposes: {
        './Footer': './src/components/Footer',
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

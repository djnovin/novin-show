import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        header: 'http://localhost:5001/assets/remoteEntry.js',
        marketing: 'http://localhost:5003/assets/remoteEntry.js',
        footer: 'http://localhost:5002/assets/remoteEntry.js',
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

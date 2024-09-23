import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Set the port for the development server
    open: true, // Automatically open the browser when the server starts
  },
  build: {
    outDir: 'dist', // Specify the output directory for the build
    sourcemap: true, // Generate source maps for easier debugging
  },
  resolve: {
    alias: {
      '@': '/src', // Create an alias for the src directory
    },
  },
});

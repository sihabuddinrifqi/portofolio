import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Port lokal (opsional)
  },
  build: {
    outDir: 'dist', // Folder output
    chunkSizeWarningLimit: 1000,
  },
});


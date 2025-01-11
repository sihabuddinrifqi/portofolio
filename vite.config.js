import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output folder
    chunkSizeWarningLimit: 1000, // Optional: Atur batas ukuran chunk
  },
});

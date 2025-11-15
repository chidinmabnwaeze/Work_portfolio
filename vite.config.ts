import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // Import tailwindcss plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()], // Add tailwindcss to plugins
});

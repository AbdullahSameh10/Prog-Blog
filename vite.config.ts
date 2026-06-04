import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  resolve:{
    alias: {
      "@": "/src",
      "@Components": "/src/Components",
      "@Elements": "/src/Components/Elements",
      "@Layouts": "/src/Components/Layouts",
      "@Hooks": "/src/Components/Hooks",
      "@Routers": "/src/Components/Routers",
      "@Types": "/src/Components/Types",
    },
  },
  plugins: [react()],
})

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Only use base path in production builds
  const base = mode === 'production' ? "/Ishraq-s-Portfolio/" : "/";
  
  return {
    plugins: [react()],
    publicDir: "public",
    base,
    server: {
      port: 3000,
      open: true,
    },
  };
});

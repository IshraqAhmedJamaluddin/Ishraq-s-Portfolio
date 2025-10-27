import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "public",
  base: "/Ishraq-s-Portfolio/",
  server: {
    port: 3000,
    open: true,
  },
});

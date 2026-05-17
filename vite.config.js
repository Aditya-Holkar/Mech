import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    host: true,
  },
  preview: {
    port: 3000,
    host: true,
    allowedHosts: [
      "taste-atlas.onrender.com",
      ".onrender.com", // Allows all Render subdomains
      "localhost",
      "127.0.0.1",
    ],
  },
  base: "./",
});

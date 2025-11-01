import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Let Vite load PostCSS configuration from postcss.config.cjs
// and avoid importing tailwindcss directly here (the PostCSS
// plugin moved to @tailwindcss/postcss).
export default defineConfig({
  plugins: [react()],
});
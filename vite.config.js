/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import path from "path";
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx", // Default loader for JSX
    include: [
      "src/**/*.js", // Handle .js files
      "src/**/*.jsx", // Also handle .jsx files
    ],
    // Alternatively, you can customize loader only for specific extensions
    loaders: {
      ".js": "jsx", // Use JSX loader for JS files
    },
  },
  base: "/",
  server: {
    port: 3000,
  },
  css: {
    devSourcemap: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

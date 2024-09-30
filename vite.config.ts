import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@containers": path.resolve(__dirname, "./src/containers"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@router": path.resolve(__dirname, "./src/router"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },
});

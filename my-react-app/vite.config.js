import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/testCICD/my-react-app/",
  plugins: [react()],
});

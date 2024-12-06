import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/RentCar/react',
  resolve: {
    alias: { src: "/src" },
  },
});

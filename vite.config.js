import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // admin: {
  //   vite: () => {
  //     return {
  //       server: {
  //         // allowedHosts: ["nationaldex.net"],
  //         allowedHosts: true,
  //       },
  //     };
  //   },
  // },
  server: {
    allowedHosts: [".nationaldex.net"],
  },
  plugins: [react()],
});

import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

const resolve = (dir: string) => fileURLToPath(new URL(dir, import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
  },
  plugins: [
    vue(),
    eslintPlugin({
      include: ["src/**/*.js", "src/**/*.vue", "src/**/*.ts"],
      exclude: ["./node_modules/**"],
      cache: false,
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve("./src/assets/icons")],
      symbolId: "icon-[name]",
      inject: "body-first",
    }),
  ],
  resolve: {
    alias: {
      "@": resolve("src"),
    },
  },
});

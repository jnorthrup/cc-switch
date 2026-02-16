import path from "node:path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ command }) => ({
    root: path.resolve(__dirname, "./src"),
    plugins: [
        react(),
    ],
    base: "./",
    server: {
        port: 3000,
        strictPort: true,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            // Mock Tauri APIs for web build - Granular Mapping for Named Imports
            "@tauri-apps/api/core": path.resolve(__dirname, "./src/mocks/tauri/core.ts"),
            "@tauri-apps/api/event": path.resolve(__dirname, "./src/mocks/tauri/event.ts"),
            "@tauri-apps/plugin-dialog": path.resolve(__dirname, "./src/mocks/tauri/dialog.ts"),
            "@tauri-apps/plugin-shell": path.resolve(__dirname, "./src/mocks/tauri/shell.ts"),
            "@tauri-apps/plugin-process": path.resolve(__dirname, "./src/mocks/tauri/process.ts"),
            "@tauri-apps/plugin-fs": path.resolve(__dirname, "./src/mocks/tauri/fs.ts"),
            "@tauri-apps/plugin-store": path.resolve(__dirname, "./src/mocks/tauri/store.ts"),
        },
    },
    define: {
        "window.__TAURI__": undefined,
    },
    envPrefix: ["VITE_", "TAURI_"],
}));

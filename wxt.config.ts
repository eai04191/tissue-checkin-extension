import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
    extensionApi: "chrome",
    manifest: {
        action: {
            default_title: "Tissue Checkin",
        },
    },
});

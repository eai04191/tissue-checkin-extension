import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
    manifest: ({ browser }) => {
        const permissions = browser === "firefox" ? ["tabs"] : [];
        return {
            permissions,
            action: {
                default_title: "Tissue Checkin",
            },
        };
    },
});

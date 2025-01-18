import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
    manifest: ({ browser }) => {
        return {
            permissions: ["activeTab"],
            action: {
                default_title: "Tissue Checkin",
            },
            browser_specific_settings: {
                gecko: {
                    id: "{b3409509-ae59-42f0-aa62-76ff16ec9b61}",
                },
            },
        };
    },
});

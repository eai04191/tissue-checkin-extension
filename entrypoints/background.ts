import { services } from "@/services";

export default defineBackground(() => {
    chrome.action.onClicked.addListener((tab) => {
        processTab(tab);
    });
});

function checkin(url: string) {
    browser.tabs.create({
        url: "https://shikorism.net/checkin?link=" + encodeURIComponent(url),
    });
}

function processTab(tab: chrome.tabs.Tab) {
    if (!tab.url) {
        console.warn("Tab has no url", tab);
        return;
    }

    for (const [key, value] of Object.entries(services)) {
        if (value.regex.test(tab.url)) {
            console.log("Support Service Matched", key, tab.url);
            const productPageUrl = value.extractProductPage(tab);
            checkin(productPageUrl);
            return;
        }
    }

    checkin(tab.url);
}

export type Extractor = {
    regex: RegExp;
    extractProductPage: (page: chrome.tabs.Tab) => string;
};

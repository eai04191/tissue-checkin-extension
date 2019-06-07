chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({
        url:
            "https://shikorism.net/checkin?link=" + encodeURIComponent(tab.url),
    });
});

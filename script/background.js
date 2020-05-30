chrome.browserAction.onClicked.addListener(function (tab) {
    const url = tab.url;
    checkin(parseUrl(url));
});

function checkin(url) {
    chrome.tabs.create({
        url: "https://shikorism.net/checkin?link=" + encodeURIComponent(url),
    });
}

function parseUrl(url) {
    return parseFanzaDoujinUrl(url) || parseDLsitePlayUrl(url) || url;
}

function parseFanzaDoujinUrl(url) {
    if (
        !/^https:\/\/www\.dmm\.co\.jp\/dc\/-\/(mylibrary\/detail|viewer)\/=/.test(
            url
        )
    ) {
        return false;
    }
    console.log(url, "is Fanza Url.");
    const id = url.match(
        /^https:\/\/www\.dmm\.co\.jp\/dc\/-\/(mylibrary\/detail|viewer)\/=\/product_id=(?<id>._\d+)/
    ).groups.id;
    return `https://www.dmm.co.jp/dc/doujin/-/detail/=/cid=${id}/`;
}

function parseDLsitePlayUrl(url) {
    if (!/^https:\/\/play\.dlsite\.com\/#/.test(url)) {
        return false;
    }
    console.log(url, "is DLsite Play Url.");
    const id = url.match(/^https:\/\/play\.dlsite\.com\/#\/work\/(?<id>..\d+)/)
        .groups.id;

    return `https://www.dlsite.com/maniax/work/=/product_id/${id}.html`;
}

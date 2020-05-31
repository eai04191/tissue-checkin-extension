import { browser } from "webextension-polyfill-ts";

browser.browserAction.onClicked.addListener(function (tab) {
    const url = tab.url;
    if (url) {
        checkin(parseUrl(url));
    }
});

function checkin(url: string) {
    browser.tabs.create({
        url: "https://shikorism.net/checkin?link=" + encodeURIComponent(url),
    });
}

function parseUrl(url: string) {
    return parseFanzaDoujinUrl(url) || parseDLsitePlayUrl(url) || url;
}

function parseFanzaDoujinUrl(url: string) {
    if (
        !/^https:\/\/www\.dmm\.co\.jp\/dc\/-\/(mylibrary\/detail|viewer)\/=/.test(
            url
        )
    ) {
        return false;
    }
    console.log(url, "is Fanza Url.");
    const id = url?.match(
        /^https:\/\/www\.dmm\.co\.jp\/dc\/-\/(mylibrary\/detail|viewer)\/=\/product_id=(?<id>._\d+)/
    )?.groups?.id;
    return `https://www.dmm.co.jp/dc/doujin/-/detail/=/cid=${id}/`;
}

function parseDLsitePlayUrl(url: string) {
    if (!/^https:\/\/play\.dlsite\.com\/#/.test(url)) {
        return false;
    }
    console.log(url, "is DLsite Play Url.");
    const id = url?.match(/^https:\/\/play\.dlsite\.com\/#\/work\/(?<id>..\d+)/)
        ?.groups?.id;

    return `https://www.dlsite.com/maniax/work/=/product_id/${id}.html`;
}

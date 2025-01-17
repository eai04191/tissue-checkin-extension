import { Extractor } from "./types";

export const fanza_doujin: Extractor = {
    regex: new RegExp("^https://www.dmm.co.jp/dc/-/(mylibrary/detail|viewer)/"),
    extractProductPage: (page) => {
        const regex = new RegExp("/product_id=(?<id>[a-z]_\\d+)");
        const matched = page.url?.match(regex);
        const id = matched?.groups?.id;

        if (id === undefined) {
            console.warn("Failed to get product id from url", {
                regex,
                url: page.url,
                matched,
                id,
            });
            throw new Error("Failed to get product id from url");
        }

        return `https://www.dmm.co.jp/dc/doujin/-/detail/=/cid=${id}/`;
    },
};

import { Extractor } from "./types";

export const dlsite_play: Extractor = {
    regex: new RegExp("^https://play.dlsite.com/work/"),
    extractProductPage: (page) => {
        const regex = new RegExp("/work/(?<id>[A-Z]{2}\\d+)/");
        const matched = page.url?.match(regex);
        const id = matched?.groups?.id;

        if (!id) {
            console.warn("Failed to get product id from url", {
                regex,
                url: page.url,
                matched,
                id,
            });
            throw new Error("Failed to get product id from url");
        }

        return `https://www.dlsite.com/maniax/work/=/product_id/${id}.html`;
    },
};

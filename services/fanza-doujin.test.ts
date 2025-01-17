import { describe, it, expect } from "vitest";
import { fanza_doujin } from "./fanza-doujin";

describe("Fanza Doujin", () => {
    it("should match valid URL", () => {
        const url =
            "https://www.dmm.co.jp/dc/-/mylibrary/detail/product_id=d_123";
        expect(fanza_doujin.regex.test(url)).toBe(true);
    });

    it("should not match invalid URL", () => {
        const url = "https://www.dmm.co.jp/dc/-/other/detail/product_id=d_123";
        expect(fanza_doujin.regex.test(url)).toBe(false);
    });

    it("should return product URL for valid URL", () => {
        const page = {
            url: "https://www.dmm.co.jp/dc/-/mylibrary/detail/product_id=d_123",
        } as chrome.tabs.Tab;
        const result = fanza_doujin.extractProductPage(page);
        expect(result).toBe(
            "https://www.dmm.co.jp/dc/doujin/-/detail/=/cid=d_123/",
        );
    });

    it("should throw an error if the product id cannot be extracted", () => {
        const page = {
            url: "https://www.dmm.co.jp/dc/-/mylibrary/detail/",
        } as chrome.tabs.Tab;
        expect(() => fanza_doujin.extractProductPage(page)).toThrow(
            "Failed to get product id from url",
        );
    });
});

import { describe, it, expect } from "vitest";
import { dlsite_play } from "./dlsite-play";

describe("dlsite_play", () => {
    it("should match the valid URL", () => {
        const url =
            "https://play.dlsite.com/work/RJ12345/view/example/page001.jpg";
        expect(dlsite_play.regex.test(url)).toBe(true);
    });

    it("should not match an invalid URL", () => {
        const url = "https://example.com/work/abc123";
        expect(dlsite_play.regex.test(url)).toBe(false);
    });

    it("should return product URL for valid URL", () => {
        const page = {
            url: "https://play.dlsite.com/work/RJ12345/view/example/page001.jpg",
        } as chrome.tabs.Tab;
        const result = dlsite_play.extractProductPage(page);
        expect(result).toBe(
            "https://www.dlsite.com/maniax/work/=/product_id/RJ12345.html",
        );
    });

    it("should throw an error if the product id cannot be extracted", () => {
        const page = {
            url: "https://play.dlsite.com/work/",
        } as chrome.tabs.Tab;
        expect(() => dlsite_play.extractProductPage(page)).toThrow(
            "Failed to get product id from url",
        );
    });
});

import { dlsite_play } from "./dlsite-play";
import { fanza_doujin } from "./fanza-doujin";
import { SupportServiceHandler } from "./types";

export const services: Record<string, SupportServiceHandler> = {
    fanza_doujin,
    dlsite_play,
};

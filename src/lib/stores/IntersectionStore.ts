import type { IntersectionValues } from "$lib/Utils";
import { writable } from "svelte/store";

export const intersectionStore = writable<IntersectionValues>({
    whois: false,
    exp: false,
    education: false,
    connaissances: false
});
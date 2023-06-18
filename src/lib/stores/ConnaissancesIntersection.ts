import type { ConnaissancesIntersection, IntersectionValues } from "$lib/Utils";
import { writable } from "svelte/store";

export const ConnaissancesStore = writable<ConnaissancesIntersection>({
    svelte: false,
    blazor: false,
    html: false,
    css: false,
    ts: false
});
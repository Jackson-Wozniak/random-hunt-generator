import type { Region } from "./Region";

export enum MapName {
    NEZ_PERCE = "Nez Perce",
    TRANSYLVANIA = "Transylvania",
    AURORA_SHORES = "Aurora Shores",
    TIKAMOON_PLAINS = "Tikamoon Plains",
    MATARIKI_PARK = "Matariki Park",
    LINTUKOTO_RESERVE = "Lintukoto Reserve"
}

export interface Map {
    name: MapName,
    isDLC: boolean,
    regions: Region[]
}

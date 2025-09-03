import type { Species } from "./Species";

export enum Biome {
    HIGHLAND_FOREST = "Highland Forest",
    SWAMPS = "Swamps",
    MOUNTAINS = "Mountains",
    GRASSLAND = "Grassland",
    LOWLAND_FOREST = "Lowland Forest",
    HIGHLANDS = "Highlands",
    SAVANNA = "Savanna",
    ARID_SAVANNA_AND_DESERT = "Arid Savanna and Desert",
    GRASSLANDS_AND_FORESTS = "Grasslands and Forests",
    FLOODPLAIN = "Floodplain",
    RAINFOREST = "Rainforest"
}

export interface Region {
    name: string,
    biome: Biome,
    hasCabin: boolean,
    campsiteCount: number,
    huntingStandCount: number,
    isPrivatePass: boolean,
    species: Species[]
}
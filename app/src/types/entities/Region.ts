import type { Species } from "./Species";

export enum Biome {
    HIGHLAND_FOREST = "Highland Forest",
    SWAMPS = "Swamps",
    MOUNTAINS = "Mountains",
    GRASSLAND = "Grassland",
    LOWLAND_FOREST = "Lowland Forest"
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
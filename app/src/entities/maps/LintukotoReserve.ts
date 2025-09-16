import { MapName, type Map } from "../../types/entities/Map";
import { Biome, type Region } from "../../types/entities/Region";

export const TulvaForests: Region = {
    name: "Tulva Forests",
    biome: Biome.LOWLAND_FOREST,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 3,
    huntingStandCount: 0,
    species: [
        
    ]
}

export const LintukotoReserve: Map = {
    name: MapName.LINTUKOTO_RESERVE,
    isDLC: true,
    regions: [
        TulvaForests
    ]
}
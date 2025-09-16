import { MapName, type Map } from "../../types/entities/Map";
import { type Region, Biome } from "../../types/entities/Region";

export const NianukRise: Region = {
    name: "Nianuk Rise",
    biome: Biome.MOUNTAINS,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 1,
    huntingStandCount: 0,
    species: [
        
    ]
}

export const AuroraShores: Map = {
    name: MapName.AURORA_SHORES,
    isDLC: true,
    regions: [
        NianukRise
    ]
}
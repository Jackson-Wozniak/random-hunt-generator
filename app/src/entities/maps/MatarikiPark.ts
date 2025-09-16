import { MapName, type Map } from "../../types/entities/Map";
import { Biome, type Region } from "../../types/entities/Region";

export const RotoHoariForest: Region = {
    name: "Roto Hoari Forest",
    biome: Biome.LOWLAND_FOREST,
    hasCabin: true,
    isPrivatePass: false,
    campsiteCount: 2,
    huntingStandCount: 0,
    species: [
        
    ]
}

export const MatarikiPark: Map = {
    name: MapName.MATARIKI_PARK,
    isDLC: true,
    regions: [
        RotoHoariForest
    ]
}
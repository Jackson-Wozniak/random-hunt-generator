import { Biome } from "../../types/entities/Region";
import { SpeciesName, type Species } from "../../types/entities/Species";


export const Pheasant: Species = {
    name: SpeciesName.PHEASANT,
    primaryHabitats: [Biome.GRASSLAND],
    secondaryHabitats: [],
    huntingTier: 1,
    weightRanges: [],
    lifeCycle: new Map([
        
    ])
}
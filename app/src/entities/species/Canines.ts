import { Biome } from "../../types/entities/Region";
import { SpeciesName, type Species } from "../../types/entities/Species";


export const GoldenJackal: Species = {
    name: SpeciesName.GOLDEN_JACKAL,
    primaryHabitats: [Biome.LOWLAND_FOREST],
    secondaryHabitats: [Biome.GRASSLAND],
    huntingTier: 4,
    weightRanges: [],
    lifeCycle: new Map([

    ])
}

export const GrayWolf: Species = {
    name: SpeciesName.GRAY_WOLF,
    primaryHabitats: [Biome.HIGHLAND_FOREST, Biome.LOWLAND_FOREST],
    secondaryHabitats: [Biome.MOUNTAINS],
    huntingTier: 5,
    weightRanges: [],
    lifeCycle: new Map([

    ])
}

export const RedFox: Species = {
    name: SpeciesName.RED_FOX,
    primaryHabitats: [Biome.GRASSLAND, Biome.LOWLAND_FOREST],
    secondaryHabitats: [Biome.HIGHLAND_FOREST],
    huntingTier: 3,
    weightRanges: [],
    lifeCycle: new Map([
        
    ])
}

export const SpottedHyena: Species = {
    name: SpeciesName.SPOTTED_HYENA,
    primaryHabitats: [Biome.HIGHLANDS],
    secondaryHabitats: [],
    huntingTier: 5,
    weightRanges: [],
    lifeCycle: new Map([
        
    ])
}

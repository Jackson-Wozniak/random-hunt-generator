import { Biome } from "../../types/entities/Region";
import { AnimalAction, SpeciesName, type Species } from "../../types/entities/Species";

export const CommonWarthog: Species = {
    name: SpeciesName.COMMON_WARTHOG,
    primaryHabitats: [Biome.GRASSLANDS_AND_FORESTS],
    secondaryHabitats: [Biome.SAVANNA],
    huntingTier: 5,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.DRINK, ["00:00", "11:00"]],
        [AnimalAction.FEED, ["07:00", "19:00"]],
        [AnimalAction.SLEEP, ["02:00", "15:00"]]
    ])
}

export const WildBoar: Species = {
    name: SpeciesName.WILD_BOAR,
    primaryHabitats: [Biome.GRASSLAND, Biome.LOWLAND_FOREST],
    secondaryHabitats: [Biome.FLOODPLAIN],
    huntingTier: 5,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.DRINK, ["00:00", "11:00"]],
        [AnimalAction.FEED, ["07:00", "19:00"]],
        [AnimalAction.SLEEP, ["02:00", "15:00"]]
    ])
}

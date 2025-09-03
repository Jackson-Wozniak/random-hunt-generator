import { Biome } from "../../types/entities/Region";
import { AnimalAction, type Species, SpeciesName } from "../../types/entities/Species";


export const EuropeanHare: Species = {
    name: SpeciesName.EUROPEAN_HARE,
    primaryHabitats: [Biome.GRASSLAND],
    secondaryHabitats: [],
    huntingTier: 1,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.FEED, ["09:00", "12:00"]],
        [AnimalAction.SLEEP, ["03:00", "17:00"]],
        [AnimalAction.DRINK, []]
    ])
}

export const EuropeanRabbit: Species = {
    name: SpeciesName.EUROPEAN_RABBIT,
    primaryHabitats: [Biome.GRASSLAND],
    secondaryHabitats: [],
    huntingTier: 1,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.FEED, ["09:00", "12:00"]],
        [AnimalAction.SLEEP, ["03:00", "17:00"]],
        [AnimalAction.DRINK, []]
    ])
}

export const SnowshoeHare: Species = {
    name: SpeciesName.SNOWSHOE_HARE,
    primaryHabitats: [Biome.HIGHLAND_FOREST],
    secondaryHabitats: [],
    huntingTier: 1,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.FEED, ["09:00", "12:00"]],
        [AnimalAction.SLEEP, ["03:00", "17:00"]],
        [AnimalAction.DRINK, []]
    ])
}

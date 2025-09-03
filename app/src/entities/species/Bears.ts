import { Biome } from "../../types/entities/Region";
import { AnimalAction, SpeciesName, type Species } from "../../types/entities/Species";

export const AmericanBlackBear: Species = {
    name: SpeciesName.AMERICAN_BLACK_BEAR,
    primaryHabitats: [Biome.HIGHLAND_FOREST],
    secondaryHabitats: [],
    huntingTier: 6,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.DRINK, ["07:00", "19:00"]],
        [AnimalAction.FEED, ["03:00", "15:00"]],
        [AnimalAction.SLEEP, ["00:00", "10:00"]]
    ])
}

export const BrownBear: Species = {
    name: SpeciesName.BROWN_BEAR,
    primaryHabitats: [Biome.HIGHLAND_FOREST],
    secondaryHabitats: [],
    huntingTier: 6,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.DRINK, ["07:00", "19:00"]],
        [AnimalAction.FEED, ["03:00", "15:00"]],
        [AnimalAction.SLEEP, ["00:00", "10:00"]]
    ])
}

export const KodiakBear: Species = {
    name: SpeciesName.KODIAK_BEAR,
    primaryHabitats: [Biome.RAINFOREST],
    secondaryHabitats: [],
    huntingTier: 6,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.DRINK, ["07:00", "19:00"]],
        [AnimalAction.FEED, ["03:00", "15:00"]],
        [AnimalAction.SLEEP, ["00:00", "10:00"]]
    ])
}

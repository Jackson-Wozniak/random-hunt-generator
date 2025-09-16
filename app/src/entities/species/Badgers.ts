import { Biome } from "../../types/entities/Region";
import { AnimalAction, SpeciesName, type Species } from "../../types/entities/Species";

export const AmericanBadger: Species = {
    name: SpeciesName.AMERICAN_BADGER,
    primaryHabitats: [Biome.LOWLAND_FOREST, Biome.GRASSLAND],
    secondaryHabitats: [Biome.HIGHLAND_FOREST],
    huntingTier: 3,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.DRINK, ["07:00", "19:00"]],
        [AnimalAction.FEED, ["03:00", "15:00"]],
        [AnimalAction.SLEEP, ["00:00", "10:00"]]
    ])
}

export const EurasianBadger: Species = {
    name: SpeciesName.EURASIAN_BADGER,
    primaryHabitats: [Biome.HIGHLAND_FOREST],
    secondaryHabitats: [Biome.LOWLAND_FOREST],
    huntingTier: 3,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.DRINK, ["07:00", "19:00"]],
        [AnimalAction.FEED, ["03:00", "15:00"]],
        [AnimalAction.SLEEP, ["00:00", "10:00"]]
    ])
}

export const HoneyBadger: Species = {
    name: SpeciesName.HONEY_BADGER,
    primaryHabitats: [Biome.SAVANNA],
    secondaryHabitats: [Biome.ARID_SAVANNA_AND_DESERT, Biome.HIGHLANDS],
    huntingTier: 3,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.DRINK, []],
        [AnimalAction.FEED, ["00:00", "15:00"]],
        [AnimalAction.SLEEP, ["08:00", "18:00"]]
    ])
}

export const EurasianWolverine: Species = {
    name: SpeciesName.EURASIAN_WOLVERINE,
    primaryHabitats: [],
    secondaryHabitats: [],
    huntingTier: 3,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.DRINK, []],
        [AnimalAction.FEED, []],
        [AnimalAction.SLEEP, []]
    ])
}

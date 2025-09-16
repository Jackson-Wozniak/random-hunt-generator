import { Biome } from "../../types/entities/Region";
import { AnimalAction, SpeciesName, type Species } from "../../types/entities/Species";


export const BighornSheep: Species = {
    name: SpeciesName.BIGHORN_SHEEP,
    primaryHabitats: [Biome.MOUNTAINS],
    secondaryHabitats: [],
    huntingTier: 5,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.SLEEP, ["02:00", "15:00"]],
        [AnimalAction.DRINK, ["00:00", "11:00"]],
        [AnimalAction.FEED, ["07:00", "19:00"]]
    ])
}

export const BlackWildebeest: Species = {
    name: SpeciesName.BLACK_WILDEBEEST,
    primaryHabitats: [Biome.GRASSLANDS_AND_FORESTS],
    secondaryHabitats: [],
    huntingTier: 5,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.SLEEP, ["02:00", "15:00"]],
        [AnimalAction.DRINK, ["00:00", "11:00"]],
        [AnimalAction.FEED, ["07:00", "19:00"]]
    ])
}

export const BlueWildebeest: Species = {
    name: SpeciesName.BLUE_WILDEBEEST,
    primaryHabitats: [Biome.SAVANNA],
    secondaryHabitats: [],
    huntingTier: 5,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.SLEEP, ["00:00", "13:00"]],
        [AnimalAction.DRINK, ["09:00", "22:00"]],
        [AnimalAction.FEED, ["05:00", "17:00"]]
    ])
}

export const CapeBuffalo: Species = {
    name: SpeciesName.CAPE_BUFFALO,
    primaryHabitats: [Biome.HIGHLANDS, Biome.SAVANNA],
    secondaryHabitats: [Biome.GRASSLANDS_AND_FORESTS],
    huntingTier: 6,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.SLEEP, ["00:00", "13:00"]],
        [AnimalAction.DRINK, ["09:00", "22:00"]],
        [AnimalAction.FEED, ["05:00", "17:00"]]
    ])
}

export const Chamois: Species = {
    name: SpeciesName.CHAMOIS,
    primaryHabitats: [Biome.MOUNTAINS],
    secondaryHabitats: [],
    huntingTier: 5,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.SLEEP, ["02:00", "15:00"]],
        [AnimalAction.DRINK, ["00:00", "11:00"]],
        [AnimalAction.FEED, ["07:00", "19:00"]]
    ])
}

export const Gemsbok: Species = {
    name: SpeciesName.GEMSBOK,
    primaryHabitats: [Biome.ARID_SAVANNA_AND_DESERT],
    secondaryHabitats: [Biome.HIGHLANDS, Biome.SAVANNA],
    huntingTier: 6,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.SLEEP, ["00:00", "13:00"]],
        [AnimalAction.DRINK, ["09:00", "22:00"]],
        [AnimalAction.FEED, ["05:00", "17:00"]]
    ])
}

export const GreaterKudu: Species = {
    name: SpeciesName.GREATER_KUDU,
    primaryHabitats: [Biome.GRASSLANDS_AND_FORESTS, Biome.SAVANNA],
    secondaryHabitats: [Biome.HIGHLANDS],
    huntingTier: 6,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.SLEEP, ["00:00", "13:00"]],
        [AnimalAction.DRINK, ["09:00", "22:00"]],
        [AnimalAction.FEED, ["05:00", "17:00"]]
    ])
}

export const Mouflon: Species = {
    name: SpeciesName.MOUFLON,
    primaryHabitats: [Biome.HIGHLAND_FOREST],
    secondaryHabitats: [Biome.MOUNTAINS],
    huntingTier: 5,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.SLEEP, ["02:00", "15:00"]],
        [AnimalAction.DRINK, ["00:00", "11:00"]],
        [AnimalAction.FEED, ["07:00", "19:00"]]
    ])
}

export const MountainGoat: Species = {
    name: SpeciesName.MOUNTAIN_GOAT,
    primaryHabitats: [Biome.MOUNTAINS],
    secondaryHabitats: [],
    huntingTier: 5,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.SLEEP, ["02:00", "15:00"]],
        [AnimalAction.DRINK, ["00:00", "11:00"]],
        [AnimalAction.FEED, ["07:00", "19:00"]]
    ])
}

export const Springbok: Species = {
    name: SpeciesName.SPRINGBOK,
    primaryHabitats: [Biome.ARID_SAVANNA_AND_DESERT],
    secondaryHabitats: [Biome.GRASSLANDS_AND_FORESTS],
    huntingTier: 4,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.SLEEP, ["00:00", "11:00", "22:00"]],
        [AnimalAction.DRINK, ["07:00", "20:00"]],
        [AnimalAction.FEED, ["03:00", "15:00"]]
    ])
}

export const WoodBison: Species = {
    name: SpeciesName.WOOD_BISON,
    primaryHabitats: [Biome.HIGHLAND_FOREST],
    secondaryHabitats: [],
    huntingTier: 6,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.SLEEP, ["00:00", "13:00"]],
        [AnimalAction.DRINK, ["09:00", "22:00"]],
        [AnimalAction.FEED, ["05:00", "17:00"]]
    ])
}

export const HimalayanTahr: Species = {
    name: SpeciesName.HIMALAYAN_TAHR,
    primaryHabitats: [],
    secondaryHabitats: [],
    huntingTier: 6,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.SLEEP, []],
        [AnimalAction.DRINK, []],
        [AnimalAction.FEED, []]
    ])
}

export const FeralGoat: Species = {
    name: SpeciesName.FERAL_GOAT,
    primaryHabitats: [],
    secondaryHabitats: [],
    huntingTier: 5,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.SLEEP, []],
        [AnimalAction.DRINK, []],
        [AnimalAction.FEED, []]
    ])
}

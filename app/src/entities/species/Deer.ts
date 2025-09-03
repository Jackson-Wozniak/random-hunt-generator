import { Biome } from "../../types/entities/Region";
import { AnimalAction, SpeciesName, type Species } from "../../types/entities/Species";

export const AlaskaMoose: Species = {
    name: SpeciesName.ALASKA_MOOSE,
    primaryHabitats: [Biome.GRASSLAND, Biome.HIGHLAND_FOREST],
    secondaryHabitats: [],
    huntingTier: 6,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.DRINK, ["09:00", "22:00"]],
        [AnimalAction.FEED, ["05:00", "17:00"]],
        [AnimalAction.SLEEP, ["00:00", "13:00"]]
    ])
}

export const BarrenGroundCaribou: Species = {
    name: SpeciesName.BARREN_GROUND_CARIBOU,
    primaryHabitats: [Biome.HIGHLAND_FOREST, Biome.MOUNTAINS],
    secondaryHabitats: [],
    huntingTier: 5,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.DRINK, ["00:00", "11:00"]],
        [AnimalAction.FEED, ["07:00", "19:00"]],
        [AnimalAction.SLEEP, ["02:00", "15:00"]]
    ])
}

export const FallowDeer: Species = {
    name: SpeciesName.FALLOW_DEER,
    primaryHabitats: [Biome.LOWLAND_FOREST],
    secondaryHabitats: [Biome.GRASSLAND],
    huntingTier: 5,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.DRINK, ["00:00", "11:00"]],
        [AnimalAction.FEED, ["07:00", "19:00"]],
        [AnimalAction.SLEEP, ["02:00", "15:00"]]
    ])
}

export const MuleDeer: Species = {
    name: SpeciesName.MULE_DEER,
    primaryHabitats: [],
    secondaryHabitats: [],
    huntingTier: 5,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.DRINK, ["00:00", "11:00"]],
        [AnimalAction.FEED, ["07:00", "19:00"]],
        [AnimalAction.SLEEP, ["02:00", "15:00"]]
    ])
}

export const RedDeer: Species = {
    name: SpeciesName.RED_DEER,
    primaryHabitats: [],
    secondaryHabitats: [],
    huntingTier: 5,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.DRINK, []],
        [AnimalAction.FEED, []],
        [AnimalAction.SLEEP, []]
    ])
}

export const RockyMountainElk: Species = {
    name: SpeciesName.ROCKY_MOUNTAIN_ELK,
    primaryHabitats: [],
    secondaryHabitats: [],
    huntingTier: 6,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.DRINK, []],
        [AnimalAction.FEED, []],
        [AnimalAction.SLEEP, []]
    ])
}

export const RoeDeer: Species = {
    name: SpeciesName.ROE_DEER,
    primaryHabitats: [],
    secondaryHabitats: [],
    huntingTier: 5,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.DRINK, []],
        [AnimalAction.FEED, []],
        [AnimalAction.SLEEP, []]
    ])
}

export const RooseveltElk: Species = {
    name: SpeciesName.ROOSEVELT_ELK,
    primaryHabitats: [],
    secondaryHabitats: [],
    huntingTier: 6,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.DRINK, []],
        [AnimalAction.FEED, []],
        [AnimalAction.SLEEP, []]
    ])
}

export const SitkaDeer: Species = {
    name: SpeciesName.SITKA_DEER,
    primaryHabitats: [],
    secondaryHabitats: [],
    huntingTier: 5,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.DRINK, ["00:00", "11:00"]],
        [AnimalAction.FEED, ["07:00", "19:00"]],
        [AnimalAction.SLEEP, ["02:00", "15:00"]]
    ])
}

export const WesternMoose: Species = {
    name: SpeciesName.WESTERN_MOOSE,
    primaryHabitats: [],
    secondaryHabitats: [],
    huntingTier: 6,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.DRINK, []],
        [AnimalAction.FEED, []],
        [AnimalAction.SLEEP, []]
    ])
}

export const WhitetailDeer: Species = {
    name: SpeciesName.WHITETAIL_DEER,
    primaryHabitats: [],
    secondaryHabitats: [],
    huntingTier: 5,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.DRINK, ["00:00", "11:00"]],
        [AnimalAction.FEED, ["07:00", "19:00"]],
        [AnimalAction.SLEEP, ["02:00", "15:00"]]
    ])
}

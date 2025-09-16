import { Biome } from "../../types/entities/Region";
import { AnimalAction, SpeciesName, type Species } from "../../types/entities/Species";

export const EgyptianGoose: Species = {
    name: SpeciesName.EGYPTIAN_GOOSE,
    primaryHabitats: [Biome.GRASSLANDS_AND_FORESTS, Biome.SAVANNA],
    secondaryHabitats: [],
    huntingTier: 1,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.SLEEP, ["00:00", "10:00", "16:00", "20:00"]],
        [AnimalAction.DRINK, []],
        [AnimalAction.FEED, ["06:00", "12:00", "18:00"]]
    ])
}

export const GreylagGoose: Species = {
    name: SpeciesName.GREYLAG_GOOSE,
    primaryHabitats: [Biome.FLOODPLAIN],
    secondaryHabitats: [],
    huntingTier: 1,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.SLEEP, ["00:00", "10:00", "16:00", "20:00"]],
        [AnimalAction.DRINK, []],
        [AnimalAction.FEED, ["06:00", "12:00", "18:00"]]
    ])
}

export const LesserScaup: Species = {
    name: SpeciesName.LESSER_SCAUP,
    primaryHabitats: [Biome.SWAMPS],
    secondaryHabitats: [],
    huntingTier: 1,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.SLEEP, ["00:00", "10:00", "16:00", "20:00"]],
        [AnimalAction.DRINK, []],
        [AnimalAction.FEED, ["06:00", "12:00", "18:00"]]
    ])
}

export const RossGoose: Species = {
    name: SpeciesName.ROSS_GOOSE,
    primaryHabitats: [Biome.SWAMPS],
    secondaryHabitats: [],
    huntingTier: 1,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.SLEEP, ["00:00", "10:00", "16:00", "20:00"]],
        [AnimalAction.DRINK, []],
        [AnimalAction.FEED, ["06:00", "12:00", "18:00"]]
    ])
}

export const SurfScoter: Species = {
    name: SpeciesName.SURF_SCOTER,
    primaryHabitats: [Biome.SWAMPS],
    secondaryHabitats: [],
    huntingTier: 1,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.SLEEP, ["00:00", "10:00", "16:00", "20:00"]],
        [AnimalAction.DRINK, []],
        [AnimalAction.FEED, ["06:00", "12:00", "18:00"]]
    ])
}

export const WildDuck: Species = {
    name: SpeciesName.WILD_DUCK,
    primaryHabitats: [Biome.SWAMPS],
    secondaryHabitats: [Biome.FLOODPLAIN],
    huntingTier: 1,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.SLEEP, ["00:00", "10:00", "16:00", "20:00"]],
        [AnimalAction.DRINK, []],
        [AnimalAction.FEED, ["06:00", "12:00", "18:00"]]
    ])
}

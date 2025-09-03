import { Biome } from "../../types/entities/Region";
import { AnimalAction, SpeciesName, type Species } from "../../types/entities/Species";


export const Lion: Species = {
    name: SpeciesName.LION,
    primaryHabitats: [Biome.SAVANNA],
    secondaryHabitats: [Biome.HIGHLANDS],
    huntingTier: 6,
    weightRanges: [],
    lifeCycle: new Map([
        [AnimalAction.SLEEP, ["00:00", "10:00"]],
        [AnimalAction.DRINK, ["07:00", "19:00"]],
        [AnimalAction.FEED, ["03:00", "15:00"]]
    ])
}
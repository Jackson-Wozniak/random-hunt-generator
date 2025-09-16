import { MapName, type Map } from "../../types/entities/Map";
import { Biome, type Region } from "../../types/entities/Region";
import { EurasianBadger, EurasianWolverine } from "../species/Badgers";
import { BrownBear } from "../species/Bears";
import { NorthernLynx } from "../species/BigCats";
import { ArticFox, GrayWolf, RedFox } from "../species/Canines";
import { EurasianMoose, FallowDeer, MountainReindeer, RedDeer, RoeDeer } from "../species/Deer";
import { Pheasant } from "../species/GroundBirds";
import { EuropeanHare, EuropeanRabbit } from "../species/Rabbits";
import { WildBoar } from "../species/Swine";
import { GreylagGoose, WildDuck } from "../species/WaterBirds";
import { Mouflon } from "../species/WildCattle";

export const TulvaForests: Region = {
    name: "Tulva Forests",
    biome: Biome.LOWLAND_FOREST,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 0,
    huntingStandCount: 0,
    species: [
        BrownBear, EurasianBadger, EurasianMoose,
        EurasianWolverine, EuropeanRabbit, GreylagGoose,
        NorthernLynx, Pheasant, RedDeer,
        RedFox, RoeDeer, WildBoar, WildDuck
    ]
}

export const MatalaLakes: Region = {
    name: "Matala Lakes",
    biome: Biome.SWAMPS,
    hasCabin: true,
    isPrivatePass: false,
    campsiteCount: 0,
    huntingStandCount: 0,
    species: [
        BrownBear, EurasianBadger, EurasianMoose,
        EurasianWolverine, EuropeanRabbit, GreylagGoose,
        NorthernLynx, Pheasant, RedDeer,
        RedFox, RoeDeer, WildBoar, WildDuck
    ]
}

export const LehtoSwamps: Region = {
    name: "Lehto Swamps",
    biome: Biome.SWAMPS,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 0,
    huntingStandCount: 0,
    species: [
        BrownBear, EurasianBadger, EurasianMoose, EurasianWolverine,
        EuropeanRabbit, FallowDeer, GrayWolf, Mouflon,
        NorthernLynx, Pheasant, RedDeer, RoeDeer
    ]
}

export const VaaraHighlands: Region = {
    name: "VaaraHighlands",
    biome: Biome.HIGHLAND_FOREST,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 0,
    huntingStandCount: 0,
    species: [
        ArticFox, BrownBear, EurasianBadger, EurasianMoose, EurasianWolverine,
        EuropeanRabbit, EuropeanHare, FallowDeer, GrayWolf,
        Mouflon, MountainReindeer, NorthernLynx, Pheasant,
        RedDeer, RedFox, WildDuck 
    ]
}

export const TarunoGrounds: Region = {
    name: "TarunoGrounds",
    biome: Biome.HIGHLAND_FOREST,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 0,
    huntingStandCount: 0,
    species: [
        BrownBear, EurasianBadger,
        EuropeanRabbit, EuropeanHare, FallowDeer, GrayWolf,
        Mouflon, MountainReindeer, NorthernLynx,
        RedDeer, RoeDeer, WildDuck
    ]
}

export const SaarakeWoods: Region = {
    name: "Saarake Woods",
    biome: Biome.LOWLAND_FOREST,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 0,
    huntingStandCount: 0,
    species: [
        BrownBear, EurasianBadger, EurasianWolverine, FallowDeer, MountainReindeer,
        Pheasant, RedDeer, RedFox, RoeDeer, WildBoar, WildDuck
    ]
}

export const TunturiHills: Region = {
    name: "TunturiHills",
    biome: Biome.HIGHLANDS,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 0,
    huntingStandCount: 0,
    species: [
        ArticFox, EuropeanHare, GrayWolf, Mouflon, MountainReindeer
    ]
}

export const LintukotoReserve: Map = {
    name: MapName.LINTUKOTO_RESERVE,
    isDLC: true,
    regions: [
        TulvaForests, MatalaLakes, LehtoSwamps, VaaraHighlands,
        TarunoGrounds, SaarakeWoods, TunturiHills
    ]
}
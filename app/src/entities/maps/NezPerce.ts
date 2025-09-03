import { MapName, type Map } from "../../types/entities/Map";
import { Biome, type Region } from "../../types/entities/Region";
import { AmericanBadger } from "../species/Badgers";
import { AmericanBlackBear } from "../species/Bears";
import { GrayWolf, RedFox } from "../species/Canines";
import { MuleDeer, RockyMountainElk, WesternMoose, WhitetailDeer } from "../species/Deer";
import { Pheasant } from "../species/GroundBirds";
import { SnowshoeHare } from "../species/Rabbits";
import { LesserScaup, RossGoose, WildDuck } from "../species/WaterBirds";
import { BighornSheep, MountainGoat } from "../species/WildCattle";


export const WhitePineOrchard: Region = {
    name: "White Pine Orchard",
    biome: Biome.HIGHLAND_FOREST,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 2,
    huntingStandCount: 3,
    species: [
        SnowshoeHare, AmericanBadger, RedFox, MuleDeer, WhitetailDeer, 
        AmericanBlackBear, RockyMountainElk, WesternMoose
    ]
}

export const Cottonwood: Region = {
    name: "Cottonwood",
    biome: Biome.GRASSLAND,
    hasCabin: true,
    isPrivatePass: false,
    campsiteCount: 1,
    huntingStandCount: 7,
    species: [
        Pheasant, AmericanBadger, RedFox, MuleDeer, WhitetailDeer, RockyMountainElk
    ]
}

export const KaniksuShores: Region = {
    name: "Kaniksu Shores",
    biome: Biome.SWAMPS,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 1,
    huntingStandCount: 1,
    species: [
        LesserScaup, RossGoose, SnowshoeHare, WildDuck, RedFox, MuleDeer,
        WhitetailDeer, AmericanBlackBear, RockyMountainElk, WesternMoose
    ]
}

export const SmallPaws: Region = {
    name: "Small Paws",
    biome: Biome.LOWLAND_FOREST,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 2,
    huntingStandCount: 3,
    species: [
        AmericanBadger, RedFox, GrayWolf, MuleDeer, WhitetailDeer, RockyMountainElk
    ]
}

export const SheepeaterRidge: Region = {
    name: "Sheepeater Ridge",
    biome: Biome.MOUNTAINS,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 1,
    huntingStandCount: 2,
    species: [
        BighornSheep, GrayWolf, MountainGoat, RockyMountainElk
    ]
}

export const CascadeForest: Region = {
    name: "Cascade Forest",
    biome: Biome.HIGHLAND_FOREST,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 2,
    huntingStandCount: 1,
    species: [
        SnowshoeHare, RedFox, WildDuck, MuleDeer, WhitetailDeer, AmericanBlackBear, RockyMountainElk
    ]
}

export const Breakwater: Region = {
    name: "Breakwater",
    biome: Biome.SWAMPS,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 2,
    huntingStandCount: 1,
    species: [
        LesserScaup, RossGoose, WildDuck, AmericanBadger, RedFox, MuleDeer, WhitetailDeer, WesternMoose
    ]
}

export const Rivermouth: Region = {
    name: "Rivermouth",
    biome: Biome.GRASSLAND,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 1,
    huntingStandCount: 3,
    species: [
        Pheasant, AmericanBadger, RedFox, AmericanBadger, MuleDeer, WhitetailDeer, RockyMountainElk
    ]
}

export const HeDevil: Region = {
    name: "He Devil",
    biome: Biome.MOUNTAINS,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 2,
    huntingStandCount: 1,
    species: [
        BighornSheep, GrayWolf, WhitetailDeer, MountainGoat, AmericanBlackBear, RockyMountainElk
    ]
}

export const BlackFoxRange: Region = {
    name: "Black Fox Range",
    biome: Biome.LOWLAND_FOREST,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 1,
    huntingStandCount: 2,
    species: [
        AmericanBadger, RedFox, GrayWolf, MuleDeer, WhitetailDeer, RockyMountainElk
    ]
}

export const ThornSprings: Region = {
    name: "Thorn Springs",
    biome: Biome.HIGHLAND_FOREST,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 2,
    huntingStandCount: 3,
    species: [
        SnowshoeHare, AmericanBadger, RedFox, MuleDeer, WhitetailDeer, 
        AmericanBlackBear, RockyMountainElk, WesternMoose
    ]
}

export const Greenacres: Region = {
    name: "Greenacres",
    biome: Biome.LOWLAND_FOREST,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 2,
    huntingStandCount: 5,
    species: [
        Pheasant, AmericanBadger, RedFox, GrayWolf, MuleDeer, WhitetailDeer, RockyMountainElk
    ]
}

export const FallsReservoir: Region = {
    name: "Falls Reservoir",
    biome: Biome.SWAMPS,
    hasCabin: true,
    isPrivatePass: true,
    campsiteCount: 1,
    huntingStandCount: 2,
    species: [
        LesserScaup, RossGoose, WildDuck, WesternMoose
    ]
}

export const SheDevil: Region = {
    name: "She Devil",
    biome: Biome.MOUNTAINS,
    hasCabin: true,
    isPrivatePass: true,
    campsiteCount: 2,
    huntingStandCount: 2,
    species: [
        BighornSheep, GrayWolf, MountainGoat, RockyMountainElk
    ]
}

export const Haliwitch: Region = {
    name: "Haliwitch",
    biome: Biome.HIGHLAND_FOREST,
    hasCabin: true,
    isPrivatePass: true,
    campsiteCount: 1,
    huntingStandCount: 2,
    species: [
        SnowshoeHare, GrayWolf, MountainGoat, MuleDeer, WhitetailDeer, AmericanBlackBear, RockyMountainElk
    ]
}

export const DiamondDrill: Region = {
    name: "Diamond Drill",
    biome: Biome.LOWLAND_FOREST,
    hasCabin: true,
    isPrivatePass: true,
    campsiteCount: 2,
    huntingStandCount: 3,
    species: [
        RedFox, GrayWolf, MuleDeer, WhitetailDeer
    ]
}

export const NezPerce: Map = {
    name: MapName.NEZ_PERCE,
    isDLC: false,
    regions: [
        WhitePineOrchard, Cottonwood, KaniksuShores,
        SmallPaws, SheepeaterRidge, CascadeForest,
        Breakwater, Rivermouth, HeDevil,
        BlackFoxRange, ThornSprings, Greenacres,
        FallsReservoir, SheDevil, Haliwitch, DiamondDrill
    ]
}

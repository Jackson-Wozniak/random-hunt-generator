import { MapName, type Map } from "../../types/entities/Map";
import { type Region, Biome } from "../../types/entities/Region";
import { AmericanBlackBear, KodiakBear } from "../species/Bears";
import { GrayWolf, RedFox } from "../species/Canines";
import { AlaskaMoose, BarrenGroundCaribou, RooseveltElk, SitkaDeer } from "../species/Deer";
import { SnowshoeHare } from "../species/Rabbits";
import { LesserScaup, SurfScoter, WildDuck } from "../species/WaterBirds";
import { MountainGoat, WoodBison } from "../species/WildCattle";

export const NianukRise: Region = {
    name: "Nianuk Rise",
    biome: Biome.MOUNTAINS,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 1,
    huntingStandCount: 0,
    species: [
        SnowshoeHare, RedFox, MountainGoat, GrayWolf, BarrenGroundCaribou
    ]
}

export const ShalaskaPlains: Region = {
    name: "Shalaska Plains",
    biome: Biome.GRASSLAND,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 1,
    huntingStandCount: 0,
    species: [
        AlaskaMoose, AmericanBlackBear, BarrenGroundCaribou, GrayWolf,
        LesserScaup, RedFox, RooseveltElk, SnowshoeHare, WoodBison
    ]
}

export const PlymbaltRange: Region = {
    name: "Plymbalt Range",
    biome: Biome.HIGHLANDS,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 1,
    huntingStandCount: 0,
    species: [
        RooseveltElk, SitkaDeer, SnowshoeHare
    ]
}

export const AntlerHighlands: Region = {
    name: "Antler Highlands",
    biome: Biome.HIGHLAND_FOREST,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 1,
    huntingStandCount: 0,
    species: [
        AlaskaMoose, AmericanBlackBear, BarrenGroundCaribou, GrayWolf,
        RedFox, RooseveltElk, SitkaDeer, SnowshoeHare, WoodBison
    ]
}

export const PointWritter: Region = {
    name: "Point Writter",
    biome: Biome.MOUNTAINS,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 1,
    huntingStandCount: 0,
    species: [
        AlaskaMoose, BarrenGroundCaribou, GrayWolf, MountainGoat
    ]
}

export const LongnoseTips: Region = {
    name: "Longnose Tips",
    biome: Biome.HIGHLAND_FOREST,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 1,
    huntingStandCount: 0,
    species: [
        AlaskaMoose, AmericanBlackBear, BarrenGroundCaribou, GrayWolf,
        RedFox, RooseveltElk, SitkaDeer, SnowshoeHare, WoodBison
    ]
}

export const FigwortTails: Region = {
    name: "Figwort Tails",
    biome: Biome.GRASSLAND,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 1,
    huntingStandCount: 0,
    species: [
        AlaskaMoose, AmericanBlackBear, BarrenGroundCaribou, GrayWolf,
        LesserScaup, RedFox, RooseveltElk, SnowshoeHare,
        SurfScoter, WildDuck, WoodBison
    ]
}

export const GraylingPeaks: Region = {
    name: "Grayling Peaks",
    biome: Biome.HIGHLAND_FOREST,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 1,
    huntingStandCount: 0,
    species: [
        AlaskaMoose, AmericanBlackBear, BarrenGroundCaribou, GrayWolf,
        RedFox, RooseveltElk, SnowshoeHare, WildDuck, WoodBison
    ]
}

export const RustowikGrasslandss: Region = {
    name: "Rustowik Grasslands",
    biome: Biome.GRASSLAND,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 1,
    huntingStandCount: 0,
    species: [
        AlaskaMoose, AmericanBlackBear, BarrenGroundCaribou, GrayWolf,
        LesserScaup, RedFox, RooseveltElk, SnowshoeHare, SurfScoter, WildDuck, WoodBison
    ]
}

export const AivukRainforest: Region = {
    name: "Aivuk Rainforest",
    biome: Biome.RAINFOREST,
    hasCabin: true,
    isPrivatePass: true,
    campsiteCount: 2,
    huntingStandCount: 0,
    species: [
        KodiakBear, LesserScaup, RooseveltElk, SitkaDeer, SurfScoter
    ]
}

export const AuroraShores: Map = {
    name: MapName.AURORA_SHORES,
    isDLC: true,
    regions: [
        NianukRise, ShalaskaPlains, PlymbaltRange, AntlerHighlands,
        PointWritter, LongnoseTips, FigwortTails, GraylingPeaks,
        RustowikGrasslandss, AivukRainforest
    ]
}
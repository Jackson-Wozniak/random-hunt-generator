import { MapName, type Map } from "../../types/entities/Map";
import { Biome, type Region } from "../../types/entities/Region";
import { HoneyBadger } from "../species/Badgers";
import { Lion } from "../species/BigCats";
import { SpottedHyena } from "../species/Canines";
import { HelmetedGuineafowl } from "../species/GroundBirds";
import { CommonWarthog } from "../species/Swine";
import { EgyptianGoose } from "../species/WaterBirds";
import { BlackWildebeest, BlueWildebeest, CapeBuffalo, Gemsbok, GreaterKudu, Springbok } from "../species/WildCattle";

export const OngewoonTops: Region = {
    name: "Ongewoon Tops",
    biome: Biome.HIGHLANDS,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 2,
    huntingStandCount: 4,
    species: [
        EgyptianGoose, HelmetedGuineafowl, HoneyBadger,
        SpottedHyena, CapeBuffalo, Gemsbok, GreaterKudu, Lion
    ]
}

export const BuffaloExpanse: Region = {
    name: "Buffalo Expanse",
    biome: Biome.HIGHLANDS,
    hasCabin: true,
    isPrivatePass: false,
    campsiteCount: 3,
    huntingStandCount: 4,
    species: [
        HoneyBadger, SpottedHyena, CapeBuffalo, Gemsbok, GreaterKudu, Lion
    ]
}

export const DrearySavanna: Region = {
    name: "Dreary Savanna",
    biome: Biome.SAVANNA,
    hasCabin: true,
    isPrivatePass: false,
    campsiteCount: 2,
    huntingStandCount: 3,
    species: [
        HoneyBadger, CommonWarthog, SpottedHyena,
        BlueWildebeest, Gemsbok, GreaterKudu, Lion
    ]
}

export const RestlessDunes: Region = {
    name: "Restless Dunes",
    biome: Biome.ARID_SAVANNA_AND_DESERT,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 1,
    huntingStandCount: 1,
    species: [
        HoneyBadger, Springbok, SpottedHyena, CapeBuffalo,
        Gemsbok, GreaterKudu, Lion
    ]
}

export const ScorchedBarrens: Region = {
    name: "Scorched Barrens",
    biome: Biome.ARID_SAVANNA_AND_DESERT,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 4,
    huntingStandCount: 3,
    species: [
        HoneyBadger, Springbok, CommonWarthog, SpottedHyena,
        BlueWildebeest, CapeBuffalo, Gemsbok, Lion
    ]
}

export const WhisperingFlats: Region = {
    name: "Whispering Flats",
    biome: Biome.SAVANNA,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 2,
    huntingStandCount: 0,
    species: [
        HoneyBadger, CommonWarthog, SpottedHyena, BlueWildebeest,
        Gemsbok, GreaterKudu, Lion
    ]
}

export const LakeHuisie: Region = {
    name: "Lake Huisie",
    biome: Biome.GRASSLANDS_AND_FORESTS,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 1,
    huntingStandCount: 2,
    species: [
        EgyptianGoose, HelmetedGuineafowl, Springbok, BlackWildebeest,
        CommonWarthog, CapeBuffalo, GreaterKudu
    ]
}

export const StroomopGrassland: Region = {
    name: "Stroomop Grassland",
    biome: Biome.GRASSLANDS_AND_FORESTS,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 5,
    huntingStandCount: 8,
    species: [
        EgyptianGoose, HelmetedGuineafowl, Springbok, BlackWildebeest,
        CommonWarthog, CapeBuffalo, GreaterKudu
    ]
}

export const RapturousRefuge: Region = {
    name: "Rapturous Refuge",
    biome: Biome.SAVANNA,
    hasCabin: true,
    isPrivatePass: true,
    campsiteCount: 0,
    huntingStandCount: 1,
    species: [
        EgyptianGoose, HelmetedGuineafowl, HoneyBadger,
        CapeBuffalo, GreaterKudu, Lion
    ]
}

export const TikamoonPlains: Map = {
    name: MapName.TIKAMOON_PLAINS,
    isDLC: true,
    regions: [
        OngewoonTops, BuffaloExpanse, DrearySavanna, RestlessDunes,
        ScorchedBarrens, WhisperingFlats, LakeHuisie,
        StroomopGrassland, RapturousRefuge
    ]
}
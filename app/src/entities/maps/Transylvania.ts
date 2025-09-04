import { MapName, type Map } from "../../types/entities/Map";
import { Biome, type Region } from "../../types/entities/Region";
import { AmericanBadger, EurasianBadger } from "../species/Badgers";
import { AmericanBlackBear, BrownBear } from "../species/Bears";
import { GoldenJackal, GrayWolf, RedFox } from "../species/Canines";
import { MuleDeer, WhitetailDeer, RockyMountainElk, WesternMoose, RoeDeer, FallowDeer, RedDeer } from "../species/Deer";
import { Pheasant } from "../species/GroundBirds";
import { EuropeanHare, SnowshoeHare } from "../species/Rabbits";
import { WildBoar } from "../species/Swine";
import { GreylagGoose, WildDuck } from "../species/WaterBirds";
import { Chamois, Mouflon } from "../species/WildCattle";

export const PiatraMica: Region = {
    name: "Piatra Mica",
    biome: Biome.MOUNTAINS,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 2,
    huntingStandCount: 1,
    species: [
        Chamois, Mouflon, GrayWolf
    ]
}

export const CorbMaiMarePlain: Region = {
    name: "Corb Mai Mare Plain",
    biome: Biome.GRASSLAND,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 2,
    huntingStandCount: 2,
    species: [
        EuropeanHare, GreylagGoose, Pheasant, WildDuck,
        RedFox, GoldenJackal, RoeDeer, FallowDeer, RedDeer
    ]
}

export const ReginaMountain: Region = {
    name: "Regina Mountain",
    biome: Biome.MOUNTAINS,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 1,
    huntingStandCount: 0,
    species: [
        Chamois, Mouflon, GrayWolf
    ]
}

export const LempesHills: Region = {
    name: "Lempes Hills",
    biome: Biome.LOWLAND_FOREST,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 3,
    huntingStandCount: 2,
    species: [
        EurasianBadger, RedFox, GoldenJackal, RoeDeer, FallowDeer,
        GrayWolf, WildBoar, RedDeer
    ]
}

export const MareleBaron: Region = {
    name: "Marele Baron",
    biome: Biome.HIGHLAND_FOREST,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 1,
    huntingStandCount: 2,
    species: [
        EurasianBadger, RedFox, GrayWolf, Mouflon, BrownBear, RedDeer
    ]
}

export const AlbeGutter: Region = {
    name: "Albe Gutter",
    biome: Biome.HIGHLAND_FOREST,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 3,
    huntingStandCount: 3,
    species: [
        EurasianBadger, RedFox, GrayWolf, Mouflon, BrownBear, RedDeer
    ]
}

export const PoartaDeAur: Region = {
    name: "Poarta de Aur",
    biome: Biome.LOWLAND_FOREST,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 2,
    huntingStandCount: 2,
    species: [
        EurasianBadger, RedFox, GoldenJackal, RoeDeer, FallowDeer, GrayWolf,
        WildBoar, RedDeer
    ]
}

export const Valea: Region = {
    name: "Valea",
    biome: Biome.MOUNTAINS,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 2,
    huntingStandCount: 3,
    species: [
        EuropeanHare, Pheasant, GoldenJackal, RoeDeer, FallowDeer,
        Mouflon, WildBoar, BrownBear, RedDeer
    ]
}

export const LinistitGrounds: Region = {
    name: "Linistit Grounds",
    biome: Biome.HIGHLAND_FOREST,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 2,
    huntingStandCount: 2,
    species: [
        EurasianBadger, RedFox, Mouflon, GrayWolf, BrownBear, RedDeer
    ]
}

export const AdancExpanse: Region = {
    name: "Adanc Expanse",
    biome: Biome.FLOODPLAIN,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 2,
    huntingStandCount: 2,
    species: [
        GreylagGoose, WildDuck, WildBoar
    ]
}

export const LaleleField: Region = {
    name: "Lalele Field",
    biome: Biome.MOUNTAINS,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 1,
    huntingStandCount: 1,
    species: [
        EurasianBadger, RedFox, GoldenJackal, RoeDeer, FallowDeer,
        GrayWolf, Mouflon, WildBoar, RedDeer
    ]
}

export const MeadowsOfFluture: Region = {
    name: "MeadowsOfFluture",
    biome: Biome.MOUNTAINS,
    hasCabin: false,
    isPrivatePass: false,
    campsiteCount: 1,
    huntingStandCount: 1,
    species: [
        EuropeanHare, Pheasant, RedFox, GoldenJackal, RoeDeer,
        FallowDeer, WildBoar, RedDeer
    ]
}

export const CoadaDeVulpe: Region = {
    name: "Coada de Vulpe",
    biome: Biome.GRASSLAND,
    hasCabin: true,
    isPrivatePass: true,
    campsiteCount: 1,
    huntingStandCount: 2,
    species: [
        EuropeanHare, Pheasant, WildDuck, RedFox, WildBoar
    ]
}

export const AuroraWoods: Region = {
    name: "Aurora Woods",
    biome: Biome.LOWLAND_FOREST,
    hasCabin: true,
    isPrivatePass: true,
    campsiteCount: 1,
    huntingStandCount: 2,
    species: [
        EurasianBadger, RedFox, GoldenJackal, RoeDeer, GrayWolf,
        FallowDeer, WildBoar, RedDeer
    ]
}

export const UmbraTara: Region = {
    name: "Umbra Tara",
    biome: Biome.HIGHLAND_FOREST,
    hasCabin: true,
    isPrivatePass: true,
    campsiteCount: 2,
    huntingStandCount: 1,
    species: [
        EurasianBadger, RedFox, GrayWolf, Mouflon, BrownBear, RedDeer
    ]
}

export const DorApex: Region = {
    name: "Dor Apex",
    biome: Biome.MOUNTAINS,
    hasCabin: true,
    isPrivatePass: true,
    campsiteCount: 1,
    huntingStandCount: 0,
    species: [
        GoldenJackal, RoeDeer, Chamois, Mouflon, GrayWolf
    ]
}

export const Transylvania: Map = {
    name: MapName.TRANSYLVANIA,
    isDLC: false,
    regions: [
        PiatraMica, CorbMaiMarePlain, ReginaMountain, LempesHills,
        MareleBaron, AlbeGutter, PoartaDeAur, Valea,
        LinistitGrounds, AdancExpanse, LaleleField, MeadowsOfFluture,
        CoadaDeVulpe, AuroraWoods, UmbraTara, DorApex
    ]
}

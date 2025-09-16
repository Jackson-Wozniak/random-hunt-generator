import { MapName, type Map } from "../../types/entities/Map";
import { Biome, type Region } from "../../types/entities/Region";
import { FallowDeer, RedDeer, RockyMountainElk, SambarDeer, SikaDeer, WhitetailDeer } from "../species/Deer";
import { HelmetedGuineafowl, Pheasant } from "../species/GroundBirds";
import { EuropeanHare, EuropeanRabbit } from "../species/Rabbits";
import { FeralPig, WildBoar } from "../species/Swine";
import { GreylagGoose, WildDuck } from "../species/WaterBirds";
import { Chamois, FeralGoat, HimalayanTahr } from "../species/WildCattle";

export const RotoHoariForest: Region = {
    name: "Roto Hoari Forest",
    biome: Biome.LOWLAND_FOREST,
    hasCabin: true,
    isPrivatePass: false,
    campsiteCount: 2,
    huntingStandCount: 0,
    species: [
        EuropeanRabbit, FallowDeer, FeralPig, RedDeer,
        RockyMountainElk, SikaDeer, WhitetailDeer, WildBoar
    ]
}

export const ManaNuiHills: Region = {
    name: "ManaNuiHills",
    biome: Biome.HIGHLANDS,
    hasCabin: true,
    isPrivatePass: false,
    campsiteCount: 2,
    huntingStandCount: 0,
    species: [
        Chamois, EuropeanHare, HimalayanTahr, RockyMountainElk,
        SambarDeer, WhitetailDeer
    ]
}

export const AwaItiWoodland: Region = {
    name: "Awa Iti Woodland",
    biome: Biome.LOWLAND_FOREST,
    hasCabin: true,
    isPrivatePass: false,
    campsiteCount: 2,
    huntingStandCount: 0,
    species: [
        EuropeanHare, EuropeanRabbit, FallowDeer, FeralPig,
        HelmetedGuineafowl, Pheasant, RedDeer, SambarDeer,
        SikaDeer, WhitetailDeer, WildDuck
    ]
}

export const PuiaMoeRise: Region = {
    name: "Puia Moe Rise",
    biome: Biome.MOUNTAINS,
    hasCabin: true,
    isPrivatePass: false,
    campsiteCount: 2,
    huntingStandCount: 0,
    species: [
        Chamois, FeralGoat, GreylagGoose, HimalayanTahr,
        RedDeer, SambarDeer
    ]
}

export const OkiokingaHills: Region = {
    name: "OkiokingaHills",
    biome: Biome.HIGHLANDS,
    hasCabin: true,
    isPrivatePass: false,
    campsiteCount: 2,
    huntingStandCount: 0,
    species: [
        Chamois, EuropeanHare, FeralGoat, FeralPig,
        GreylagGoose, HelmetedGuineafowl, HimalayanTahr,
        Pheasant, RockyMountainElk, SambarDeer, SikaDeer,
        WhitetailDeer, WildBoar
    ]
}

export const ArohaMeadows: Region = {
    name: "ArohaMeadows",
    biome: Biome.GRASSLAND,
    hasCabin: true,
    isPrivatePass: false,
    campsiteCount: 2,
    huntingStandCount: 0,
    species: [
        EuropeanHare, EuropeanRabbit, FallowDeer, FeralPig,
        HelmetedGuineafowl, Pheasant, RedDeer, SambarDeer,
        SikaDeer, WhitetailDeer, WildBoar
    ]
}

export const AwaNuiTops: Region = {
    name: "Awa Nui Tops",
    biome: Biome.MOUNTAINS,
    hasCabin: true,
    isPrivatePass: false,
    campsiteCount: 2,
    huntingStandCount: 0,
    species: [
        Chamois, FeralGoat, HimalayanTahr, SambarDeer
    ]
}

export const RakirakiLake: Region = {
    name: "Rakiraki Lake",
    biome: Biome.GRASSLAND,
    hasCabin: true,
    isPrivatePass: false,
    campsiteCount: 2,
    huntingStandCount: 0,
    species: [
        EuropeanHare, EuropeanRabbit, FallowDeer,
        FeralGoat, FeralPig, HelmetedGuineafowl, Pheasant,
        RedDeer, SambarDeer, SikaDeer, WhitetailDeer, WildBoar
    ]
}

export const MatarikiPark: Map = {
    name: MapName.MATARIKI_PARK,
    isDLC: true,
    regions: [
        RotoHoariForest, ManaNuiHills, AwaItiWoodland, PuiaMoeRise,
        OkiokingaHills, ArohaMeadows, AwaNuiTops, RakirakiLake
    ]
}
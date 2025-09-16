import type { Biome } from "./Region"

export enum SpeciesName {
    EGYPTIAN_GOOSE = "Egyptian Goose",
    GREYLAG_GOOSE = "Greylag Goose",
    LESSER_SCAUP = "Lesser Scaup",
    ROSS_GOOSE = "Ross's Goose",
    SURF_SCOTER = "Surf Scoter",
    WILD_DUCK = "Wild Duck",

    BIGHORN_SHEEP = "Bighorn Sheep",
    BLACK_WILDEBEEST = "Black Wildebeest",
    BLUE_WILDEBEEST = "Blue Wildebeest",
    CAPE_BUFFALO = "Cape Buffalo",
    CHAMOIS = "Chamois",
    GEMSBOK = "Gemsbok",
    GREATER_KUDU = "Greater Kudu",
    MOUFLON = "Mouflon",
    MOUNTAIN_GOAT = "Mountain Goat",
    SPRINGBOK = "Springbok",
    WOOD_BISON = "Wood Bison",
    LION = "Lion",

    GOLDEN_JACKAL = "Golden Jackal",
    GRAY_WOLF = "Gray Wolf",
    RED_FOX = "Red Fox",

    ALASKA_MOOSE = "Alaska Moose",
    BARREN_GROUND_CARIBOU = "Barren-Ground Caribou",
    FALLOW_DEER = "Fallow Dear",
    MULE_DEER = "Mule Deer",
    RED_DEER = "Red Deer",
    ROCKY_MOUNTAIN_ELK = "Rocky Mountain Elk",
    ROE_DEER = "Roe Deer",
    ROOSEVELT_ELK = "Roosevelt Elk",
    SITKA_DEER = "Sitka Deer",
    WESTERN_MOOSE = "Western Moose",
    WHITETAIL_DEER = "Whitetail Deer",

    EUROPEAN_HARE = "European Hare",
    EUROPEAN_RABBIT = "European Rabbit",
    SNOWSHOE_HARE = "Snowshoe Hare",

    AMERICAN_BADGER = "American Badger",
    EURASIAN_BADGER = "Eurasian Badger",
    HONEY_BADGER = "Honey Badger",

    PHEASANT = "Pheasant",

    COMMON_WARTHOG = "Common Warthog",
    WILD_BOAR = "Wild Boar",

    AMERICAN_BLACK_BEAR = "American Black Bear",
    BROWN_BEAR = "Brown Bear",
    KODIAK_BEAR = "Kodiak Bear",
    
    HELMETED_GUINEAFOWL = "Helmeted Guineafowl",
    SPOTTED_HYENA = "Spotted Hyena",
    EURASIAN_MOOSE = "Eurasian Moose",
    EURASIAN_WOLVERINE = "Eurasian Wolverine",
    MOUNTAIN_REINDEER = "Mountain Reindeer",
    NORTHERN_LYNX = "Northern Lynx",
    ARTIC_FOX = "Artic Fox",

    FERAL_GOAT = "Feral Goat",
    FERAL_PIG = "Feral Pig",
    HIMALAYAN_TAHR = "Himalayan Tahr",
    SIKA_DEER = "Sika Deer",
    SAMBAR_DEER = "Sambar Deer"
}

export enum Family {
    ANATIDAE = "Anatidae",
    BOVIDAE = "Bovidae",
    CANIDAE = "Canidae",
    CERVIDAE = "Cervidae",
    LEPORIDAE = "Leporidae",
    MUSTELIDAE = "Mustelidae",
    PHASIANIDAE = "Phasianidae",
    SUIDAE = "Suidae",
    URSIDAE = "Ursidae",
}

export enum AnimalAge {
    YOUNG = "Young",
    ADULT = "Adult",
    MATURE = "Mature"
}

export enum AnimalSex {
    MALE = "Male",
    FEMALE = "Female"
}

export enum AnimalAction {
    SLEEP = "Sleep",
    FEED = "Feed",
    DRINK = "Drink"
}

export interface AnimalWeight {
    age: AnimalAge,
    sex: AnimalSex,
    rangeStartKg: number,
    rangeEndKg: number
}

export interface Species {
    name: SpeciesName,
    primaryHabitats: Biome[],
    secondaryHabitats: Biome[]
    huntingTier: number,
    weightRanges: AnimalWeight[],
    lifeCycle: Map<AnimalAction, string[]>
}

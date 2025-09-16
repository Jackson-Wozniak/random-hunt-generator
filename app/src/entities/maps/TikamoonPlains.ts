import { MapName, type Map } from "../../types/entities/Map";
import { Biome, type Region } from "../../types/entities/Region";
import { HoneyBadger } from "../species/Badgers";
import { Lion } from "../species/BigCats";
import { SpottedHyena } from "../species/Canines";
import { HelmetedGuineafowl } from "../species/GroundBirds";
import { EgyptianGoose } from "../species/WaterBirds";
import { CapeBuffalo, Gemsbok, GreaterKudu } from "../species/WildCattle";

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

export const TikamoonPlains: Map = {
    name: MapName.TIKAMOON_PLAINS,
    isDLC: true,
    regions: [
        OngewoonTops
    ]
}
import type { HuntParametersState } from "../components/HuntGenerator/hunt/HuntParametersDispatch";
import { AuroraShores } from "../entities/maps/AuroraShores";
import { LintukotoReserve } from "../entities/maps/LintukotoReserve";
import { MatarikiPark } from "../entities/maps/MatarikiPark";
import { NezPerce } from "../entities/maps/NezPerce";
import { TikamoonPlains } from "../entities/maps/TikamoonPlains";
import { Transylvania } from "../entities/maps/Transylvania";
import type { Map } from "../types/entities/Map";
import type { Hunt } from "../types/HuntTypes";

export function generateHunt(parameters: HuntParametersState): Hunt{
    return {
        map: getRandomMap()
    }
}

function getRandomMap(): Map {
    const random: number = getRandom(1, 6);

    switch(random){
        case 1: return NezPerce;
        case 2: return AuroraShores;
        case 3: return Transylvania;
        case 4: return TikamoonPlains;
        case 5: return MatarikiPark;
        default: return LintukotoReserve;
    }
}

function getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
}
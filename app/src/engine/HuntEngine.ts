import type { HuntParametersState } from "../components/HuntGenerator/hunt/HuntParametersDispatch";
import { NezPerce } from "../entities/maps/NezPerce";
import type { Hunt } from "../types/HuntTypes";


export function generateHunt(parameters: HuntParametersState): Hunt{
    return {
        map: NezPerce
    }
}
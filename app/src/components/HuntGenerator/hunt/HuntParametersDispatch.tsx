import type { HuntContextParameters } from "../../../types/HuntTypes";


export interface HuntParametersState {

}

export const InitialHuntParametersState: HuntParametersState = {

}

export function toHuntContextParams(state: HuntParametersState): HuntContextParameters{
    return {
        
    }
}

type HuntParametersAction =
    | { type: "" }

export const HuntParametersReducer = (state: HuntParametersState, action: HuntParametersAction) => {
    switch(action.type){
        case "": return { ...state }
    }
}
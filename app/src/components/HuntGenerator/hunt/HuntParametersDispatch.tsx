import type { HuntContextParameters } from "../../../types/HuntTypes";

export enum HuntType {
    SIMPLE = "Simple",
    TARGET_SPECIES = "Target a Species",
    STORY_BASED = "Story Based"
}

export interface HuntParametersState {
    huntType: HuntType,
    includeDLC: boolean,
    includePrivatePasses: boolean,
    minHuntingTier: number
}

export const InitialHuntParametersState: HuntParametersState = {
    huntType: HuntType.SIMPLE,
    includeDLC: false,
    includePrivatePasses: false,
    minHuntingTier: 1
}

export function toHuntContextParams(state: HuntParametersState): HuntContextParameters{
    return {
        
    }
}

type HuntParametersAction =
    | { type: "OnChangeHuntType", payload: HuntType}
    | { type: "OnChangeMinHuntingTier", payload: number}
    | { type: "OnSwitchIncludeDLC" }
    | { type: "OnSwitchIncludePrivatePasses" }

export const HuntParametersReducer = (state: HuntParametersState, action: HuntParametersAction) => {
    switch(action.type){
        case "OnChangeHuntType": return { ...state, huntType: action.payload }
        case "OnChangeMinHuntingTier": return { ...state, minHuntingTier: action.payload}
        case "OnSwitchIncludeDLC": return { ...state, includeDLC: !state.includeDLC}
        case "OnSwitchIncludePrivatePasses": return { ...state, includePrivatePasses: !state.includePrivatePasses}
    }
}
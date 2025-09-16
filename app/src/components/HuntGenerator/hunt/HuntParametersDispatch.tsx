
export enum HuntType {
    OPEN_HUNT = "Open Hunt",
    STORY_BASED = "Story Based"
}

export enum GameType {
    ALL_GAME = "All Game",
    SMALL_GAME = "Small Game",
    BIG_GAME = "Big Game"
}

export interface HuntParametersState {
    huntType: HuntType,
    includeDLC: boolean,
    includePrivatePasses: boolean,
    gameType: GameType
}

export const InitialHuntParametersState: HuntParametersState = {
    huntType: HuntType.STORY_BASED,
    includeDLC: false,
    includePrivatePasses: false,
    gameType: GameType.ALL_GAME
}

type HuntParametersAction =
    | { type: "OnChangeHuntType", payload: HuntType}
    | { type: "OnChangeGameType", payload: GameType}
    | { type: "OnSwitchIncludeDLC" }
    | { type: "OnSwitchIncludePrivatePasses" }

export const HuntParametersReducer = (state: HuntParametersState, action: HuntParametersAction) => {
    switch(action.type){
        case "OnChangeHuntType": return { ...state, huntType: action.payload }
        case "OnChangeGameType": return { ...state, gameType: action.payload}
        case "OnSwitchIncludeDLC": return { ...state, includeDLC: !state.includeDLC}
        case "OnSwitchIncludePrivatePasses": return { ...state, includePrivatePasses: !state.includePrivatePasses}
    }
}
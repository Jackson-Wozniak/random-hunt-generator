

export enum AnimalName {
    
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
    DRINK = "Drink",
    REST = "Rest"
}

export interface AnimalWeight {
    age: AnimalAge,
    sex: AnimalSex,
    rangeStartKg: number,
    rangeEndKg: number
}

export interface Animal {

}

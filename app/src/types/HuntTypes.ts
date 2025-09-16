import type { Map } from "./entities/Map";
import type { Region } from "./entities/Region";
import type { Species } from "./entities/Species";

export interface Story {
    backstory: string,
    assignment: string
}

export interface Rules {
    restriction: string,
    timeOfDay: string
}

export interface Hunt {
    map: Map,
    region: Region,
    species: Species[],
    story: Story | undefined
    rules: Rules | undefined
}
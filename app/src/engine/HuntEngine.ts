import { GameType, HuntType, type HuntParametersState } from "../components/HuntGenerator/hunt/HuntParametersDispatch";
import { Maps } from "../entities/Collections";
import { HuntingRules } from "../entities/text/Rules";
import { HuntingStories } from "../entities/text/Stories";
import type { Map } from "../types/entities/Map";
import type { Region } from "../types/entities/Region";
import type { Hunt } from "../types/HuntTypes";
import type { Species } from "../types/entities/Species";

export function generateHunt(parameters: HuntParametersState): Hunt{
    const map = getRandomMap(parameters.includeDLC);
    const region = getRandomRegion(map, parameters.includePrivatePasses);
    const species = parameters.huntType === HuntType.STORY_BASED
        ? [getRandomSpecies(region, parameters.gameType)]
        : [...region.species];
    const story = parameters.huntType == HuntType.STORY_BASED ? getRandomStory() : undefined;
    const rules = parameters.huntType == HuntType.STORY_BASED ? getRandomRules() : undefined;

    if(story != undefined && species != undefined){
        story.backstory = story.backstory.replaceAll("{species}", species[0].name);
        story.assignment = story.assignment.replaceAll("{species}", species[0].name);
    }

    return {
        map: map,
        region: region,
        species: species,
        story: story == undefined ? undefined : story,
        rules: rules == undefined ? undefined : {
            restriction: rules?.restriction, timeOfDay: rules?.timeOfDay
        }
    }
}

function getRandomMap(includeDLC: boolean): Map {
    let maps: Map[] = [...Maps];
    if(!includeDLC) maps = maps.filter(m => !m.isDLC);
    const random: number = getRandom(0, maps.length);

    return maps[random];
}

function getRandomRegion(map: Map, includePrivatePasses: boolean){
    let regions: Region[] = [...map.regions];
    if(!includePrivatePasses) regions = regions.filter(m => !m.isPrivatePass);
    const random: number = getRandom(0, regions.length);

    return regions[random];
}

function getRandomSpecies(region: Region, gameType: GameType){
    let species: Species[] = [...region.species];
    if(gameType != GameType.ALL_GAME){
        const isBigGame: boolean = gameType == GameType.BIG_GAME;
        if(isBigGame){
            species = species.filter(s => s.huntingTier > 3);
        }else{
            species = species.filter(s => s.huntingTier < 4);
        }
    }

    if (species.length === 0) {
        return region.species[getRandom(0, region.species.length)];
    }
    
    const random: number = getRandom(0, species.length);

    return species[random];
}

function getRandomRules(){
    const random: number = getRandom(0, HuntingRules.length);

    return HuntingRules[random];
}

function getRandomStory(){
    const random: number = getRandom(0, HuntingStories.length);

    return HuntingStories[random];
}

function getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
}
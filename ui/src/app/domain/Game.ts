import { IConversation } from './IConversation';
import { SceneLookup } from './../loader/SceneLookup';
import { IScene } from './IScene';
import { Car } from './Car';
import { ElementRef } from '@angular/core';

export class Game {
    public lookup = new SceneLookup();
    public currentScene: IScene;
    public currentConversation: IConversation;
    public car: Car = new Car();

    constructor() {
        this.reloadScene();
    }

    reloadScene(): IScene {
        this.currentScene = (localStorage.getItem('current-scene') !== null) ? this.lookup.listing[localStorage.getItem('current-scene')] : null;
        return this.currentScene;
    }
}

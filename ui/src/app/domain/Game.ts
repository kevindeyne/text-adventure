import { SceneLookup } from './../loader/SceneLookup';
import { Scene } from './../domain/Scene';
import { IScene } from './IScene';

export class Game {
    public lookup = new SceneLookup();
    public currentScene: IScene;

    constructor () {
        this.reloadScene();
    }

    reloadScene () {
        this.currentScene = (localStorage.getItem('current-scene') !== null) ? this.lookup.listing[localStorage.getItem('current-scene')] : null;
    }
}

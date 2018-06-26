import { Scene } from './../domain/Scene';
import { IScene } from './../domain/IScene';
import { InitCarScene } from './0_intro/0_car';
import { CarDarkScene } from './0_intro/0_car_dark';
import { CarLightScene } from './0_intro/0_car_light';

export class SceneLookup {
    //TODO load in modules
    public listing = new Map<string, Scene>();

    constructor() {
        this.addScene(new InitCarScene());
        this.addScene(new CarDarkScene());
        this.addScene(new CarLightScene());
    }

    private addScene(scene: IScene) {
        this.listing[scene.id] = scene;
    }
}

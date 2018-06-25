import { InitCarScene } from './0_car';
import { Scene } from './../domain/Scene';
import { IScene } from './../domain/IScene';

export class SceneLookup {

    public listing = new Map<string, Scene>();

    constructor () {
        this.addScene(new InitCarScene());
    }

    private addScene(scene: IScene){
        this.listing[scene.id] = new InitCarScene();
    }
}

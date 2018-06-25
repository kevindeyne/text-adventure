import { Interaction } from './../../domain/Interaction';
import * as Interactions from './../../globals/Interactions';
import { Scene } from './../../domain/Scene';
import { IScene } from '../../domain/IScene';

export class InitCarScene implements IScene {
    
    public id: string;
    public scene: Scene;

    constructor () {
        this.id = '0_init-car';
        this.scene = new Scene();
        this.scene.addText('Endless lush forests stretch out on both sides of the car. Rows upon rows of old pine trees cover the horizons, enveloping your car completely. In front of you, your headlights can only light up a simple two-lane road. It stretches on forever.');
        this.scene.addText('A slow stream of rain drains down from the gloomy gathering of clouds above you. The drive was long. You have seen no other car for hours.');
        this.scene.addText('(In order to interact with the story, type in your action where it says \'enter command\'. Try \'look around\')');

        let lookAround = new Interaction(Interactions.LOOK_AROUND);
        lookAround.nextSceneId = '0_car-dark';
        this.scene.interactions = [lookAround];
    }
}

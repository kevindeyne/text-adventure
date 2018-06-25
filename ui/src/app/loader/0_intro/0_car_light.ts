import { Interaction } from './../../domain/Interaction';
import * as Interactions from './../../globals/Interactions';
import { Scene } from './../../domain/Scene';
import { IScene } from '../../domain/IScene';
import { game } from '../../globals/globals';

export class CarLightScene implements IScene {
    
    public id: string;
    public scene: Scene;

    constructor () {
        this.id = '0_car-light';
        this.scene = new Scene();

        this.scene.addText('You press the button.');
        this.scene.addText('\'Indoor lighting: on\', a soft, automated voice says. A dim blue light shines across the interior of your car. You see the radio controls and a passenger compartment.');

        let press = new Interaction(Interactions.PRESS);
        press.nextSceneId = '0_car-dark';
        press.action = function(){ game.car.light = false; };
        this.scene.interactions = [press];

        
    }
}

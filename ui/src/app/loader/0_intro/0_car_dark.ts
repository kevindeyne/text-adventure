import { game } from './../../globals/globals';
import { Interaction } from './../../domain/Interaction';
import * as Interactions from './../../globals/Interactions';
import { Scene } from './../../domain/Scene';
import { IScene } from '../../domain/IScene';

export class CarDarkScene implements IScene {
    
    public id: string;
    public scene: Scene;

    constructor () {
        this.id = '0_car-dark';
        this.scene = new Scene();
        this.scene.addConditionalText(function() { return !game.car.light; }, 'The sun is already setting. There is little to see outside, other than the never-ending sea of trees. The inside of your car is too dark to see anything other than your dashboard lights. As your eyes glance upwards, a small button lights up. It shows a light-bulb symbol.');
        this.scene.addConditionalText(function() { return game.car.light; }, 'The same voice replies. \'Indoor lighting: off\', she says. The dim blue light slowly fades. It flickers momentarily, then turns off. Your car is not what it used to be.');

        let press = new Interaction(Interactions.PRESS);
        press.action = function(){ game.car.light = true; };
        press.nextSceneId = '0_car-light';
        this.scene.interactions = [press];
    }
}

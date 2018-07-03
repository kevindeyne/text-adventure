import { ConditionalSceneSwitch } from './../../domain/ConditionalSceneSwitch';
import { game } from './../../globals/globals';
import { Interaction } from './../../domain/Interaction';
import { Scene } from './../../domain/Scene';
import { IScene } from '../../domain/IScene';

export class HostelOutsideScene implements IScene {

    public id: string;
    public scene: Scene;

    constructor() {
        this.id = '2_hostel_outside';
        this.scene = new Scene();
        this.scene.addConditionalText(function () { return !game.data.car_light; }, 'Boop beep');
        this.scene.addConditionalText(function () { return game.data.car_light; }, 'Beep boop');

        let press = new Interaction(['button', 'light']);
        press.action = function (htmlTag: HTMLElement) {
            game.data.car_light = true;
            //TODO htmlTag.style.backgroundColor = '#111a25';
        };
        press.nextScene = new ConditionalSceneSwitch('0_car-light', function() { return true; });
        this.scene.interactions = [press];
    }
}

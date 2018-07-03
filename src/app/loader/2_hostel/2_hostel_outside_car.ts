import { ConditionalSceneSwitch } from './../../domain/ConditionalSceneSwitch';
import { game } from './../../globals/globals';
import { Interaction } from './../../domain/Interaction';
import { Scene } from './../../domain/Scene';
import { IScene } from '../../domain/IScene';
import { EXIT } from '../../globals/Interactions';

export class HostelOutsideCarScene implements IScene {

    public id: string;
    public scene: Scene;

    constructor() {
        this.id = '2_hostel_outside_car';
        this.scene = new Scene();
        this.scene.addText('This hostel is where the meeting with Dr. Søren Johanson was planned for you. You pull up the car in one of the three empty parking spaces. It should be a simple handover.');
        this.scene.addText('Soft raindrops drip on your windshield. The weather is still cloudy, but it\'s not as threatening any more. Hopefully you\'ll have clear skies soon.');

        let i = new Interaction(EXIT);
        i.nextScene = new ConditionalSceneSwitch('2_hostel_outside', function() { return true; });
        this.scene.interactions = [i];
    }
}

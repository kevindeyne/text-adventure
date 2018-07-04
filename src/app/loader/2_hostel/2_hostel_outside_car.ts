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
        this.scene.addText('As you cut the engine to your car, a small screen pops up on your dashboard with a small gps map of the area. It shows \'Destination reached\' in a soft blue hue.');
        this.scene.addText('Soft raindrops drip on your windshield. The weather is still cloudy, but it\'s not as threatening any more. Hopefully you\'ll have clear skies soon.');

        this.scene.addText('(This is where the game world opens up to you, and you can go anywhere. Your car will get you to any locations on your GPS map. For now, leave the car and find Dr. Johanson at the hostel.)');

        let i = new Interaction(EXIT);
        i.nextScene = new ConditionalSceneSwitch('2_hostel_outside', function() { return true; });
        this.scene.interactions = [i];
    }
}

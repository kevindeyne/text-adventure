import { Interaction } from './../../domain/Interaction';
import { Scene } from './../../domain/Scene';
import { IScene } from '../../domain/IScene';
import { game } from '../../globals/globals';
import { ConditionalSceneSwitch } from '../../domain/ConditionalSceneSwitch';
import { ConditionalConversationSwitch } from '../../domain/ConditionalConversationSwitch';

export class CarLightScene implements IScene {

    public id: string;
    public scene: Scene;

    constructor() {
        this.id = '0_car-light';
        this.scene = new Scene();

        this.scene.addText('You press the button.');
        this.scene.addText('\'Indoor lighting: on\', a soft, automated voice says. A dim blue light shines across the interior of your car. You see the radio controls and a passenger compartment.');

        this.scene.interactions = [];

        let press = new Interaction(['button', 'light']);
        press.nextScene = new ConditionalSceneSwitch('0_car-dark', function () { return true; });
        press.action = function (htmlTag: HTMLElement) {
            game.data.car_light = false;
            //TODO htmlTag.style.backgroundColor = '#0c0f13';
        };
        this.scene.interactions.push(press);

        let closeToBorderText = 'Ahead of you, you see some lights showing up. Red flashes, and a bright white constant light. Must be a zone border checkpoint.';

        let radio = new Interaction(['radio']);
        radio.addText('You turn on the radio. Some soft classical music starts playing for a few minutes. It slowly fades into static. Must be too far away from the Cities to get a good reception.');
        radio.addConditionalText(function () { return game.data.car_closeToBorder; }, closeToBorderText);
        radio.action = function () { game.data.car_closeToBorder = true; };
        radio.nextConversation = new ConditionalConversationSwitch('1_checkpoint-approach', function () { return game.data.car_closeToBorder; });
        this.scene.interactions.push(radio);

        let compartment = new Interaction(['compartment']);
        compartment.addText('With a soft press on the compartment, it unlocks. This is where you left your notebook and your passport. The rest of your luggage is in the trunk. You don\'t need any of that right now. Your eyes dart back to the road ahead of you.');
        compartment.addConditionalText(function () { return game.data.car_closeToBorder; }, closeToBorderText);
        compartment.action = function () { game.data.car_closeToBorder = true; };
        compartment.nextConversation = new ConditionalConversationSwitch('1_checkpoint-approach', function () { return game.data.car_closeToBorder; });
        this.scene.interactions.push(compartment);
    }
}

import { ConditionalSceneSwitch } from './ConditionalSceneSwitch';
import { game } from './../globals/globals';
import { ConditionalText } from './ConditionalText';
import { Interaction } from './Interaction';
import * as Interactions from './../globals/Interactions';
export class Scene {
    public text: ConditionalText[];
    public interactions: Interaction[];

    constructor() {
        this.text = [];
        this.interactions = [];
    }

    addText(text: string) {
        this.addConditionalText(function () { return !game.conditionalsSet(); }, text);
    }

    addConditionalText(conditional: Function, text: string) {
        this.text.push(new ConditionalText(text, conditional));
    }

    withLookAround(text: string) {
        let lookAround = new Interaction(Interactions.LOOK_AROUND);
        lookAround.setPreAction(function () { game.data.lookAround = true; });
        this.text.push(new ConditionalText(text, function () { return game.data.lookAround; }));
        this.interactions.push(lookAround);
    }

    withSceneSwitch(newSceneId: string, commands: string[]) {
        let sceneSwitch = new Interaction(commands);
        sceneSwitch.nextScene = new ConditionalSceneSwitch(newSceneId, function() { return true; });
        this.interactions.push(sceneSwitch);
    }

    withLookAt(lookAtObject: string, text: string) {
        let lookAt = new Interaction(['look at ' + lookAtObject]);
        lookAt.setPreAction(function () { game.data.lookAt = lookAtObject; });
        this.text.push(new ConditionalText(text, function () { return game.data.lookAt === lookAtObject; }));
        this.interactions.push(lookAt);
    }
}

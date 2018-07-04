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
        lookAround.setPreAction(function () { game.data.onetime1 = true; });
        this.text.push(new ConditionalText(text, function () { return game.data.onetime1; }));
        this.interactions = [lookAround];
    }
}

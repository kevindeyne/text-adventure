import { ConditionalText } from './ConditionalText';
import { Interaction } from './Interaction';
export class Scene {
    public text: ConditionalText[];
    public interactions: Interaction[];

    constructor () {
        this.text = [];
        this.interactions = [];
    }

    addText (text: string) {
        this.text.push(new ConditionalText(text, function(){ return true; }));
    }

    addConditionalText (conditional: Function, text: string) {
        this.text.push(new ConditionalText(text, conditional));
    }
}

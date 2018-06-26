import { ConditionalText } from './ConditionalText';
import { Interaction } from './Interaction';
export class Conversation {

    public text: ConditionalText[];
    public options: ConditionalText[];
    public interactions: Interaction[];

    constructor() {
        this.text = [];
        this.options = [];
        this.interactions = [];
    }

    addText(text: string) {
        this.text.push(new ConditionalText(text, function () { return true; }));
    }

    addConditionalText(conditional: Function, text: string) {
        this.text.push(new ConditionalText(text, conditional));
    }

    addOption(text: string) {
        this.options.push(new ConditionalText(text, function () { return true; }));
    }

    addConditionalOption(conditional: Function, text: string) {
        this.options.push(new ConditionalText(text, conditional));
    }
}

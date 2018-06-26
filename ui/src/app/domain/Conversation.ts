import { ConditionalText } from './ConditionalText';
import { Interaction } from './Interaction';
export class Conversation {

    public text: ConditionalText[];
    private options: ConditionalText[];
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

    getOptions(): string[] {
        let result = [];
        for (let option of this.options) {
            let t = option.getText();
            if(t !== null){
                result.push(t);
            }
        }
        return result;
    }
}

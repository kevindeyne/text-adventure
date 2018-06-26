import { ConditionalReply } from './ConditionalReply';
import { ConditionalText } from './ConditionalText';
export class Conversation {

    public text: ConditionalText[];
    private options: ConditionalReply[];

    constructor() {
        this.text = [];
        this.options = [];
    }

    addText(text: string) {
        this.addConditionalText(function () { return true; }, text);
    }

    addConditionalText(conditional: Function, text: string) {
        this.text.push(new ConditionalText(text, conditional));
    }

    addOption(id: string, text: string) {
        this.addConditionalOption(id, function () { return true; }, text);
    }

    addConditionalOption(id: string, conditional: Function, text: string) {
        let reply = new ConditionalReply(text, conditional);
        reply.conversationId = id;
        this.options.push(reply);
    }

    getOptions(): string[] {
        let result = [];
        for (let option of this.options) {
            let t = option.getText();
            if (t !== null && '' !== t) {
                result.push(t);
            }
        }
        return result;
    }

    findOption(text: string): ConditionalReply {
        for (let option of this.options) {
            let t = option.getText();
            if (t !== null) {
                if (t === text) {
                    return option;
                }
            }
        }
        return null;
    }
}

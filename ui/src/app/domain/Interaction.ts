import { ConditionalText } from './ConditionalText';
export class Interaction {
    public commands: string[];
    public nextSceneId: string;
    public action: Function;
    public oneTimeMessages: ConditionalText[] = [];

    constructor(commands) {
        this.commands = commands;
    }

    loadScene() {
        localStorage.setItem('current-scene', this.nextSceneId);
    }

    runAction(htmlTag: HTMLElement) {
        if (undefined !== this.action) {
            this.action(htmlTag);
        }
    }

    addText (text: string) {
        this.oneTimeMessages.push(new ConditionalText(text, function(){ return true; }));
    }

    addConditionalText (conditional: Function, text: string) {
        this.oneTimeMessages.push(new ConditionalText(text, conditional));
    }
}

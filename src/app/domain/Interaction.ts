import { ConditionalConversationSwitch } from './ConditionalConversationSwitch';
import { ConditionalSceneSwitch } from './ConditionalSceneSwitch';
import { ConditionalText } from './ConditionalText';
export class Interaction {

    public commands: string[];
    public nextScene: ConditionalSceneSwitch;
    public nextConversation: ConditionalConversationSwitch;
    public condition: Function;
    public action: Function;
    public oneTimeMessages: ConditionalText[] = [];

    private preAction: Function;
    private preActionSet: boolean;

    constructor(commands) {
        this.commands = commands;
        this.preActionSet = false;
    }

    loadScene() {
        if (this.nextScene !== undefined) {
            localStorage.setItem('current-scene', this.nextScene.getNextSceneId());
        }

        if (this.nextConversation !== undefined) {
            localStorage.setItem('current-conversation', this.nextConversation.getConversationId());
        } else {
            localStorage.removeItem('current-conversation');
        }
    }

    runAction(htmlTag: HTMLElement) {
        if (undefined !== this.action) {
            this.action(htmlTag);
        }
    }

    runPreAction(): any {
        if (undefined !== this.preAction) {
            this.preAction();
        }
      }
    

    setPreAction(action: Function){
        this.preAction = action;
        this.preActionSet = true;
    }

    addText(text: string) {
        this.oneTimeMessages.push(new ConditionalText(text, function () { return true; }));
    }

    addConditionalText(conditional: Function, text: string) {
        this.oneTimeMessages.push(new ConditionalText(text, conditional));
    }

    hasNextConversation(): boolean {
        return this.nextConversation !== undefined && this.nextConversation.getConversationId() !== null;
    }

    hasNextScene(): boolean {
        return (this.nextScene !== undefined && this.nextScene.getNextSceneId() !== null) || this.preActionSet;
    }
}

import { game } from './../globals/globals';
import { Interaction } from './Interaction';
import { ConditionalSceneSwitch } from './ConditionalSceneSwitch';
import { ConditionalText } from './ConditionalText';

export class ConditionalReply extends ConditionalText {

    public conversationId: string;
    public nextScene: ConditionalSceneSwitch;
    public action: Function;

    getInteraction(): Interaction {
        let i = new Interaction(null);
        i.nextScene = this.nextScene;
        i.condition = function(){ return true; };
        localStorage.removeItem('current-conversation');
        localStorage.setItem('current-scene', this.nextScene.getNextSceneId());
        return i;
    }
}

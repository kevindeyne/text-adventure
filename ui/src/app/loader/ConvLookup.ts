import { CheckpointApproachConversation } from './1_checkpoint/1_checkpoint_approach';
import { Conversation } from './../domain/Conversation';
import { IConversation } from './../domain/IConversation';

export class SceneLookup {
    //TODO load in modules
    public listing = new Map<string, Conversation>();

    constructor() {
        this.addConv(new CheckpointApproachConversation());
    }

    private addConv(conv: IConversation) {
        this.listing[conv.id] = conv;
    }
}

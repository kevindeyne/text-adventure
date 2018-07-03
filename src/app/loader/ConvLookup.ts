import { CheckpointConversation3 } from './1_checkpoint/1_checkpoint_conversation_3';
import { CheckpointExit } from './1_checkpoint/1_checkpoint_exit';
import { CheckpointConversation2 } from './1_checkpoint/1_checkpoint_conversation_2';
import { CheckpointDrivePast } from './1_checkpoint/1_checkpoint_drivepast';
import { CheckpointConversation } from './1_checkpoint/1_checkpoint_conversation';
import { CheckpointApproachConversation } from './1_checkpoint/1_checkpoint_approach';
import { Conversation } from './../domain/Conversation';
import { IConversation } from './../domain/IConversation';

export class ConvLookup {
    //TODO load in modules
    public listing = new Map<string, Conversation>();

    constructor() {
        this.addConv(new CheckpointApproachConversation());
        this.addConv(new CheckpointConversation());
        this.addConv(new CheckpointConversation2());
        this.addConv(new CheckpointConversation3());
        this.addConv(new CheckpointDrivePast());
        this.addConv(new CheckpointExit());
    }

    private addConv(conv: IConversation) {
        this.listing[conv.id] = conv;
    }
}

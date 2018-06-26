import { Conversation } from './../../domain/Conversation';
import { IConversation } from './../../domain/IConversation';

export class CheckpointApproachConversation implements IConversation {

    public id: string;
    public conversation: Conversation;

    constructor() {
        this.id = '1_checkpoint-approach';
        this.conversation = new Conversation();
        this.conversation.addText('This is a conversation');

        this.conversation.addOption('[Allow the car to pull up to the checkpoint]');
        this.conversation.addOption('[Stop the car and consider your options]');
        this.conversation.addOption('[Override the automated slowdown and accelerate]');
        this.conversation.addConditionalOption(function () { return false; }, 'Hello 3');

    }
}

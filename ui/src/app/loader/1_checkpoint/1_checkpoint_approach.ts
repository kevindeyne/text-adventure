import { Conversation } from './../../domain/Conversation';
import { IConversation } from './../../domain/IConversation';

export class CheckpointApproachConversation implements IConversation {

    public id: string;
    public conversation: Conversation;

    constructor() {
        this.id = '1_checkpoint-approach';
        this.conversation = new Conversation();
        this.conversation.addText('This is a conversation');

        this.conversation.addOption('Hello');
        this.conversation.addOption('Hello 2');
        this.conversation.addConditionalOption(function () { return false; }, 'Hello 3');

    }
}

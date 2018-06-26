import { Conversation } from './../../domain/Conversation';
import { IConversation } from './../../domain/IConversation';

export class CheckpointApproachConversation implements IConversation {

    public id: string;
    public conversation: Conversation;

    constructor() {
        this.id = '1_checkpoint-approach';
        this.conversation = new Conversation();
        this.conversation.addText('A few seconds later, your car notifies you with a little alert. \'POLIS checkpoint approaching. Vehicle slowing down.\', a friendly voice explains.');

        this.conversation.addOption('1_checkpoint-conversation', '[Allow the car to pull up to the checkpoint]');
        this.conversation.addOption(this.id, '[Stop the car and consider your options]');
        this.conversation.addOption(this.id, '[Override the automated slowdown and accelerate]');
        this.conversation.addConditionalOption(this.id, function () { return false; }, 'This is an invisible option');

    }
}

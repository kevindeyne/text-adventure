import { Conversation } from './../../domain/Conversation';
import { IConversation } from './../../domain/IConversation';

export class CheckpointConversation implements IConversation {

    public id: string;
    public conversation: Conversation;

    constructor() {
        this.id = '1_checkpoint-conversation';
        this.conversation = new Conversation();
        this.conversation.addText('Your car pulls up at the checkpoint.');

        this.conversation.addOption('1_checkpoint-approach', '[adsasdint]');
        this.conversation.addOption('1_checkpoint-approach', '[Stop asdasdons]');
        this.conversation.addOption('1_checkpoint-approach', '[Override the automated slasde]');
    }
}

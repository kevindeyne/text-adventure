import { game } from './../../globals/globals';
import { Conversation } from './../../domain/Conversation';
import { IConversation } from './../../domain/IConversation';

export class CheckpointConversation3 implements IConversation {

    public id: string;
    public conversation: Conversation;

    constructor() {
        this.id = '1_checkpoint-conversation-3';
        this.conversation = new Conversation();
        this.conversation.addText('Without hesitation, the robotic growling voice continues. \'Your file indicates you arrived in Sweden today at Zone 348. State your employer.\'');
        
        this.conversation.addOptionWithAction('1_checkpoint-exit', function(){
            game.data.nationality = 'Russian';
            game.data.company = 'Prazdnikov Robotic';
        }, '\'I work for a Russian robotics manufacturer, Prazdnikov Robotic.\'');

        this.conversation.addOptionWithAction('1_checkpoint-exit', function(){
            game.data.nationality = 'American';
            game.data.company = 'MilSEC';
        }, '\'I am a US citizen. I work for a private military research facility: \'MilSEC\'\'.');

        this.conversation.addOptionWithAction('1_checkpoint-exit', function(){
            game.data.nationality = 'Danish';
            game.data.company = 'Ålborg Universitet';
        }, '\'I am a Danish security researcher with the Ålborg Universitet.\'');

        this.conversation.addOptionWithAction('1_checkpoint-exit', function(){
            game.data.nationality = 'Chinese';
            game.data.company = 'State Robotics Institute';
        }, '\'I am here on an engineering mission from the Chinese State Robotics Institute.\'');
    }
}

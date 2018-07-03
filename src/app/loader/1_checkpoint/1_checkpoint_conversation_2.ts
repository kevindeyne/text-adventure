import { game } from './../../globals/globals';
import { Conversation } from './../../domain/Conversation';
import { IConversation } from './../../domain/IConversation';
import { ConditionalSceneSwitch } from '../../domain/ConditionalSceneSwitch';

export class CheckpointConversation2 implements IConversation {

    public id: string;
    public conversation: Conversation;

    constructor() {
        this.id = '1_checkpoint-conversation-2';
        this.conversation = new Conversation();

        this.conversation.addText('You take your passport from the passenger compartment and show it to the machine. It has no face or eyes, so you just wave it where you think its sensor would be.');
        this.conversation.addText('\'Accepted\', the machine acknowledges.');
        
        this.conversation.addConditionalText(function () { return game.data.car_infraction; }, '\'Your car has failed to adhere to a mandatory checkpoint. As per section 35.4A, all cars not previously identified must stop at zone checkpoints. As per section 37.4C, in case of automated failure, the driver is responsible for conducting a manual stop. Your file has been flagged.\'');
        
        this.conversation.addText('\'Please state your reason for entering [Zone 349].\'');

        this.conversation.addSceneSwitchOption(new ConditionalSceneSwitch('2_hostel_outside', function(){ return true; }), '"Business."');
        this.conversation.addSceneSwitchOption(new ConditionalSceneSwitch('2_hostel_outside', function(){ return true; }), '"I am meeting Dr. Søren Johanson to retrieve a unique nano-processor he recovered from a restoration site here in Sweden. I have a meeting with this man at the \'Fallen Swan\'."');
    }
}

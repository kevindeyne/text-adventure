import { game } from './../../globals/globals';
import { Conversation } from './../../domain/Conversation';
import { IConversation } from './../../domain/IConversation';

export class CheckpointConversation implements IConversation {

    public id: string;
    public conversation: Conversation;

    constructor() {
        this.id = '1_checkpoint-conversation';
        this.conversation = new Conversation();
        this.conversation.addConditionalText(function () { return !game.data.car_infraction; }, 'You pull up next to the checkpoint. Despite the lights being on, is nobody inside. On the side of the building hang three heavy iron machines. One of them uncouples and falls to the ground with a heavy thud. It crawls towards your car on four massive legs and looks inside through the windshield.');
        this.conversation.addConditionalText(function () { return !game.data.car_infraction; }, 'You pull over to the side of the road. The machine moves up next to the windshield.');
    
        this.conversation.addConditionalText(function () { return game.data.car_infraction; }, 'You try to ignore it and focus on the road. There is probably a limit to how far these machines are allowed to go from their post. And you figure you can outrun it.');
        this.conversation.addConditionalText(function () { return game.data.car_infraction; }, 'A bright blue light flashes starkly in the side view mirror as you see a massive wheel approach your car with ease. It eventually overtakes you and swiftly lashes onto your wheels. Your car skids on the wet road, brought off balance by the heavy machine.');        
        this.conversation.addConditionalText(function () { return game.data.car_infraction; }, '\'Warning: Car safety measures activated.\', a soft, automated voice says. Your car brings itself to a stop.');        
        this.conversation.addConditionalText(function () { return game.data.car_infraction; }, 'The machine detaches itself from your car and moves up next to the windshield. No way out now.');

        this.conversation.addText('\'Identification required\', it growls. Its voice module seems to have broken some time ago, so it sounds a little rougher than originally designed.');

        this.conversation.addOption('1_checkpoint-conversation-2', '[Show your passport to the robot]');
    }
}

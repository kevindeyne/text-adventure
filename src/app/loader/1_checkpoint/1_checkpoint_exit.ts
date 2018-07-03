import { ConditionalSceneSwitch } from './../../domain/ConditionalSceneSwitch';
import { Conversation } from './../../domain/Conversation';
import { IConversation } from './../../domain/IConversation';

export class CheckpointExit implements IConversation {

    public id: string;
    public conversation: Conversation;

    constructor() {
        this.id = '1_checkpoint-exit';
        this.conversation = new Conversation();
        
        this.conversation.addText('The scene turns quiet for a while. The robot keeps balancing itself around your car, blocking your exit. Then it slowly moves out of the way, brings up two of its legs and attaches itself to the side of the building again.');
        this.conversation.addText('You start your car again and start driving further. The dirt road goes on. It winds down and then opens up to a more open area. On the right, you see a massive dam. On the left, the road goes on for a little while and leads to a hostel.');
        this.conversation.addText('It\'s a 3-story, white building weathered by the years. From some windows on the second story, thick red cables flow. The cables hang in the air and attach to a massive tower deeper in the forest. You see other red cables flow from that tower to the rest of the forest.');

        this.conversation.addSceneSwitchOption(new ConditionalSceneSwitch('2_hostel_outside_car', function(){ return true; }), '[Park the car]');
    }
}

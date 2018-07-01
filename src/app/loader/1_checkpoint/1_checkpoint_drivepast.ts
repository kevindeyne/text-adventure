import { game } from './../../globals/globals';
import { Conversation } from './../../domain/Conversation';
import { IConversation } from './../../domain/IConversation';

export class CheckpointDrivePast implements IConversation {

    public id: string;
    public conversation: Conversation;

    constructor() {
        this.id = '1_checkpoint-drivepast';
        this.conversation = new Conversation();
        this.conversation.addText('With a few button presses you pull up the external connection interface of your car. You see a process running tagged \'polis-vehicle-compliance\', and kill it. The car\'s engine revs loudly as it accelerates to its previous speed once more.');
        this.conversation.addText('You accelerate towards the zone border checkpoint. There are no people inside. On the side of the building hang three heavy iron machines. One of them uncouples.');
        this.conversation.addText('Without slowing down at all, you blast past the checkpoint. The machine meshes each of its four legs together, as to form an iron wheel. It whirs up and starts chasing you down the dirt road.');
       
        this.conversation.addOption('1_checkpoint-conversation', '[Pull over on the side of the road]');
        this.conversation.addOption('1_checkpoint-conversation', '[Keep driving]');
    }
}

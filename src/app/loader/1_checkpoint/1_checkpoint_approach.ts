import { game } from './../../globals/globals';
import { Conversation } from './../../domain/Conversation';
import { IConversation } from './../../domain/IConversation';

export class CheckpointApproachConversation implements IConversation {

    public id: string;
    public conversation: Conversation;

    constructor() {
        this.id = '1_checkpoint-approach';
        this.conversation = new Conversation();
        this.conversation.addConditionalText(function () { return !game.data.car_stopped;}, 'A few seconds later, your car notifies you with a little alert. \'POLIS checkpoint approaching. Vehicle slowing down.\', a friendly voice explains.');
        this.conversation.addConditionalText(function () { return game.data.car_stopped;}, 'You stop the car. There does not seem to be any activity in the checkpoint, aside from the lights.');
        
        this.conversation.addOptionWithAction('1_checkpoint-conversation', function() { game.data.car_stopped = true; }, '[Allow the car to pull up to the checkpoint]');
        this.conversation.addConditionalOptionWithAction(this.id, 
            function () { return !game.data.car_stopped; }, function() { game.data.car_stopped = true; },
            '[Stop the car and consider your options]');
        this.conversation.addOptionWithAction('1_checkpoint-drivepast', function(){ game.data.car_infraction = true; }, '[Override the automated slowdown and accelerate]');
    }
}

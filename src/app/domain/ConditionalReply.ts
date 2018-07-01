import { ConditionalText } from './ConditionalText';

export class ConditionalReply extends ConditionalText{
    
    public conversationId: string;
    public action: Function;

}

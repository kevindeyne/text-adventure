export class ConditionalConversationSwitch {
    private conversationId: string;
    private conditional: Function;

    constructor (conversationId: string, conditional: Function) {
        this.conversationId = conversationId;
        this.conditional = conditional;
    }

    getConversationId (): string {
        if(this.conditional()){
            return this.conversationId;
        }
        return null;
    }
}

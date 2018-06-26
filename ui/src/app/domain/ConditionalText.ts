export class ConditionalText {
    private text: string;
    private conditional: Function;

    constructor (text: string, conditional: Function) {
        this.text = text;
        this.conditional = conditional;
    }

    getText (): string {
        if(this.conditional()){
            return this.text;
        }
        return '';
    }
}

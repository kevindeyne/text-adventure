export class ConditionalSceneSwitch {
    private sceneId: string;
    private conditional: Function;

    constructor (sceneId: string, conditional: Function) {
        this.sceneId = sceneId;
        this.conditional = conditional;
    }

    getNextSceneId (): string {
        if(this.conditional()){
            return this.sceneId;
        }
        return null;
    }
}

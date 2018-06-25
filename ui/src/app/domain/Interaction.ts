export class Interaction {

    public commands: string[];
    public nextSceneId: string;
    public action: Function;

    constructor(commands) {
        this.commands = commands;
    }

    loadScene() {
        localStorage.setItem('current-scene', this.nextSceneId);
    }

    runAction() {
        if (undefined !== this.action) {
            this.action();
        }
    }
}

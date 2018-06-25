import { Scene } from "./Scene";

export class Interaction {
    public commands: string[];
    public nextSceneId: String;

    constructor (commands) {
        this.commands = commands;
    }

    loadScene() : Scene{
        return new Scene();
    }
}

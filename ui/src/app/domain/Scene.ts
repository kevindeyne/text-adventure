import { Interaction } from './Interaction';
export class Scene {
    public text: string[];
    public interactions: Interaction[];

    constructor () {
        this.text = [];
        this.interactions = [];
    }

    addText (text: string) {
        this.text.push(text);
    }
}

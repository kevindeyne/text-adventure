import { ConvLookup } from './../loader/ConvLookup';
import { IConversation } from './IConversation';
import { SceneLookup } from './../loader/SceneLookup';
import { IScene } from './IScene';
import { Car } from './Car';
import { Conversation } from './Conversation';

export class Game {
    public sLookup = new SceneLookup();
    public cLookup = new ConvLookup();

    public currentScene: IScene;
    public currentConversation: Conversation;

    public car: Car = new Car();

    constructor() {
        this.reloadScene();
    }

    reloadScene(): IScene {
        this.currentScene = (localStorage.getItem('current-scene') !== null) ? this.sLookup.listing[localStorage.getItem('current-scene')] : null;
        return this.currentScene;
    }

    reloadConversation(id: string): Conversation {
        let conv: IConversation = (localStorage.getItem('current-scene') !== null) ? this.cLookup.listing[localStorage.getItem('current-conversation')] : null;
        if (conv !== null && conv !== undefined) {
            this.currentConversation = conv.conversation;
            return this.currentConversation;
        }
        return null;
    }
}

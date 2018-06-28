import { GameData } from './GameData';
import { ConvLookup } from './../loader/ConvLookup';
import { IConversation } from './IConversation';
import { SceneLookup } from './../loader/SceneLookup';
import { IScene } from './IScene';
import { Conversation } from './Conversation';

export class Game {
    public sLookup = new SceneLookup();
    public cLookup = new ConvLookup();

    public currentScene: IScene;
    public currentConversation: Conversation;

    public data: GameData = new GameData();

    constructor() {
        this.reloadScene();
    }

    reloadScene(): IScene {
        this.currentScene = (localStorage.getItem('current-scene') !== null) ? this.sLookup.listing[localStorage.getItem('current-scene')] : null;
        return this.currentScene;
    }

    reloadConversation(id: string): Conversation {
        let conv: IConversation = this.cLookup.listing[id];
        if (conv !== undefined) {
            this.currentConversation = conv.conversation;
            return this.currentConversation;
        }
        return null;
    }

    saveData() {
        if(this.data === null){
            this.data = new GameData();
        }
        let data = JSON.stringify(this.data);
        console.log('save: ' + data);
        localStorage.setItem('data', data);
    }

    loadData() {
        console.log('load: ' + localStorage.getItem('data'));
        this.data = JSON.parse(localStorage.getItem('data'));
    }
}

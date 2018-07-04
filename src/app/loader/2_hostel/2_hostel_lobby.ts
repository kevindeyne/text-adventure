import { Scene } from './../../domain/Scene';
import { IScene } from '../../domain/IScene';

export class HostelLobbyScene implements IScene {

    public id: string;
    public scene: Scene;

    constructor() {
        this.id = '2_hostel_lobby';
        this.scene = new Scene();
        this.scene.addText('You are in the lobby.');
        this.scene.withLookAround('Not much else to see. The street is empty. Behind you, you hear the soft rumble of the dam. The entrance of the hostel is on the right.');
        
        this.scene.withLookAt('cables', 'Thick red cables dangle in the air above you. They stretch out from some of the windows all the way deep inside the forest, culminating together in a massive tower.');

        this.scene.withSceneSwitch('2_hostel_outside_car', ['car']); //TODO
        this.scene.withSceneSwitch('2_hostel_lobby', ['hostel', 'right', 'enter', 'inside']); 
    }
}

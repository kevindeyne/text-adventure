import { Scene } from './../../domain/Scene';
import { IScene } from '../../domain/IScene';

export class HostelOutsideScene implements IScene {

    public id: string;
    public scene: Scene;

    constructor() {
        this.id = '2_hostel_outside';
        this.scene = new Scene();        
        this.scene.addText('You leave the car. The street is empty. Behind you, you hear the soft rumble of the dam. The entrance of the hostel is on the right.');
        this.scene.withLookAround('Not much else to see. The street is empty. Behind you, you hear the soft rumble of the dam. The entrance of the hostel is on the right.');
        //enter car
        //go right/enter building/go inside
        
    }
}

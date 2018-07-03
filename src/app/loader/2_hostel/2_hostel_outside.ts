import { Scene } from './../../domain/Scene';
import { IScene } from '../../domain/IScene';

export class HostelOutsideScene implements IScene {

    public id: string;
    public scene: Scene;

    constructor() {
        this.id = '2_hostel_outside';
        this.scene = new Scene();
        this.scene.addText('Now outside ...');
    }
}

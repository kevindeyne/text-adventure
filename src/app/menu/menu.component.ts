import { Component, OnInit } from '@angular/core';
import * as globals from '../globals/globals';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private version = '';
  private gameid = '';
  private hasRunningGame = false;

  constructor() { }

  ngOnInit() {
    this.hasRunningGame = globals.hasRunningGame;
    this.version = 'v' + globals.version;
    this.gameid = globals.gameid || 'no gameid';
  }

}

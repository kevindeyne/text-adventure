import { game } from './../globals/globals';
import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Router } from '@angular/router';
import * as globals from '../globals/globals';

@Component({
  selector: 'app-newgame',
  templateUrl: './newgame.component.html',
  styleUrls: ['./newgame.component.css']
})
export class NewgameComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    /*if (!globals.hasRunningGame) {*/
      localStorage.setItem('game-id', UUID.UUID());
      localStorage.setItem('current-scene', '0_init-car');      
      localStorage.setItem('game-history', JSON.stringify([]));

      localStorage.removeItem('current-conversation');
      localStorage.removeItem('game-history-loading-done');
      localStorage.removeItem('hasloaded');
      
      game.reloadScene();
      this.router.navigate(['/game']);
    /*} else {
      // todo: show are you sure
      this.router.navigate(['/game']);
    }*/
  }

}

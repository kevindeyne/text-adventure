import { game } from './../globals/globals';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  private convHeight = '';
  private inputClass = '';
  private convClass = 'hidden';

  @ViewChild('conversation') conversation: ElementRef;
  @ViewChild('focus') focus: ElementRef;
  @ViewChild('parentDiv') parentDiv: ElementRef;

  private sentences: string[] = [];
  private convOptions = ['This is a long text reply that goes on for quite a while. And on and on.' +
  'This is a long text reply that goes on for quite a while. And on and on.', 'My dude. Greetings.'];

  ngOnInit() {
    this.load();
    this.focusTimeout();
  }

  load() {
    let s = game.currentScene.scene;
    for (let sentence of s.text) {
      this.addSentence(sentence);
    }
  }

  addSentence(sentence) {
    this.sentences.push(sentence);
    setTimeout(() => {
      this.parentDiv.nativeElement.scrollTop = this.parentDiv.nativeElement.scrollHeight;
    }, 10);
  }

  focusTimeout() {
    setTimeout(() => {
      if (this.inputClass === '') {
        this.focus.nativeElement.focus();
      }
      this.focusTimeout();
    }, 500);
  }

  switchView() {
    if (this.convClass === '') {
      this.inputClass = '';
      this.convClass = 'hidden';
    } else {
      this.inputClass = 'hidden';
      this.convClass = '';
    }

    setTimeout(() => {
      this.reformatLocation();
    }, 10);
  }

  reformatLocation() {
    const height = this.conversation.nativeElement.offsetHeight;
    if (height === 0) {
      this.convHeight = '3em';
    } else {
      this.convHeight = (height + 10) + 'px';
    }
  }

  onKey(event: KeyboardEvent) {
    const target = (event.currentTarget as HTMLInputElement);
    const value = target.value;

    if (event.key === 'Enter') {
      if (value.startsWith('talk ')) {
        this.switchView();
      }

      this.addSentence('> ' + target.value);
      this.loadSceneThroughCommand(target.value);
      target.value = '';
    }
  }

  loadSceneThroughCommand(command: string) {
    let s = game.currentScene.scene;
    for (let interaction of s.interactions) {    
      for (let c of interaction.commands) {
        if(command.startsWith(c)){
          interaction.loadScene();
          this.load();
        }
      }
    }
  }

  onClick(event: MouseEvent) {
    const target = (event.currentTarget as HTMLInputElement);
    this.addSentence('> ' + target.innerText);
    this.switchView();
  }
}

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
  private loadedSceneId = null;

  @ViewChild('conversation') conversation: ElementRef;
  @ViewChild('focus') focus: ElementRef;
  @ViewChild('parentDiv') parentDiv: ElementRef;

  private sentences: string[] = [];
  private convOptions = ['This is a long text reply that goes on for quite a while. And on and on.' +
    'This is a long text reply that goes on for quite a while. And on and on.', 'My dude. Greetings.'];

  ngOnInit() {
    this.loadHistory();
    this.load();
    this.focusTimeout();
  }

  loadHistory() {
    let history = JSON.parse(localStorage.getItem('game-history'));
    for (let sentence of history) {
      this.addSentence(sentence);
    }
  }

  load() {
    if (this.loadedSceneId !== game.currentScene.id) {
      if (localStorage.getItem('game-history-loading-done') === null) {
        this.loadedSceneId = game.currentScene.id;
        let s = game.currentScene.scene;
        for (let sentence of s.text) {
          this.addSentence(sentence.getText());
        }
      }
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

      this.loadSceneThroughCommand(target.value);
      target.value = '';
    }
  }

  loadSceneThroughCommand(command: string) {
    let s = game.currentScene.scene;
    interactionLoop: for (let interaction of s.interactions) {
      for (let c of interaction.commands) {
        if (command.includes(c)) {

          this.addSentence('> ' + command);
          this.showOneTimeMessages(interaction);
          localStorage.setItem('game-history', JSON.stringify(this.sentences));
          if (interaction.nextSceneId !== undefined) {
            localStorage.removeItem('game-history-loading-done');
            interaction.loadScene();
            game.reloadScene();
            this.load();
          }

          interaction.runAction(document.getElementsByTagName("html")[0]);
          break interactionLoop;

        }
      }
    }
  }

  private showOneTimeMessages(interaction) {
    localStorage.setItem('game-history-loading-done', '1');
    for (let sentence of interaction.oneTimeMessages) {
      this.addSentence(sentence.getText());
    }    
  }

  onClick(event: MouseEvent) {
    const target = (event.currentTarget as HTMLInputElement);
    this.addSentence('> ' + target.innerText);
    this.switchView();
  }
}

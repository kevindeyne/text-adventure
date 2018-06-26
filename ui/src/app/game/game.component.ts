import { Interaction } from './../domain/Interaction';
import { game } from './../globals/globals';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic/src/platform_providers';

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
  private htmlTag = document.getElementsByTagName("html")[0];

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

  enableConversationMode(turnon: boolean) {
    if (!turnon) {
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
      this.loadSceneThroughCommand(target.value);
      target.value = '';
    }
  }

  addOldClassToAll(){
    let items : HTMLParagraphElement[] = Array.from(document.querySelectorAll('p'));
    items.forEach(element => { element.classList.add('old'); });
  }

  loadSceneThroughCommand(command: string) {
    let s = game.currentScene.scene;
    interactionLoop: for (let i of s.interactions) {
      for (let c of i.commands) {
        if (command.includes(c)) {
          this.addOldClassToAll();
          this.addSentence('> ' + command);
          this.showOneTimeMessages(i);
          this.handleHasScene(i);
          this.handleHasConversation(i);
          i.runAction(this.htmlTag);
          break interactionLoop;
        }
      }
    }
  }

  handleHasScene(interaction: Interaction) {
    if (interaction.hasNextScene()) {
      this.enableConversationMode(false);
      localStorage.removeItem('game-history-loading-done');
      game.reloadScene();
      this.load();
    }
  }

  handleHasConversation(interaction: Interaction) {
    if (interaction.hasNextConversation()) {
      this.enableConversationMode(true);
      let c = interaction.nextConversation.getConversationId();
      this.convOptions
    }
  }

  private showOneTimeMessages(interaction) {
    localStorage.setItem('game-history-loading-done', '1');
    for (let sentence of interaction.oneTimeMessages) {
      this.addSentence(sentence.getText());
    }
    localStorage.setItem('game-history', JSON.stringify(this.sentences));
    interaction.loadScene();
  }

  onClick(event: MouseEvent) {
    const target = (event.currentTarget as HTMLInputElement);
    this.addSentence('> ' + target.innerText);
    //this.switchView();
  }
}

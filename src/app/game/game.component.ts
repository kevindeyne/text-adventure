import { Interaction } from './../domain/Interaction';
import { game } from './../globals/globals';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Conversation } from '../domain/Conversation';

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
  private convOptions: string[] = [];

  constructor() {
    this.sentences = [];
    this.convOptions = [];
    this.loadHistory();
    this.load();
    this.focusTimeout();
  }

  ngOnInit() {
    if (null !== localStorage.getItem('current-conversation')) {
      this.showConversation(localStorage.getItem('current-conversation'));
    }

    if (null == localStorage.getItem('hasloaded')) {
      //this.jumpAhead();
    }

    game.loadData();
  }

  loadHistory() {
    let history = JSON.parse(localStorage.getItem('game-history'));
    for (let sentence of history) {
      this.addSentence(sentence);
    }
  }

  load() {
    if (this.loadedSceneId !== game.currentScene.id || game.conditionalsSet()) {
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

  addOldClassToAll() {
    let items: HTMLParagraphElement[] = Array.from(document.querySelectorAll('p'));
    items.forEach(element => { element.classList.add('old'); });
  }

  loadSceneThroughCommand(command: string) {
    let s = game.currentScene.scene;
    interactionLoop: for (let i of s.interactions) {
      for (let c of i.commands) {
        if (command.includes(c)) {
          i.runPreAction();
          this.addOldClassToAll();
          this.addSentence('> ' + command);
          this.showOneTimeMessages(i);
          this.handleScene(i);
          this.handleConversation(i);
          i.runAction(this.htmlTag);
          game.saveData();
          break interactionLoop;
        }
      }
    }
  }

  handleScene(interaction: Interaction) {
    if (interaction.hasNextScene()) {
      this.enableConversationMode(false);
      localStorage.removeItem('game-history-loading-done');
      localStorage.removeItem('current-conversation');
      game.reloadScene();
      this.load();
    }
  }

  handleConversation(interaction: Interaction) {
    if (interaction.hasNextConversation()) {
      let cId = interaction.nextConversation.getConversationId();
      this.showConversation(cId);
    }
  }

  showConversation(id: string) {
    this.enableConversationMode(true);
    let c: Conversation = game.reloadConversation(id);
    if (c !== null) {
      this.addOldClassToAll();
      for (let text of c.text) {
        this.addSentence(text.getText());
      }
      this.convOptions = c.getOptions();
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
    let text = target.innerText;
    this.addSentence('> ' + text);

    let cId = localStorage.getItem('current-conversation');
    let c: Conversation = game.reloadConversation(cId);
    let option = c.findOption(text);
    if (null !== option) {
      if(option.conversationId === undefined){
        this.handleScene(option.getInteraction());
      } else {
        localStorage.setItem('current-conversation', option.conversationId);
        this.showConversation(option.conversationId);
      }
      game.saveData();
    }
  }

  jumpAhead() {
    localStorage.setItem('hasloaded', '1');
    let counter = 0;

    this.sendCommand('look around', counter);
    this.sendCommand('press button', counter);
    this.sendCommand('turn on the radio', counter);
    this.sendCommand('open the compartment', counter);
    this.clickElement(1, counter);
    this.clickElement(1, counter);
    this.clickElement(1, counter);
    this.clickElement(0, counter);
    this.clickElement(1, counter);
    this.clickElement(2, counter);
    this.clickElement(0, counter);
    this.sendCommand('leave the car', counter);
    this.sendCommand('look around', counter);
    this.sendCommand('look at cables', counter);
    this.sendCommand('go inside', counter);
  }

  sendCommand(text: string, counter) {
    let self = this;
    setTimeout(function(){
      self.loadSceneThroughCommand(text);
    }, counter+100 + (counter++ * 500));
  }

  clickElement(index, counter){
    setTimeout(function(){
      let items: HTMLParagraphElement[] = Array.from(document.querySelectorAll('footer p'));
      items[index].click();
    }, counter+100 + (counter++ * 500));
  }
}

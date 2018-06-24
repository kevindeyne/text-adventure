import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';

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

  constructor(private render: Renderer2) { }

  ngOnInit() {
    this.launchTimeout(); // test
    this.focusTimeout();
  }

  // test
  launchTimeout() {
    setTimeout(() => {
      const counter = this.sentences.length + 1;
      this.addSentence('Sentence #' + counter + '<br/>' + 'tessst');

      if (counter < 100) { this.launchTimeout(); }
    }, 10);
  }

  addSentence(sentence) {
    this.sentences.push(sentence);
    setTimeout(() => {
      this.parentDiv.nativeElement.scrollTop = this.parentDiv.nativeElement.scrollHeight;
    }, 10);
  }

  focusTimeout() {
    setTimeout(() => {
      this.focus.nativeElement.focus();
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
      this.convHeight = height + 'px';
    }
  }

  onKey(event: KeyboardEvent) {
    const target = (event.currentTarget as HTMLInputElement);
    const value = target.value;

    if (event.key === 'Enter') {
      if (value.startsWith('talk ')) {
        this.switchView();
      }

      target.value = '';
    }
  }

  onClick(event: MouseEvent) {
    this.switchView();
  }
}

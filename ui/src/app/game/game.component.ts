import { Component, OnInit, ElementRef, Renderer2, Inject, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @ViewChild('parentDiv') parentDiv: ElementRef;
  @ViewChild('focus') focus: ElementRef;

  private sentences: string[] = [];

  constructor() {
  }

  ngOnInit() {
    this.launchTimeout();
    this.focusTimeout();
  }

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

}

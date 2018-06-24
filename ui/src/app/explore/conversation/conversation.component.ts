import { ExploreswitchService } from './../../services/exploreswitch.service';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['../explore.component.css', './conversation.component.css']
})
export class ConversationComponent implements OnInit, OnDestroy {

  @ViewChild('conversation') elem: ElementRef;
  options: string[] = [];
  optionsEN = ['Greetings, my man.', 'My dude. Greetings.'];

  constructor(private render: Renderer2, private switcher: ExploreswitchService) { }

  ngOnInit() {
    this.options = this.optionsEN;
    this.switcher.currentlyVisible.subscribe(newVisible => {
      if (newVisible === 'conversation') {
        this.render.removeClass(this.elem.nativeElement, 'hidden');
      } else {
        this.render.addClass(this.elem.nativeElement, 'hidden');
      }
    });
  }

  ngOnDestroy() {
    this.switcher.unsubscribe();
  }

  onClick(event: MouseEvent) {
    this.switcher.switchTo('autocomplete');
  }
}

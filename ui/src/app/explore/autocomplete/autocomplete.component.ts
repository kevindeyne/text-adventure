import { ExploreswitchService } from './../../services/exploreswitch.service';
import { Component, OnInit, ViewChild, ElementRef, Renderer2, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['../explore.component.css', './autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit, OnDestroy {

  @ViewChild('autocomplete') elem: ElementRef;

  suggestions: string[] = [];
  options: string[] = [];
  optionsEN = ['look around', 'speak with <person>', 'talk to <person>', 'go to <location>'];

  constructor(private render: Renderer2, private switcher: ExploreswitchService) { }

  onKey(event: KeyboardEvent) {
    const target = (event.currentTarget as HTMLInputElement);
    const value = target.value;

    if (event.key === 'Enter') {
      if (value.startsWith('talk to')) {
        this.switcher.switchTo('conversation');
      }

      target.value = '';
    }

    this.suggestions = [];
    const self = this;

    if (value !== '') {
      this.options.forEach(function(option) {
        if (option.startsWith(value)) {
            self.suggestions.push(option);
        }
      });
    }
  }

  ngOnInit() {
    this.options = this.optionsEN;
    this.switcher.currentlyVisible.subscribe(newVisible => {
      if (newVisible === 'autocomplete') {
        this.render.removeClass(this.elem.nativeElement, 'hidden');
      } else {
        this.render.addClass(this.elem.nativeElement, 'hidden');
      }
    });
  }

  ngOnDestroy() {
    this.switcher.unsubscribe();
  }
}

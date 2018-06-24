import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class InteractionViewService {
  private timeline = new BehaviorSubject<string>('interaction-view');
  currentlyVisible = this.timeline.asObservable();

  switchTo(view: string) {
    this.timeline.next(view);
  }

  unsubscribe() {
    this.timeline.unsubscribe();
  }
}

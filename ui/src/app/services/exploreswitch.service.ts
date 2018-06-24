import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ExploreswitchService {
  private messageSource = new BehaviorSubject<string>('autocomplete');
  currentlyVisible = this.messageSource.asObservable();

  switchTo(locale: string) {
    this.messageSource.next(locale);
  }

  unsubscribe() {
    this.messageSource.unsubscribe();
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  private messageSource = new BehaviorSubject<string>('en');
  currentLocale = this.messageSource.asObservable();

  push(locale: string) {
    this.messageSource.next(locale);
  }

  unsubscribe() {
    this.messageSource.unsubscribe();
  }
}

import { LocaleService } from './../services/locale.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {

  locale: string;
  private menuOptions: string[];
  private menuOptionsEN: string[] = ['Home', 'Explore', 'Crime profile', 'Tasks', 'Settings', 'Language'];
  private menuOptionsNL: string[] = ['Start', 'Verkennen', 'Misdaad profiel', 'Taken', 'Voorkeuren', 'Taal'];

  constructor(private data: LocaleService) { }

  ngOnInit() {
    this.data.currentLocale.subscribe(newLocale => {
      this.locale = newLocale;

      if (this.locale === 'nl') {
        this.menuOptions = this.menuOptionsNL;
      } else {
        this.menuOptions = this.menuOptionsEN;
      }
    });
  }

  ngOnDestroy() {
    this.data.unsubscribe();
  }
}

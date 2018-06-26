import { Router } from '@angular/router';
import { LocaleService } from './services/locale.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  constructor(private router: Router) { }

  onKey(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.router.navigate(['/menu']);
    }
  }

}

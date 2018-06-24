import { LocaleService } from '../services/locale.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private data: LocaleService) { }

  ngOnInit() {
  }

  onClick(newLocale: string) {
    this.data.push(newLocale);
  }

}

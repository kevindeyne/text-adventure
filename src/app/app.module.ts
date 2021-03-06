import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { GameComponent } from './game/game.component';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';
import { NewgameComponent } from './newgame/newgame.component';

const appRouters: Routes = [
  { path: '', component: MenuComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'game', component: GameComponent },
  { path: 'newgame', component: NewgameComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    ProfileComponent,
    SettingsComponent,
    GameComponent,
    MenuComponent,
    NavComponent,
    NewgameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

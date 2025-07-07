import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home-component/home.component";
import { MenuComponent } from "./layout/menu-component/menu-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, MenuComponent],
  template: `
    <app-menu></app-menu>
    <h1>Welcome to {{title}}!</h1>
    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected title = 'KitCoins';
}

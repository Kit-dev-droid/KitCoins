import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./layout/menu-component/menu-component";
import { FooterComponent } from './layout/footer-component/footer-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent,FooterComponent],
  template: `
    <app-menu></app-menu>
    <h1>Welcome to {{title}}!</h1>
    <router-outlet />
    <app-footer></app-footer>
  `,
  styles: [],
})
export class App {
  protected title = 'KitCoins';
}

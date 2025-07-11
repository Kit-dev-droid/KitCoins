import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./layout/menu-component/menu-component";
import { FooterComponent } from './layout/footer-component/footer-component';
import { ThemeService } from './layout/theme-service/theme.service';


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
export class App implements OnInit {

  //we call the theme service here so that it gets initialized as soon as the app loads
  constructor(private themeService: ThemeService) {
    
    console.log('App constructor - Theme service initialized');
  }

  ngOnInit() {
    // Ensure the stored theme is applied
    const storedTheme = this.themeService.isDarkMode;
    this.themeService.setDarkMode(storedTheme);
    console.log('App ngOnInit - Applied stored theme:', storedTheme);
  }
  protected title = 'KitCoins';
}

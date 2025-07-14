import { Component, OnInit } from '@angular/core';
import { ThemeService } from './layout/theme-service/theme.service';
import { LayoutComponent } from "./layout-component/layout-component";


@Component({
  selector: 'app-root',
  imports: [ LayoutComponent],
  template: `
    <app-layout></app-layout>
    
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

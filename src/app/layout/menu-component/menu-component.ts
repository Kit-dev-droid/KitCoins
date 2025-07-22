import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ThemeService } from '../theme-service/theme.service'; // Adjust path as needed
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [Menubar, ButtonModule, CommonModule],
  template: `
    <div>
        <p-menubar [model]="items">
          <p-button 
            [icon]="(themeService.darkMode$ | async) ? 'pi pi-sun' : 'pi pi-moon'" 
            [rounded]="true" 
            (onClick)="toggleDarkMode()"
            variant="text" 
            [raised]="true" 
          />
        </p-menubar>
    </div>
  `,
  styles: ``
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(public themeService: ThemeService) {}

  ngOnInit() {
    this.items = [
      {
        label: `Home`,
        icon: `pi pi-home`,
         routerLink: `home`
      },
       {
        label: `Features`,
        icon: `pi pi-star`,
        routerLink: `feature`
      },
       {
        label: `Contact`,
        icon: `pi pi-envelope`,
        routerLink: `contact`
      },
      {
        label: `Registration`,
        icon: `pi pi-envelope`,
        routerLink: `registration`
      },
      {
        label: `Login`,
        icon: `pi pi-envelope`,
        routerLink: `login`
      },
    ]
  }


  //toggle happens in the themeService
  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }
}
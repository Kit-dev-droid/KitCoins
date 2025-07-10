import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-menu',
  imports: [Menubar,ButtonModule],
  template: `
    <div>
        <p-menubar [model]="items">
          <p-button icon="pi pi-moon" [rounded]="true" (onClick)="toggleDarkMode()"variant="text" [raised]="true" />
        </p-menubar>
    </div>
  `,
  styles: ``
})
export class MenuComponent {
  items: MenuItem[] | undefined;

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
    ]
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    if (element) {
        element.classList.toggle('my-app-dark');
    }
}

}

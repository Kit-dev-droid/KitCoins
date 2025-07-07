import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';3

@Component({
  selector: 'app-menu',
  imports: [Menubar],
  template: `
    <div class="card">
        <p-menubar [model]="items" />
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
        icon: `pi-pi-home`,
         routerLink: `home`
      },
       {
        label: `Features`,
        icon: `pi-pi-star`,
        routerLink: `feature`
      },
       {
        label: `Contact`,
        icon: `pi-pi-envelope`,
        routerLink: `contact`
      },
    ]
  }

}

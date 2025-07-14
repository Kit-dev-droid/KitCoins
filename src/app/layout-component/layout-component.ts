import { Component } from '@angular/core';
import { MenuComponent } from "../layout/menu-component/menu-component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../layout/footer-component/footer-component";

@Component({
  selector: 'app-layout',
  imports: [MenuComponent, FooterComponent, RouterOutlet],
  template: `
  <app-menu></app-menu>
  <router-outlet />
  <app-footer></app-footer>
    
  `,
  styles: ``
})
export class LayoutComponent {

}

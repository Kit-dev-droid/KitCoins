import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-footer',
  imports: [MenuModule],
  template: `
    <footer class="mt-auto w-full text-center  z-[1000] pt-10 pb-5">
     
      
      <div class="text-center pt-5 mt-8 border-t border-gray-300 shadow-[0_-4px_8px_rgba(0,0,0,0.1)]">
        <p class="m-0 text-sm">&copy; {{ currentYear }} {{ companyName }}. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: [`
    ::ng-deep .custom-vertical-menu {
      border: none !important;
      width: 200px; 
      margin: auto;
    }
    
    ::ng-deep .custom-vertical-menu.p-menu {
      background: transparent !important;
    }

    ::ng-deep .custom-vertical-menu .p-menu-item-content {
      display: flex !important;
      justify-content: center !important;
    }

    ::ng-deep .custom-vertical-menu .p-menu-item-link {
      padding: 10px 0;
      border-radius: 0;
      transition: background-color 0.2s;
      width: 100%;
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
    }
  `]
})
export class FooterComponent {

  companyName = "KitCoins";
  currentYear = '2025';
  contactAddress = "639 Theuns Van Niekerk";
  contactPhone = "073 007 0025";
  contactEmail = "kyle.kitchener@outlook.com";
  companyDescription = "A coin currency tracking site";
  footerItem = [];
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: `Home`,
        routerLink: `home`
      },
      {
        label: `Features`,
        routerLink: `feature`
      },
      {
        label: `Contact`,
        routerLink: `contact`
      },
    ]
  }

}

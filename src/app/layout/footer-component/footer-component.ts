import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-footer',
  imports: [MenuModule],
  template: `
    <footer class="mt-auto w-full text-center border-t-2 border-gray-200 shadow-[0_-4px_8px_rgba(0,0,0,0.1)] z-[1000] pt-10 pb-5">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-5">
        <div class="footer-section">
          <h3 class="mb-4 text-2xl font-semibold">{{ companyName }}</h3>
          <p class="leading-relaxed mb-3">{{ companyDescription }}</p>
        </div>
        
        <div class="footer-section">
          <h4 class="mb-4 text-lg font-medium">Quick Links</h4>
          <div class="flex justify-center">
            <p-menu [model]="items" styleClass="custom-vertical-menu"/>
          </div>
        </div>
        
        <div class="footer-section">
          <h4 class="mb-4 text-lg font-medium">Contact Info</h4>
          <p class="leading-relaxed mb-3">Email: {{ contactEmail }}</p>
          <p class="leading-relaxed mb-3">Phone: {{ contactPhone }}</p>
          <p class="leading-relaxed mb-3">Address: {{ contactAddress }}</p>
        </div>
        
        <div class="footer-section">
          <h4 class="mb-4 text-lg font-medium">Follow Us</h4>
          <div class="flex gap-4 flex-wrap justify-center">
            <a href="https://www.facebook.com" target="_blank" 
               class="no-underline py-2 px-3 border border-gray-300 rounded text-center transition-all duration-300 flex-1 min-w-[100px] max-w-[150px] hover:opacity-80 hover:shadow-md">
               Facebook
            </a>
            <a href="https://x.com" target="_blank" 
               class="no-underline py-2 px-3 border border-gray-300 rounded text-center transition-all duration-300 flex-1 min-w-[100px] max-w-[150px] hover:opacity-80 hover:shadow-md">
               Twitter
            </a>
            <a href="https://www.linkedin.com" target="_blank" 
               class="no-underline py-2 px-3 border border-gray-300 rounded text-center transition-all duration-300 flex-1 min-w-[100px] max-w-[150px] hover:opacity-80 hover:shadow-md">
               LinkedIn
            </a>
            <a href="https://www.instagram.com" target="_blank" 
               class="no-underline py-2 px-3 border border-gray-300 rounded text-center transition-all duration-300 flex-1 min-w-[100px] max-w-[150px] hover:opacity-80 hover:shadow-md">
               Instagram
            </a>
          </div>
        </div>
      </div>
      
      <div class="text-center pt-5 mt-8 border-t border-gray-300">
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

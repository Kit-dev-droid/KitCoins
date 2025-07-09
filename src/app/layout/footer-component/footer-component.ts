import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-footer',
  imports: [MenuModule],
  template: `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>{{ companyName }}</h3>
          <p>{{ companyDescription }}</p>
        </div>
        
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <p-menu [model]="items" styleClass="custom-vertical-menu"/>
            
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Contact Info</h4>
          <p>Email: {{ contactEmail }}</p>
          <p>Phone: {{ contactPhone }}</p>
          <p>Address: {{ contactAddress }}</p>
        </div>
        
        <div class="footer-section">
          <h4>Follow Us</h4>
          <div class="social-links">
            <a href="https://www.facebook.com" target="_blank" class="social-link">Facebook</a>
            <a href="https://x.com" target="_blank" class="social-link">Twitter</a>
            <a href="https://www.linkedin.com" target="_blank" class="social-link" >LinkedIn</a>
            <a href="https://www.instagram.com" target="_blank" class="social-link">Instagram</a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} {{ companyName }}. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: [`
    ::ng-deep .custom-vertical-menu {
      border: none !important;
      width: 200px; 
      margin: auto;
      padding-left: 50px;

    }

    ::ng-deep .custom-vertical-menu .p-menuitem-link {
      padding: 10px;
      color: #333;
      border-radius: 0;
      transition: background-color 0.2s;
      
    }

    ::ng-deep .custom-vertical-menu .p-menuitem-link:hover {
      background-color: #f0f0f0;
     
    }
    .footer {
      background-color: white;
      color: #333;
      padding: 40px 0 20px;
      margin-top: auto;
      
      left: 0;
     
      width: 100%;
      text-align: center;
      border-top: 2px solid #e0e0e0;
      box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
      z-index: 1000;
    }
    
    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
      padding: 0 20px;
    }
    
    .footer-section h3 {
      color: #333;
      margin-bottom: 15px;
      font-size: 1.5rem;
    }
    
    .footer-section h4 {
      color: #333;
      margin-bottom: 15px;
      font-size: 1.1rem;
    }
    
    .footer-section p {
      color: #666;
      line-height: 1.6;
      margin-bottom: 10px;
    }
    
    .footer-section ul {
      list-style: none;
      padding: 0;
    }
    
    .footer-section ul li {
      margin-bottom: 8px;
    }
    
    .footer-section ul li a {
      color: #666;
      text-decoration: none;
      transition: color 0.3s;
    }
    
    .footer-section ul li a:hover {
      color: #333;
    }
    
    .social-links {
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
      justify-content: center; /* ✅ This is missing outside of media query */
    }
    
    .social-link {
      color: #666;
      text-decoration: none;
      padding: 8px 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
      transition: all 0.3s;
      background-color: #f9f9f9;
      flex: 1 1 100px; /* ✅ All links grow/shrink equally with a min width */
      max-width: 150px;
      text-align: center;
    }
    
    .social-link:hover {
      color: #333;
      border-color: #333;
      background-color: #e9e9e9;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .footer-bottom {
      text-align: center;
      padding-top: 20px;
      margin-top: 30px;
      border-top: 1px solid #ddd;
    }
    
    .footer-bottom p {
      color: #666;
      margin: 0;
      font-size: 0.9rem;
    }
    
    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
      }
      
      .social-links {
        display: flex;
        justify-content: center;
        gap: 15px;
      }
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

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-registration',
  imports: [FormsModule, PasswordModule],
  template: `
    <div class="min-h-screen flex items-center justify-center p-4">
      <div class="w-full max-w-md">
        <form class="registration-form bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md dark:shadow-gray-900/30">
          <div class="text-center mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100">Create Account</h2>
          </div>
          
          <div class="mb-6">
            <input 
              pInputText 
              id="name" 
              name="name"
              aria-describedby="name-help" 
              [(ngModel)]="name" 
              placeholder="Name"
              class="form-input w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-base transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/25 focus:outline-none"
            />
          </div>
          
          <div class="mb-6">
            <input 
              pInputText 
              id="surname" 
              name="surname"
              aria-describedby="surname-help" 
              [(ngModel)]="surname" 
              placeholder="Surname"
              class="form-input w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-base transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/25 focus:outline-none"
            />
          </div>
          
          <div class="mb-6">
            <input 
              type="email" 
              pInputText 
              name="email"
              [(ngModel)]="email" 
              placeholder="Email"
              class="form-input w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-base transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/25 focus:outline-none"
            />
          </div>
          
          <div class="mb-6">
            <p-password 
              [(ngModel)]="password" 
              name="password"
              [toggleMask]="true" 
              placeholder="Password"
              styleClass="form-password"
            />
          </div>
          
          <div class="mb-8">
            <p-password 
              [(ngModel)]="confirmPass" 
              name="confirmPass"
              [feedback]="false"
              placeholder="Confirm Password"
              styleClass="form-password"
            />
          </div>
          
          <div>
            <button 
              type="submit" 
              class="w-full px-3 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded text-base font-medium cursor-pointer transition-colors duration-200"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: `
    /* PrimeNG Password Component Styles */
    ::ng-deep .form-password {
      width: 100% !important;
    }

    ::ng-deep .form-password .p-password {
      width: 100% !important;
    }

    ::ng-deep .form-password .p-inputtext {
      width: 100% !important;
      padding: 0.75rem !important;
      border: 1px solid rgb(209 213 219) !important;
      border-radius: 0.25rem !important;
      font-size: 1rem !important;
      background: rgb(255 255 255) !important;
      color: rgb(17 24 39) !important;
      transition: border-color 0.2s, box-shadow 0.2s !important;
    }

    ::ng-deep .form-password .p-inputtext:focus {
      border-color: rgb(59 130 246) !important;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.25) !important;
      outline: none !important;
    }

    ::ng-deep .form-password .p-password-toggle {
      color: rgb(107 114 128) !important;
    }

    /* Dark mode support for PrimeNG components */
    @media (prefers-color-scheme: dark) {
      ::ng-deep .form-password .p-inputtext {
        background: rgb(55 65 81) !important;
        color: rgb(249 250 251) !important;
        border-color: rgb(75 85 99) !important;
      }
      
      ::ng-deep .form-password .p-inputtext:focus {
        border-color: rgb(96 165 250) !important;
        box-shadow: 0 0 0 2px rgba(96, 165, 250, 0.25) !important;
      }
      
      ::ng-deep .form-password .p-password-toggle {
        color: rgb(156 163 175) !important;
      }
    }
  `
})

export class RegistrationComponent {
  name = "";
  surname = "";
  email = "";
  password = "";
  confirmPass = "";
}

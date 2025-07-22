import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { PasswordModule } from 'primeng/password';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  imports: [FormsModule, PasswordModule, ButtonModule],
  template: `
    <div class="min-h-screen flex items-center justify-center p-4">
      <div class="w-full max-w-md">
        <div class="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md dark:shadow-gray-900/30">
          <div class="text-center mb-8">
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-gray-100">Please Login</h3>
          </div>
          
          <form>
            <div class="mb-6">
              <input 
                class="w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-base transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/25 focus:outline-none placeholder:text-gray-500 dark:placeholder:text-gray-400" 
                pInputText 
                id="username" 
                aria-describedby="username-help" 
                name="userName" 
                [(ngModel)]="name" 
                placeholder="Username"
              />
            </div>
            
            <div class="mb-8">
              <p-password 
                class="login-password w-full" 
                [(ngModel)]="value" 
                [feedback]="false" 
                name="password" 
                [toggleMask]="true" 
                placeholder="Password"
                styleClass="login-password-field"
              />
            </div>
            
            <div class="flex gap-4 w-full">
              <div class="flex-1">
                <p-button 
                  label="Login" 
                  [raised]="true" 
                  severity="success"
                  styleClass="w-full login-button login-success-button"
                />
              </div>
              <div class="flex-1">
                <p-button 
                  label="Register" 
                  [raised]="true" 
                  severity="info"
                  styleClass="w-full login-button login-info-button"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: `
    /* PrimeNG Password Component Styles */
    ::ng-deep .login-password-field {
      width: 100% !important;
    }

    ::ng-deep .login-password-field .p-password {
      width: 100% !important;
    }

    ::ng-deep .login-password-field .p-inputtext {
      width: 100% !important;
      padding: 0.75rem !important;
      border: 1px solid rgb(209 213 219) !important;
      border-radius: 0.5rem !important;
      font-size: 1rem !important;
      background: rgb(255 255 255) !important;
      color: rgb(17 24 39) !important;
      transition: border-color 0.2s, box-shadow 0.2s !important;
    }

    ::ng-deep .login-password-field .p-inputtext:focus {
      border-color: rgb(59 130 246) !important;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.25) !important;
      outline: none !important;
    }

    ::ng-deep .login-password-field .p-password-toggle {
      color: rgb(107 114 128) !important;
    }

    /* PrimeNG Button Styles */
    ::ng-deep .login-button {
      width: 100% !important;
      justify-content: center !important;
    }

    ::ng-deep .login-success-button .p-button {
      background: rgb(34 197 94) !important;
      border-color: rgb(34 197 94) !important;
      color: white !important;
      padding: 0.75rem 1rem !important;
      border-radius: 0.375rem !important;
      font-weight: 500 !important;
      transition: all 0.2s !important;
    }

    ::ng-deep .login-success-button .p-button:hover {
      background: rgb(22 163 74) !important;
      border-color: rgb(22 163 74) !important;
    }

    ::ng-deep .login-info-button .p-button {
      background: rgb(59 130 246) !important;
      border-color: rgb(59 130 246) !important;
      color: white !important;
      padding: 0.75rem 1rem !important;
      border-radius: 0.375rem !important;
      font-weight: 500 !important;
      transition: all 0.2s !important;
    }

    ::ng-deep .login-info-button .p-button:hover {
      background: rgb(37 99 235) !important;
      border-color: rgb(37 99 235) !important;
    }

    /* Dark mode support */
    @media (prefers-color-scheme: dark) {
      ::ng-deep .login-password-field .p-inputtext {
        background: rgb(55 65 81) !important;
        color: rgb(249 250 251) !important;
        border-color: rgb(75 85 99) !important;
      }
      
      ::ng-deep .login-password-field .p-inputtext:focus {
        border-color: rgb(96 165 250) !important;
        box-shadow: 0 0 0 2px rgba(96, 165, 250, 0.25) !important;
      }
      
      ::ng-deep .login-password-field .p-password-toggle {
        color: rgb(156 163 175) !important;
      }
    }
  `
})
export class LoginComponent {
  name = '';
  isInvalid: any;
  value!: string;


}

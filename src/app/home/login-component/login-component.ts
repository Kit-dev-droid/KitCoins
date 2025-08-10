import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MessageModule, Message } from 'primeng/message';
import { PasswordModule } from 'primeng/password';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, PasswordModule, ButtonModule],
  template: `
    <div class="min-h-screen flex items-center justify-center p-4">
      <div id='my-standout-modal' class="w-full max-w-md">
        <div class=" dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md dark:shadow-gray-900/30">
          <div class="text-center mb-8">
            <h3 class="text-2xl font-semibold ">Please Login</h3>
          </div>
          
          <form>
            <div class="mb-6">
               <div class="flex flex-col gap-1">
                <input 
                  class="w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-base transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/25 focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white" 
                  pInputText 
                  id="username" 
                  aria-describedby="username-help" 
                  name="userName" 
                  [(ngModel)]="name" 
                  placeholder="Username"
                />
        </div>
            </div>
            
            <div class="mb-8">
              <p-password 
                class="login-password w-full "
                
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
                  (onClick)="navigateToPath() "
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
    ::ng-deep .login-password-field .p-inputtext {
    width: 100% !important;
  }

  ::ng-deep .my-app-dark input[pInputText] {
    background-color: #1f2937 !important;
    border-color: #4b5563 !important;
    color: white !important;
  }

 
    h3 .my-app-dark{
      color: white !important;
    }

   

   
  

   


   
  `
})
export class LoginComponent {
  name = '';
  isInvalid: any;
  value!: string;

  constructor(private router: Router){}


  navigateToPath() {
    this.router.navigate(['/registration']); // Or this.router.navigateByUrl('/your-path');
  }



}

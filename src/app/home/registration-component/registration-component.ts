import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { Message, MessageModule } from "primeng/message";
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { Toast } from 'primeng/toast';
import { Ripple } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { AuthService } from '../auth-services/auth-service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
   imports: [FormsModule, PasswordModule, MessageModule, ToastModule, ButtonModule, Toast, Ripple, AvatarModule, CommonModule, FormsModule, HttpClientModule],
   providers: [MessageService],
  template: `
    <div class="min-h-screen flex items-center justify-center p-4">
      <div class="w-full max-w-md">
        <form  #register="ngForm" (ngSubmit)="onSubmit(register)" class="registration-form bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md dark:shadow-gray-900/30">
          <div class="text-center mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100">Create Account</h2>
          </div>
          
          <div class="mb-6">
            <input 
              pInputText 
              id="name" 
              name="name"
              #nameField="ngModel"
              required
              aria-describedby="name-help" 
              [(ngModel)]="name" 
              placeholder="Name"
              class="form-input w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-base transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/25 focus:outline-none"
            />
             @if (nameField.invalid && (nameField.touched || register.submitted)) {
              <p-message severity="error" size="small" variant="simple">
                @if (nameField.hasError('required')) {
                    UserName is Required.
                }
                @if (nameField.hasError('name')) {
                    Please enter a User Name.
                }
              </p-message>
            }
          </div>
          
          <div class="mb-6">
            <input 
              pInputText 
              id="surname" 
              name="surname"
              #surnameField="ngModel"
              required 
              aria-describedby="surname-help" 
              [(ngModel)]="surname" 
              placeholder="Surname"
              class="form-input w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-base transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/25 focus:outline-none"
            />
             @if (surnameField.invalid && (surnameField.touched || register.submitted)) {
              <p-message severity="error" size="small" variant="simple">
                @if (surnameField.hasError('required')) {
                    Surname is Required.
                }
                @if (surnameField.hasError('surname')) {
                    Please enter a Surname.
                }
              </p-message>
            }
          </div>
          
          <div class="mb-6">
            <input 
              type="email" 
              id='email'
              name="email"
              #emailField="ngModel"
              pInputText 
              required 
              email
              
              [(ngModel)]="email" 
              placeholder="Email"
              class="form-input w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-base transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/25 focus:outline-none"
            />
            @if (emailField.invalid && (emailField.touched || register.submitted)) {
              <p-message severity="error" size="small" variant="simple">
                @if (emailField.hasError('required')) {
                    Email is Required.
                }
                @if (emailField.hasError('email')) {
                    Please enter a valid email.
                }
              </p-message>
            }
          </div>
          
          <div class="mb-6">
            <p-password 
              [(ngModel)]="password" 
              #passwordModel="ngModel"
              name="password"
              [toggleMask]="true" 
              placeholder="Password"
              styleClass="form-password"
              [invalid]="passwordModel.invalid && (passwordModel.touched || register.submitted)" 
              name="password" [feedback]="false" 
              autocomplete="off" 
              required fluid
            />
             @if (passwordModel.invalid && (passwordModel.touched || register.submitted)) {
                <p-message severity="error" size="small" variant="simple">Password is required.</p-message>
            }
          </div>
          
          <div class="mb-8">
            <p-password 
              [(ngModel)]="confirmPass" 
              #confirmPassModel="ngModel"
              name="confirmPass"
              [feedback]="false"
              placeholder="Confirm Password"
              styleClass="form-password"
              [invalid]="confirmPassModel.invalid && (confirmPassModel.touched || register.submitted)"
              required
              fluid
            />
            @if (confirmPassModel.invalid && (confirmPassModel.touched || register.submitted )) {
              <p-message severity="error" size="small" variant="simple">Confirm Password is required.</p-message>
            }
          </div>

          <div>
            <p-toast />
            <button 
              type="submit" 
              pRipple 
              severity="warn"
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

  constructor(
    private messageService: MessageService,
    private authService: AuthService
  ) {}

   visible: boolean = false;

  name = "";
  surname = "";
  email = "";
  password = "";
  confirmPass = "";
  
 
  

  onSubmit(form: any) {

    if (form.valid) {
        
      if(this.password !== this.confirmPass){
          this.messageService.add({ 
              key: 'b',
              severity: 'error', 
              summary: 'Error', 
              detail: 'Passwords do not match', 
              life: 3000 
          });
          
          return; 
      }

      const payload = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password
      }
      
      this.authService.register(payload).subscribe({
        next: (res) => {
          if (res.success) {
            this.messageService.add({
              severity: 'success',
              summary: "Registration Successfull",
              detail: res.message || "User registered successfully",
              life: 3000
            });
            form.resetForm();
          } else {
            this.messageService.add({
              severity: 'error',
              summary: "Registration Failed",
              detail: res.message || "An error occured during registration",
              life: 3000
            });
          }
        },
        error: (err) => {
          console.error("API Error", err);
          this.messageService.add({
            severity: "error",
            summary: "Api Error",
            detail: "Something went wrong please try again later",
            life: 3000
          });
        }
      });
    }
  }
}

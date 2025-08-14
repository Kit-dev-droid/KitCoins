import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
   imports: [ PasswordModule, MessageModule, ToastModule, ButtonModule, Toast, Ripple, AvatarModule, CommonModule, ReactiveFormsModule],
   providers: [MessageService],
  template: `
    <div  class="min-h-screen flex items-center justify-center p-4">
      <div id='my-standout-modal' class="w-full max-w-md">
        <form  [formGroup]="registrationForm" (ngSubmit)="onSubmit()" class="registration-form p-8 border-gray-200 ">
          <div class="text-center mb-8">
            <h2 class="text-2xl font-semibold ">Create Account</h2>
          </div>
          
          <div class="mb-6">
            <input 
              pInputText 
              id="name" 
              formControlName="name"
              aria-describedby="name-help" 
              placeholder="Name"
              class="form-input w-full px-3 py-3 border border-gray-300  rounded   text-gray-900  text-base transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/25 focus:outline-none"
            />
             @if (registrationForm.get('name')?.invalid && registrationForm.get('name')?.touched) {
              <p-message severity="error" size="small" variant="simple">
                @if (registrationForm.get('name')?.hasError('required')) {
                    Name is Required.
                }
              </p-message>
            }
          </div>
          
          <div class="mb-6">
            <input 
              pInputText 
              id="surname" 
              formControlName="surname"
              placeholder="Surname"
              class="form-input w-full px-3 py-3 border border-gray-300  rounded bg-white text-gray-900 dark:text-gray-100 text-base transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/25 focus:outline-none"
            />
             @if (registrationForm.get('surname')?.invalid && registrationForm.get('surname')?.touched) {
              <p-message severity="error" size="small" variant="simple">
                @if (registrationForm.get('surname')?.hasError('required')) {
                    Surname is Required.
                }
              </p-message>
            }
          </div>
          
          <div class="mb-6">
            <input 
              type="email" 
              id='email'
              formControlName="email"
              pInputText 
              email
              placeholder="Email"
              class="form-input w-full px-3 py-3 border border-gray-300 rounded bg-white  text-gray-900 dark:text-gray-100 text-base transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/25 focus:outline-none"
            />
            @if (registrationForm.get('email')?.invalid && registrationForm.get('email')?.touched) {
              <p-message severity="error" size="small" variant="simple">
                @if (registrationForm.get('email')?.hasError('required')) {
                    Email is Required.
                }
                @if (registrationForm.get('email')?.hasError('email')) {
                    Please enter a valid email.
                }
              </p-message>
            }
          </div>
          
          <div class="mb-6">
            <p-password 
              
              formControlName="password"
              [toggleMask]="true" 
              placeholder="Password"
              [invalid]="registrationForm.get('password')?.invalid && (registrationForm.get('password')?.touched)" 
              name="password" 
              [feedback]="false" 
              autocomplete="off" 
              required fluid
            />
             @if (registrationForm.get('password')?.invalid && registrationForm.get('password')?.touched) {
                <p-message severity="error" size="small" variant="simple">Password is required.</p-message>
            }
          </div>
          
          <div class="mb-8">
            <p-password  
              formControlName="confirmPassword"
              [feedback]="false"
              placeholder="Confirm Password"
              [invalid]="registrationForm.get('confirmPassword')?.invalid && registrationForm.get('confirmPassword')?.touched"
              fluid
            />
            @if (registrationForm.get('confirmPassword')?.invalid && registrationForm.get('confirmPassword')?.touched) {
              <p-message severity="error" size="small" variant="simple">Confirm Password is required.</p-message>
            }
          </div>

          <div>
            <p-toast />
            <button 
              type="submit" 
              pRipple 
              severity="info"
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
    ::ng-deep .form-password .p-password {
      width: 100% !important;
    }

    
  `
})

export class RegistrationComponent {
   registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private authService: AuthService
  ) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

   visible: boolean = false;


 

  onSubmit() {

  
  const formValue = this.registrationForm.value;
  if (formValue.password !== formValue.confirmPassword) {
    this.messageService.add({ 
      severity: 'error', 
      summary: 'Error', 
      detail: 'Passwords do not match', 
      life: 3000 
    });
    return; 
  }

  if (this.registrationForm.valid) {
    const payload = {
      name: formValue.name,
      surname: formValue.surname,
      email: formValue.email,
      password: formValue.password
    };
    
    this.authService.register(payload).subscribe({
      next: (res) => {
        if (res.success) {
          this.messageService.add({
            severity: 'success',
            summary: "Registration Successful",
            detail: res.message || "User registered successfully",
            life: 3000
          });
          this.registrationForm.reset(); // ← Better form reset!
        } else {
          this.messageService.add({
            severity: 'error',
            summary: "Registration Failed",
            detail: res.message || "An error occurred during registration",
            life: 3000
          });
        }
      },
      error: (err) => {
        console.error("API Error", err);
        this.messageService.add({
          severity: "error",
          summary: "API Error",
          detail: "Something went wrong please try again later",
          life: 3000
        });
      }
    });
  } else {
    // Mark all fields as touched to show validation errors
    this.registrationForm.markAllAsTouched();
  }
}
}

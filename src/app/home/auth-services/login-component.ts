import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { MessageModule } from "primeng/message";
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AuthService } from '../auth-services/auth-service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    InputTextModule,
    PasswordModule, 
    MessageModule, 
    ToastModule, 
    ButtonModule, 
    AvatarModule, 
    CommonModule
  ],
  providers: [MessageService], 
  template: `
    <div class="min-h-screen flex items-center justify-center p-4">
      <p-toast></p-toast>
      <div id='my-standout-modal' class="w-full max-w-md">
        <div class="p-8">
          <div class="text-center mb-8">
            <h3 class="text-2xl font-semibold">Please Login</h3>
          </div>
          
          <form [formGroup]="loginForm"  (ngSubmit)="onSubmit()">
            <div class="mb-6">
               <div class="flex flex-col gap-1">
                <input 
                  class="w-full px-3 py-3 border border-gray-300 rounded-lg text-base transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/25 focus:outline-none bg-white text-gray-900" 
                  pInputText 
                  id="username" 
                  aria-describedby="username-help" 
                  formControlName="userName" 
                  placeholder="Username"
                  required
                />
                 @if (loginForm.get('userName')?.invalid && loginForm.get('userName')?.touched) {
                  <p-message severity="error" size="small" variant="simple">
                    @if (loginForm.get('userName')?.hasError('required')) {
                        UserName is Required.
                    }
                  </p-message>
                }
            </div>
            </div>
            
            <div class="mb-8">
              <p-password 
                class="login-password w-full"

                [feedback]="false" 
                formControlName="password" 

                [toggleMask]="true" 
                placeholder="Password"
                required
              />
              @if (loginForm.get('password')?.invalid && loginForm.get('password')?.touched ) {
                <p-message severity="error" size="small" variant="simple">
                  @if (loginForm.get('password')?.hasError('required')) {
                      Password is Required.
                  }
                </p-message>
              }
            </div>
            
            <div class="flex gap-4 w-full">
              <div class="flex-1">
                <p-button 
                  label="Login" 
                  type="submit"
                  [raised]="true" 
                  severity="success"
                  styleClass="w-full login-button login-success-button"
                />
              </div>

              <div class="flex-1">
                <p-button 
                  label="Register" 
                  type="button"
                  (onClick)="navigateToPath()"
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
    ::ng-deep .login-password .p-inputtext {
      width: 100% !important;
    }
  `
})
export class LoginComponent {
  loginForm: FormGroup;
  name = '';
  password = '';
  isInvalid: any;

    constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  navigateToPath() {
    this.router.navigate(['/registration']);
  }

    onSubmit() {
      const formValue = this.loginForm.value;
      

      if (this.loginForm.valid) {
        const payload = {
          userName: formValue.userName,
          password: formValue.password
        };
        
        this.authService.login(payload).subscribe({
          next: (res) => {
            if (res.success) {
              this.messageService.add({
                severity: 'success',
                summary: "Registration Successful",
                detail: res.message || "User registered successfully",
                life: 3000
              });
              this.loginForm.reset(); 
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
        this.loginForm.markAllAsTouched();
      }
    }
}
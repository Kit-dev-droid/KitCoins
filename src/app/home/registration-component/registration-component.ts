import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-registration',
  imports: [FormsModule,PasswordModule],
template: `
  <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 1rem;">
    <div style="width: 100%; max-width: 400px;" >
      <form class="registration-form">
        <div style="text-align: center; margin-bottom: 2rem;">
          <h2 class="form-title">Create Account</h2>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
          <input 
            pInputText 
            id="name" 
            name="name"
            aria-describedby="name-help" 
            [(ngModel)]="name" 
            placeholder="Name"
            class="form-input"
          />
        </div>
        
        <div style="margin-bottom: 1.5rem;">
          <input 
            pInputText 
            id="surname" 
            name="surname"
            aria-describedby="surname-help" 
            [(ngModel)]="surname" 
            placeholder="Surname"
            class="form-input"
          />
        </div>
        
        <div style="margin-bottom: 1.5rem;">
          <input 
            type="email" 
            pInputText 
            name="email"
            [(ngModel)]="email" 
            placeholder="Email"
            class="form-input"
          />
        </div>
        
        <div style="margin-bottom: 1.5rem;">
          <p-password 
            [(ngModel)]="password" 
            name="password"
            [toggleMask]="true" 
            placeholder="Password"
            styleClass="form-password"
          />
        </div>
        
        <div style="margin-bottom: 2rem;">
          <p-password 
            [(ngModel)]="confirmPass" 
            name="confirmPass"
            [feedback]="false"
            placeholder="Confirm Password"
            styleClass="form-password"
          />
        </div>
        
        <div>
          <button type="submit" class="submit-button">
            Create Account
          </button>
        </div>
      </form>
    </div>
  </div>
`,
  styles: `

  .registration-form {
  padding: 2rem;
  border-radius: 8px;
  background: var(--surface-card, #ffffff);
  color: var(--text-color, #495057);
  border: 1px solid var(--surface-border, #dee2e6);
  box-shadow:  0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-title {
  color: var(--text-color, #495057);
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.form-input {
  width: 100% !important;
  padding: 0.75rem !important;
  border: 1px solid var(--surface-border, #dee2e6) !important;
  border-radius: 4px !important;
  font-size: 1rem !important;
  background: var(--surface-ground, #ffffff) !important;
  color: var(--text-color, #495057) !important;
  transition: border-color 0.2s, box-shadow 0.2s !important;
}

.form-input:focus {
  border-color: var(--primary-color, #007bff) !important;
  box-shadow: 0 0 0 2px var(--primary-color-text, rgba(0, 123, 255, 0.25)) !important;
  outline: none !important;
}

.submit-button {
  width: 100%;
  padding: 0.75rem;
  background: var(--primary-color, #007bff);
  color: var(--primary-color-text, white);
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-button:hover {
  background: var(--primary-color-hover, #0056b3);
}

.submit-button:active {
  background: var(--primary-color-active, #004085);
}

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
  border: 1px solid var(--surface-border, #dee2e6) !important;
  border-radius: 4px !important;
  font-size: 1rem !important;
  background: var(--surface-ground, #ffffff) !important;
  color: var(--text-color, #495057) !important;
  transition: border-color 0.2s, box-shadow 0.2s !important;
}

::ng-deep .form-password .p-inputtext:focus {
  border-color: var(--primary-color, #007bff) !important;
  box-shadow: 0 0 0 2px var(--primary-color-text, rgba(0, 123, 255, 0.25)) !important;
}

::ng-deep .form-password .p-password-toggle {
  color: var(--text-color, #495057) !important;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .registration-form {
    background: #1f2937;
    color: #f9fafb;
    border-color: #374151;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  }
  
  .form-title {
    color: #f9fafb;
  }
  
  .form-input {
    background: #374151 !important;
    color: #f9fafb !important;
    border-color: #4b5563 !important;
  }
  
  .form-input:focus {
    border-color: #60a5fa !important;
    box-shadow: 0 0 0 2px rgba(96, 165, 250, 0.25) !important;
  }
  
  .submit-button {
    background: #3b82f6;
  }
  
  .submit-button:hover {
    background: #2563eb;
  }
  
  ::ng-deep .form-password .p-inputtext {
    background: #374151 !important;
    color: #f9fafb !important;
    border-color: #4b5563 !important;
  }
  
  ::ng-deep .form-password .p-inputtext:focus {
    border-color: #60a5fa !important;
    box-shadow: 0 0 0 2px rgba(96, 165, 250, 0.25) !important;
  }
  
  
}`
})

export class RegistrationComponent {
  name = "";
  surname = "";
  email = "";
  password = "";
  confirmPass = "";
}

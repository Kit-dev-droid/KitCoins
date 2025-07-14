import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-registration',
  imports: [FormsModule,PasswordModule],
  template: `
    <form>
      <div class="card flex justify-center">
        <div class="flex flex-col gap-2">
            <input pInputText id="name" aria-describedby="name-help" [(ngModel)]="name" placeholder="Name"/><br>
        </div>
    </div>
      <div class="card flex justify-center">
        <div class="flex flex-col gap-2">
            <input pInputText id="surname" aria-describedby="surname-help" [(ngModel)]="surname" placeholder="Surname" /><br>
        </div>
    </div>
      <div class="card flex justify-center">
        <input type="email" pInputText [(ngModel)]="email" placeholder="Email"/>
      </div>
      <div class="card flex justify-center">
        <p-password [(ngModel)]="password" [toggleMask]="true" placeholder="Password"/>
      </div>
      <div class="card flex justify-center">
        <p-password [(ngModel)]="confirmPass" placeholder="Confirm Password" />
      </div>
    </form>
  `,
  styles: ``
})
export class RegistrationComponent {
  name = "";
  surname = "";
  email = "";
  password = "";
  confirmPass = "";
}

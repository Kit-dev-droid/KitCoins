import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { PasswordModule } from 'primeng/password';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, PasswordModule, MessageModule, ToastModule, ButtonModule, FormsModule],

  template: `
  
    <div class='flex place-content-center' >
      <div class='shadow-2xl border border-solid border-slate-400  rounded-lg p-10'>
        <div class='pb-8'>
          <h3>Please Login</h3>
        </div>
        <form >
          <div class='pb-8'>
            <input class='border border-solid border-slate-400 w-full h-10 rounded-lg placeholder:pl-3 placeholder:text-grey' pInputText id="username" aria-describedby="username-help" name='userName' [(ngModel)]="name" placeholder="Username"/>
          </div>
          
          <div class="place-content-center pb-8">
              <p-password class='w-full border border-solid border-slate-400 h-10 rounded-lg' [(ngModel)]="value" [feedback]="false" name = 'password' [toggleMask]="true" placeholder="Password"/>
          </div>
          <div class="gap-4 content-between w-full flex items-stretch">
            <div  class="card flex place-content-center" >
                <p-button label="Login" styleClass="~bg-indigo-500 text-white"/>
            </div>
            <div id='registerButton' class="place-content-center">
                <p-button label="Register" styleClass="bg-blue-500 text-white" severity="info"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: `
    
  
    `
})
export class LoginComponent {
  name = '';
  isInvalid: any;
  value!: string;


}

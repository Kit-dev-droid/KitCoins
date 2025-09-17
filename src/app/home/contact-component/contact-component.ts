import { Component, inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, TextareaModule, ButtonModule, MessageModule, ToastModule],
   providers: [MessageService],
  template: `
  <h1></h1>
    <div class="min-h-screen flex items-center justify-center p-4">
      <p-toast></p-toast>
      <div id='my-standout-modal' class="w-full max-w-md">
        <div class="p-8">
          <div class="text-center mb-8">
            <h3 class="text-2xl font-semibold">Lets Chat</h3>
          </div>
          <form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
            <div class="flex flex-row">
              <div class="flex flex-col gap-2 pr-5">
                  <input 
                  class="form-input w-full p-3 py-3 border border-gray-300 rounded bg-white  text-gray-900 dark:text-gray-100 text-base transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/25 focus:outline-none"
                  rows="5"
                  cols="30"
                    pInputText 
                    id="name" 
                    formControlName = "name"
                    aria-describedby="name" 
                    placeholder="Name" />
                  @if (isInvalid('name')) {
                      <p-message severity="error" size="small" variant="simple">Name is required</p-message>
                  }
              </div>
              <div class="flex flex-col gap-2">
                  <input 
                  class="form-input w-full px-3 py-3 border border-gray-300 rounded bg-white  text-gray-900 dark:text-gray-100 text-base transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/25 focus:outline-none"
                  rows="5"
                  cols="30"
                    pInputText 
                    id="surname" 
                    formControlName = "surname"
                    aria-describedby="surname" 
                    placeholder="Surname" />
                  @if (isInvalid('surname')) {
                      <p-message severity="error" size="small" variant="simple">Surname is required</p-message>
                  }
              </div>
            </div>
            <div class="flex flex-col gap-2">
                <input 
                class="form-input w-full px-3 py-3 border border-gray-300 rounded bg-white  text-gray-900 dark:text-gray-100 text-base transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/25 focus:outline-none"
                rows="5"
                cols="30"
                  pInputText 
                  id="email" 
                  formControlName = "email"
                  aria-describedby="email" 
                  placeholder="Email" />
                @if (isInvalid('email')) {
                    <p-message severity="error" size="small" variant="simple">Email is required</p-message>
                }
            </div>

            <div class="flex flex-col gap-1">
                <textarea
                  class="w-full px-3 py-3 border border-gray-300 rounded-lg text-base transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/25 focus:outline-none bg-white text-gray-900" 
                  rows="5" 
                  cols="30" 
                  pTextarea 
                  formControlName="message" 
                  placeholder="Leave us a message">
                </textarea>
                @if (isInvalid('message')) {
                    <p-message severity="error" size="small" variant="simple">Message is required</p-message>
                }
            </div>

            <div class="flex-1">
              <p-button 
                label="Send" 
                type="submit"
                [raised]="true" 
                severity="info"
                styleClass="w-full contact-button contact-info-button"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class ContactComponent {
  messageService = inject(MessageService);
   items: any[] | undefined;

    exampleForm: FormGroup;

    formSubmitted: boolean = false;
    
    constructor(private fb: FormBuilder) {
        this.exampleForm = this.fb.group({
            message: ['', Validators.required],
            name: ['', Validators.required],
            surname: ['', Validators.required],
            email: ['', Validators.required,Validators.email]
        });
    }

     onSubmit() {
        this.formSubmitted = true;
        if (this.exampleForm.valid) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form is submitted', life: 3000 });
            this.exampleForm.reset();
            this.formSubmitted = false;
        }
    }

    isInvalid(controlName: string) {
        const control = this.exampleForm.get(controlName);
        return control?.invalid && (control.touched || this.formSubmitted);
    }
}

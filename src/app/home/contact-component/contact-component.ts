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
            <div class="flex flex-col gap-1">
                <textarea 
                  rows="5" 
                  cols="30" 
                  pTextarea 
                  formControlName="message" 
                  [invalid]="isInvalid('message')" 
                  placeholder="Leave us a message">
                </textarea>
                @if (isInvalid('message')) {
                    <p-message severity="error" size="small" variant="simple">message is required..</p-message>
                }
            </div>

            <div class="flex-1">
              <p-button 
                label="Register" 
                type="button"
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
            message: ['', Validators.required]
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

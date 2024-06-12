import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  formContact: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formContact = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      comments: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  hasErrors = (controlName: string, errorType: string) =>
    this.formContact.get(controlName)?.hasError(errorType) && this.formContact.get(controlName)?.touched;

  isValid = (controlName: string) =>
    this.formContact.get(controlName)?.valid && this.formContact.get(controlName)?.touched;

  sendForm = (event: Event) => {
    if (this.formContact.invalid) {
      this.formContact.markAllAsTouched();
      return;
    }
    console.log(this.formContact);
  };
}

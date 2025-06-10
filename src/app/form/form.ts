import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form {
 name = '';
  email = '';
  
  // Property binding values
  namePlaceholder = 'Enter name';
  isEmailDisabled = false;
  buttonText = 'Submit';
  charCount = 0;
  canSubmit = false;

  // Key event methods
  checkForm(): void {
    this.charCount = this.name.length;
    this.canSubmit = this.name.length > 0 && this.email.length > 0;
  }

  clearEmail(): void {
    this.email = '';
    this.checkForm();
  }

  submit(): void {
    alert('Form submitted!');
  }
}
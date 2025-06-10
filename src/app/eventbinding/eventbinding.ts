import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../highlight-directive';

@Component({
  selector: 'app-eventbinding',
  imports: [FormsModule,CommonModule,HighlightDirective],
  templateUrl: './eventbinding.html',
  styleUrls: ['./eventbinding.css']
})
export class Eventbinding {
  click: string = 'Original paragraph text';  // This shows in paragraph
  str: string = "Hello World!";

  // Method to handle button click
  clickButton() {
    this.click = this.str;  // Update paragraph ONLY on button click
    console.log('Paragraph updated to:', this.click);
  }

  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.str = inputElement.value;  // Only update str, not the paragraph
    }
    console.log('Input value:', inputElement.value);
  }

  name: string = 'Dibyanshu sahoo';
  isLoggedIn = false;
}
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-switcher',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './switcher.html',
  styleUrl: './switcher.css'
})
export class Switcher {
  selectedColor = '';
  items = ['Apple', 'Banana', 'cherry'];
  
}
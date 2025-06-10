import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-piping',
  imports: [CommonModule],
  templateUrl: './piping.html',
  styleUrl: './piping.css'
})
export class Piping {
 name: string = 'dibyanshu sahoo';
 messgae:string = 'Hello Im a Fullstack Developer';

 person={
  firstname:'dibyanshu',
  lastname:'sahoo',
 };

 date: Date = new Date('2202-02-19');
}

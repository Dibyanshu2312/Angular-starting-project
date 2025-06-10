import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-demo',
  imports: [],
  templateUrl: './demo.html',
  styleUrl: './demo.css'
})
export class Demo {
@Input() message!: string;

@Output() messageEvent = new EventEmitter<string>();

sendMessage(){
  this,this.messageEvent.emit('Hello from child')
}
}

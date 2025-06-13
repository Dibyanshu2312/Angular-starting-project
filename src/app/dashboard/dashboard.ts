import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Myservice, Product } from '../services/myservice';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports: [CommonModule, FormsModule,RouterModule],
  providers: [Myservice],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'], // <-- Fix here
})
export class Dashboard implements OnInit {
  router: any;
  constructor(private myservice: Myservice) {}

  product: Product[] = [];
  ngOnInit(): void {
    this.myservice.getData().subscribe((data) => {
      console.log(data);
      this.product = data;
    });
  }
 
}

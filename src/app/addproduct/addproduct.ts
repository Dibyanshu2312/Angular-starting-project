import { Component } from '@angular/core';
import { Myservice, Addproduct } from '../services/myservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.html',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  providers: [Myservice],
  styleUrl:'./addproduct.css'
})
export class AddProductComponent {
  product: Addproduct = new Addproduct();
  isSubmitting = false;
  successMessage = '';
  errorMessage = '';
  data: any;

  constructor(private myservice:Myservice) {
    
    this.resetForm();
  }

  onSubmit(): void {
    this.isSubmitting = true;
    this.successMessage = '';
    this.errorMessage = '';

    // Call your API method
    this.myservice.AddProduct(this.product).subscribe(data=>{
      this.data = data;
      alert(this.data);
      alert(this.data=JSON.stringify(data));
      
    });
  }

 
  resetForm(): void {
    this.product = {
      id: 0,
      title: '',
      price: 0,
      description: '',
      category: ''
    };
   
  }
}
export { Addproduct };


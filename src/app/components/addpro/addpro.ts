import { Component } from '@angular/core';
import { Addproduct, Myservice } from '../../services/myservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-addpro',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './addpro.html',
  styleUrl: './addpro.css',
  providers:[Myservice]
})
export class Addpro {

constructor(private myservice:Myservice){}
addProduct:Addproduct = new Addproduct();
data:any;

submitProduct(){
  console.log('Product submitted:');
    this.myservice.AddProduct(this.addProduct).subscribe(data=>{
      this.data = data;
      alert(this.data);
      alert(JSON.stringify(data));
    })
}
}

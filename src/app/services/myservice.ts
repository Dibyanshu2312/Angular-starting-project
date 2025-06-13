import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Myservice {
  constructor(private http: HttpClient) {}

  getData(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

  AddProduct(data: any) {
    return this.http.post<Addproduct>(
      'https://fakestoreapi.com/products',
      data
    );
  }
}

export class Rating {
  rate: number | undefined;
  count: number | undefined;
}

export class Product {
  id: number | undefined;
  title: string | undefined;
  price: number | undefined;
  description: string | undefined;
  category: string | undefined;
  image: string | undefined;
  rating: Rating | undefined;
}
export class Addproduct {
  id!: number;
  title!: string;
  price!: number;
  description!: string;
  category!: string;
}

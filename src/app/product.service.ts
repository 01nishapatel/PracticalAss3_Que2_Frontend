import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Proudct from "./product";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  uri = 'http://localhost:3700/products';
  constructor(private http:HttpClient) { }
  addPrduct(name:string,description:string,price:number,quantity:number,totalPrice:number) {
    const obj = {
      name: name,
      description:description,
      price: price,
      quantity: quantity,
      totalPrice:totalPrice
    };
    console.log(obj);
    this.http.post(`${this.uri}`, obj).subscribe(res => console.log('Done'));
  }

  getProducts() :Observable<Proudct[]> {    
    return this.http.get<Proudct[]>(`${this.uri}`);
  }
  deleteProduct(id :any) {
    return this
              .http
              .delete(`${this.uri}/${id}`);
  }

  editProduct(id :any) {
    return this
            .http
            .get(`${this.uri}/${id}`);
    }

    updateProduct(id :any,name :string, description:string,price :number, quantity :number,totalPrice:number) {

      const obj = {
          
          name: name,
          description:description,
          price: price,
          quantity: quantity,
          totalPrice:totalPrice
        };
      this
        .http
        .put(`${this.uri}/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }

}

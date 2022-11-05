import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Book from "./book";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  uri = 'http://localhost:8000/books';
  constructor(private http:HttpClient) { }
  addBook(name:string,price:number,quantity:number) {
    const obj = {
      name: name,
      price: price,
      quantity: quantity
    };
    console.log(obj);
    this.http.post(`${this.uri}`, obj).subscribe(res => console.log('Done'));
  }

  getBooks() :Observable<Book[]> {    
    return this.http.get<Book[]>(`${this.uri}`);
  }

  editBook(id :any) {
    return this
            .http
            .get(`${this.uri}/${id}`);
    }

    updateBook(id :any,name :string, price :number, quantity :number) {

      const obj = {
          
          name: name,
          price: price,
          quantity: quantity
        };
      this
        .http
        .put(`${this.uri}/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }

    deleteBook(id :any) {
      return this
                .http
                .delete(`${this.uri}/${id}`);
    }
}

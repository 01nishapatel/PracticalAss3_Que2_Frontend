import { Component, OnInit } from '@angular/core';
import Product from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[]=[];
  constructor(private ps: ProductService) { }

  ngOnInit(): void {
    this.ps
    .getProducts()
    .subscribe((data: Product[]) => {
      this.products = data;
  });
  }
  deleteProduct(id :any) {
    this.ps.deleteProduct(id).subscribe(res => {
      console.log('Deleted');
      this.ngOnInit(); 
    });
  }
}

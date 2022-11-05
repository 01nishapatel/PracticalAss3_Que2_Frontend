import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: any = {};
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router,private ps:ProductService) {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      description:['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      totalPrice:['']

    });
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ps.editProduct(params['id']).subscribe(res => {
        this.product = res;
    });
  });
  }
  updateProduct() {
    this.ps.updateProduct(this.product._id,this.angForm.value.name,this.angForm.value.description, this.angForm.value.price, this.angForm.value.quantity,this.angForm.value.totalPrice);
    this.router.navigate(['product']);
  }
}

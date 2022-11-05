import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
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
  }
  insertProduct() {
    this.angForm.value.price=parseInt(this.angForm.value.price).toString();
    this.angForm.value.quantity =parseInt(this.angForm.value.quantity).toString();
    this.angForm.value.totalPrice=parseInt(this.angForm.value.price)*parseInt(this.angForm.value.quantity);
    console.log(this.angForm.value.name);
    this.ps.addPrduct(this.angForm.value.name,this.angForm.value.description,this.angForm.value.price,this.angForm.value.quantity,this.angForm.value.totalPrice );
    this.router.navigate(['product']);
  }
}

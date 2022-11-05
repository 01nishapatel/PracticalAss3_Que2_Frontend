import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: BookService,
    private fb: FormBuilder) {
  this.angForm = this.fb.group({
      name: ['', Validators.required ],
      price: ['', Validators.required ],
      quantity: ['', Validators.required ]
    });
 }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.bs.editBook(params['id']).subscribe(res => {
        this.book = res;
    });
  });
  }
    updateBook() {
      this.bs.updateBook(this.book._id,this.angForm.value.name, this.angForm.value.price, this.angForm.value.quantity);
      this.router.navigate(['book']);
    }

}

import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product.interface';

@Component({
  selector: 'ros-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Output() save = new EventEmitter();
  @Input() product: Product;
  @Input() categories;

  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl(null, Validators.required),
    description: new FormControl(),
    category: new FormControl(null, Validators.required),
    isActive: new FormControl(),
  });

  constructor() { }

  ngOnInit(): void {
    if (this.product) {
      this.productForm.patchValue(this.product);
    }
  }

  handleSubmit() {
    if (this.productForm.valid) {
      this.save.emit(this.productForm.value);
    }
  }

}

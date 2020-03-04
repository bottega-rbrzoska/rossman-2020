import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ros-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit(): void {
  }

  handleSave(product) {
    this.productService.addProduct(product).subscribe(() => {
      this.router.navigateByUrl('/products');
    });
  }

}

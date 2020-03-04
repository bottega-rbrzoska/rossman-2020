import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ros-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products$: Observable<Product[]>;
  constructor(private productService: ProductsService) {
    this.products$ = productService.products$;
    productService.fetchProducts();
   }

  ngOnInit(): void {
  }

}

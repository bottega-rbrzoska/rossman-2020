import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';
import { ProductsStoreService } from '../products-store.service';

@Component({
  selector: 'ros-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products$: Observable<Product[]>;
  pending$: Observable<boolean>;
  constructor( private pStore: ProductsStoreService) {
    this.products$ = pStore.products$;
    this.pending$ = pStore.pending$;
    pStore.fetchProducts();
   }

  ngOnInit(): void {
  }

}

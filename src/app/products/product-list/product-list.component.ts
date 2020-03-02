import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.interface';

@Component({
  selector: 'ros-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [
    { id: '1', name: 'Prod1', category: 'food', price: 1.99, description: 'Prod1 description' },
    { id: '2', name: 'Prod2', category: 'food', price: 12.99, description: 'Prod2 description' },
    { id: '3', name: 'Prod3', category: 'electronic', price: 31.99, description: 'Prod3 description' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

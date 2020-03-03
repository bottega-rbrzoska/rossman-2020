import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

  private products = [
    { id: '1', name: 'Prod1', category: 'food', price: 1.99, description: 'Prod1 description' },
    { id: '2', name: 'Prod2', category: 'food', price: 12.99, description: 'Prod2 description' },
    { id: '3', name: 'Prod3', category: 'electronic', price: 31.99, description: 'Prod3 description' }
  ];
  constructor() { }

  getProducts() {
    return this.products;
  }
}

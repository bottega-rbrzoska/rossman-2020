import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.interface';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export interface ProductsState {
  pending: boolean;
  products: Product[];
  selectedProduct: Product[];
  productAmount: number;
}

@Injectable()
export class ProductsStoreService {
  private initialProductState: ProductsState = {
    pending: false,
    products: null,
    productAmount: null,
    selectedProduct: null
  };
  private stateHistory: { action: string, state: ProductsState}[] = [{ action: 'INIT', state: this.initialProductState}];
  private productsStoreSubj = new BehaviorSubject<ProductsState>(this.initialProductState);

  productsState$ = this.productsStoreSubj.asObservable();

  pending$ = this.productsStoreSubj.pipe(
    map(ps => ps.pending),
    distinctUntilChanged()
  );
  products$ = this.productsStoreSubj.pipe(
    map(ps => ps.products),
    distinctUntilChanged()
  );

  constructor(private httpClient: HttpClient) {}

  setState(actionName: string, payload: Partial<ProductsState>) {
    const currentState = this.productsStoreSubj.getValue();
    const newState = { ...currentState, ...payload };
    this.productsStoreSubj.next(newState);
    this.stateHistory.push({ action: actionName, state: newState});
  }

  fetchProducts() {
    this.setState('FETCH_PRODUCTS_START', { pending: true });
    this.httpClient.get<Product[]>(environment.apiUrl + '/products').subscribe(prods => {
      this.setState('FETCH_PRODUCTS_SUCCESS', { products: prods, pending: false, productAmount: prods.length});
    })
  }


}

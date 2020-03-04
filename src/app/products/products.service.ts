import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Product } from '../models/product.interface';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const apiUrl = environment.apiUrl;

@Injectable()
export class ProductsService {


  private productsSubj = new BehaviorSubject<Product[]>(null);
  private categoriesSubj = new BehaviorSubject<{ name: string; value: string }[]>(null);
  private productsFilterSubj = new BehaviorSubject<any>(null);

  products$ = this.productsSubj.asObservable();
  categories$ = this.categoriesSubj.asObservable();
  categories = this.categoriesSubj.value;
  productsFilter$ = this.productsFilterSubj.asObservable();

  constructor(private http: HttpClient) { }

  fetchProducts() {
    this.http.get<Product[]>(apiUrl + '/products').subscribe(p => this.productsSubj.next(p));
  }

  setFilter(filterData) {
    this.productsFilterSubj.next(filterData)
  }

  updateProduct(id: string, product: Product) {
    return this.http.put<any>(apiUrl + '/products/' + id, product);
  }

  addProduct( product: Product) {
    return this.http.post<any>(apiUrl + '/products/', product);
  }

  getById(id: string) {
    return this.http.get<Product>(apiUrl + '/products/' + id);
  }
  fetchCategories() {
    this.http.get<{ name: string; value: string }[]>(apiUrl + '/categories').subscribe(
      c => this.categoriesSubj.next(c)
    );
  }
}

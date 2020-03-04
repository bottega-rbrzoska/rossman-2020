import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { Observable, forkJoin } from 'rxjs';
import { Product } from 'src/app/models/product.interface';
import { filter, tap, take } from 'rxjs/operators';

@Component({
  selector: 'ros-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  id: string;
  product$: Observable<Product>;

  categories$;
  formData$: Observable<any>;
  constructor(private route: ActivatedRoute, private productService: ProductsService, private router: Router) {
    this.id = route.snapshot.params.id;
    this.product$ = this.productService.getById(this.id);
    this.categories$ = productService.categories$;

    this. formData$ = forkJoin([
      this.product$,
      this.categories$.pipe(
        filter(x => x !== null), take(1))]);

    if (!productService.categories) {
      productService.fetchCategories();
    }
  }
  ngOnInit(): void {
  }

  handleSave(product) {
    this.productService.updateProduct(this.id, product).subscribe(() => {
      this.router.navigateByUrl('/products');
    });
  }

}

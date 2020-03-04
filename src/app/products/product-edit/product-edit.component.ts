import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.interface';

@Component({
  selector: 'ros-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  id: string;
  product$: Observable<Product>;
  constructor(private route: ActivatedRoute, private productService: ProductsService, private router: Router) {
    this.id = route.snapshot.params.id;
    this.product$ = this.productService.getById(this.id);
  }
  ngOnInit(): void {
  }

  handleSave(product) {
    this.productService.updateProduct(this.id, product).subscribe(() => {
      this.router.navigateByUrl('/products');
    });
  }

}

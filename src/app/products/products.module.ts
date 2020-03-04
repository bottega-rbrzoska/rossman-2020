import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductsService } from './products.service';
import { SharedModule } from '../shared/shared.module';
import { ProductsStoreService } from './products-store.service';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    ProductAddComponent,
    ProductFormComponent,
    ProductEditComponent, ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [ProductsService, ProductsStoreService]

})
export class ProductsModule { }

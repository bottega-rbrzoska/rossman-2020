import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyTestComponent } from './my-test/my-test.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { MyTestDetailComponent } from './my-test-detail/my-test-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MyTestComponent,
    HomeComponent,
    ContactComponent,
    NavigationComponent,
    PageNotFoundComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductAddComponent,
    ProductFormComponent,
    ProductEditComponent,
    MyTestDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

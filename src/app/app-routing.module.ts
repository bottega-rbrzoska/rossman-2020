import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTestComponent } from './my-test/my-test.component';
import { HomeComponent } from './home/home.component';
import { MyTestDetailComponent } from './my-test-detail/my-test-detail.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test', component: MyTestComponent },
  { path: 'test/:id', component: MyTestDetailComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/add', component: ProductAddComponent },
  { path: 'products/:id/edit', component: ProductEditComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTestComponent } from './my-test/my-test.component';
import { HomeComponent } from './home/home.component';
import { MyTestDetailComponent } from './my-test-detail/my-test-detail.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test', component: MyTestComponent },
  { path: 'test/:id', component: MyTestDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

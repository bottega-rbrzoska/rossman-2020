import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTestComponent } from './my-test/my-test.component';
import { MyTestDetailComponent } from './my-test-detail/my-test-detail.component';


const routes: Routes = [
  { path: '', component: MyTestComponent },
  { path: ':id', component: MyTestDetailComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }

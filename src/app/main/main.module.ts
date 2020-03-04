import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import { ContactTemplateComponent } from './contact/contact-template/contact-template.component';
import { ContactReactiveComponent } from './contact/contact-reactive/contact-reactive.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    ContactTemplateComponent,
    ContactReactiveComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateComponent} from "./create/create.component";
import {ShowComponent} from "./show/show.component";
import {FormsModule} from "@angular/forms";
import {ProductRoutingModule} from "./product-routing.module";



@NgModule({
  declarations: [
    CreateComponent,
    ShowComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateComponent} from "./product/create/create.component";
import {ShowComponent} from "./product/show/show.component";

const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'show', component: ShowComponent},
  { path: '', component: ShowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

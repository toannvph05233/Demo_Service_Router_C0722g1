import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateComponent} from "./create/create.component";
import {ShowComponent} from "./show/show.component";
import {UserGuard} from "../guard/user.guard";


const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'show', component: ShowComponent, canActivate: [UserGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('../app/product/product.module').then(module => module.ProductModule)
  },
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

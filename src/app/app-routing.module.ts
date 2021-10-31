import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerPageComponent } from './Components/beer-page/beer-page.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: ProductsListComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'beer/:id',
    component: BeerPageComponent
  },
  {
    path:'**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

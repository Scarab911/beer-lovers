import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerPageComponent } from './Components/beer-page/beer-page.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AboutComponent } from './Components/about/about.component';
import { FavoritsListComponent } from './Components/favorits-list/favorits-list.component';

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
    path:'contacts',
    component: ContactComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'favorites',
    component: FavoritsListComponent
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

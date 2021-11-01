import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { HeaderComponent } from './Components/header/header.component';
import { HeroComponent } from './Components/hero/hero.component';
import { BeerDescriptionComponent } from './Components/beer-description/beer-description.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { BeerPageComponent } from './Components/beer-page/beer-page.component';
import { joinFoods as JoinFoods } from './pipes/join-foods.pipe';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { FavoritsListComponent } from './Components/favorits-list/favorits-list.component';
import { FavoritProductComponent } from './Components/favorit-product/favorit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsListComponent,
    HeaderComponent,
    HeroComponent,
    BeerDescriptionComponent,
    NotFoundPageComponent,
    BeerPageComponent,
    JoinFoods,
    AboutComponent,
    ContactComponent,
    FavoritsListComponent,
    FavoritProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

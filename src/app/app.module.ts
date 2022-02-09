import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Components/about/about.component';
import { AddItemComponent } from './Components/add-item/add-item.component';
import { BeerDescriptionComponent } from './Components/beer-description/beer-description.component';
import { BeerPageComponent } from './Components/beer-page/beer-page.component';
import { ContactComponent } from './Components/contact/contact.component';
import { FavoritProductComponent } from './Components/favorit-product/favorit-product.component';
import { FavoritsListComponent } from './Components/favorits-list/favorits-list.component';
import { HeaderComponent } from './Components/header/header.component';
import { HeroComponent } from './Components/hero/hero.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { joinFoods as JoinFoods } from './pipes/join-foods.pipe';
import { HttpClientModule } from '@angular/common/http';
import { BeersService } from './Services/beers.service';
import { ItemsService } from './Services/items.service';
import { FavoriteService } from './Services/favorite.service';

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
    FavoritProductComponent,
    AddItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [BeersService, ItemsService, FavoriteService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { HeaderComponent } from './Components/header/header.component';
import { HeroComponent } from './Components/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsListComponent,
    HeaderComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../Models/item';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  public listOfProducts: Item[];

  constructor(private http: HttpClient) {
    this.listOfProducts = [];
  }

  public getBeer(): void {
    const request = this.http.get('https://api.punkapi.com/v2/beers');

    request.subscribe((response: any) => {
      this.listOfProducts = response;
    });
  }

  public getnextBearPage(): void {
    const request = this.http.get('https://api.punkapi.com/v2/beers?page=2');

    request.subscribe((response: any) => {
      this.listOfProducts = response;
    });
  }

  public getBeerByID(id: number): Item {
    //find object by snapshoted id:
    const beer = this.listOfProducts.find((obj: Item) => obj.id == id); //nereikia {} arrow funkcijoj arba tada reikia deti return!!!

    if (beer !== undefined) {
      return beer;
    }
    return this.listOfProducts[0];
  }

  public getBeerByName(name?: string): void {
    console.log(name);

    this.listOfProducts = this.listOfProducts.filter(
      (beer) => beer.name.toLowerCase() == name
    );
    console.log(this.listOfProducts);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '../Models/item';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private searchSubject = new BehaviorSubject<string>('');
  // allProductsSubject: BehaviorSubject<any>;

  public listOfProducts: Item[];

  constructor(private http: HttpClient) {
    this.listOfProducts = [];
    // this.allProductsSubject = new BehaviorSubject(null);
  }

  // public get receivedBeersList() {
  //   return this.allProductsSubject.asObservable();
  // }

  // //Service methods for http requests
  // public getBeersRequest(): void {
  //   const request = this.http.get('https://api.punkapi.com/v2/beers');
  //   console.log(request);

  //   this.allProductsSubject.next(request);
  // }

  // Search methods
  public searchString(message: string): void {
    this.searchSubject.next(message);
  }
  public receivedSearchString(): Observable<string> {
    return this.searchSubject.asObservable();
  }

  public getBeer(): void {
    const request = this.http.get('https://api.punkapi.com/v2/beers');

    request.subscribe((response: any) => {
      console.log(response);

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
    //find object from snapshoted id:

    const beer = this.listOfProducts.find((obj: Item) => obj.id == id); //nereikia {} arrow funkcijoj arba tada reikia deti return!!!

    if (beer !== undefined) {
      return beer;
    }
    return this.listOfProducts[0];
  }

  public getBeerByName(name: string): void {
    if (this.listOfProducts.length === 0) {
      this.getBeer();
    } else if (this.listOfProducts.length === 1) {
      console.log(this.listOfProducts.length);
      this.getBeer();
    }

    this.listOfProducts = this.listOfProducts.filter((beer) =>
      beer.name.toLowerCase().includes(name.toLowerCase())
    );
  }
}

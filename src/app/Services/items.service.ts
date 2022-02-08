import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Item } from '../Models/item';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private subject = new Subject<string>();

  public listOfProducts: Item[];

  constructor(private http: HttpClient) {
    this.listOfProducts = [];
  }
  public sendMsg(message: string): void {
    this.subject.next(message);
  }
  public receivedMsg(): Observable<string> {
    return this.subject.asObservable();
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

  public getBeerByName(name: string): void {
    console.log(name);
    console.log(this.listOfProducts);

    if (this.listOfProducts.length === 0) {
      console.log('tuscias array');
      this.getBeer();
    } else if (this.listOfProducts.length === 1) {
      console.log(this.listOfProducts.length);
      this.getBeer();
    }

    this.listOfProducts = this.listOfProducts.filter((beer) =>
      beer.name.toLowerCase().includes(name.toLowerCase())
    );
    console.log(this.listOfProducts);
  }
}

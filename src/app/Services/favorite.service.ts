import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../Models/item';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  public listOfFavorite: Item[] = [];
  public subject: Subject<any>;
  request;
  result: any;
  list: any;
  constructor(private http: HttpClient) {
    this.subject = new Subject();
    this.request = this.http.get('https://api.punkapi.com/v2/beers');
    this.result = this.request.subscribe(this.subject);
  }

  public getMyBeers() {}
  public removeFromfavorite(id: number): void {
    const index = this.listOfFavorite.findIndex((obj) => obj.id === id);

    if (index !== -1) this.listOfFavorite.splice(index, 1);
    console.log('after service metod:', this.listOfFavorite);
  }
}

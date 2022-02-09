import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Item } from '../Models/item';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  public listOfFavorite: Item[] = [];

  constructor(private http: HttpClient) {}

  public removeFromfavorite(id: number): void {
    const index = this.listOfFavorite.findIndex((obj) => obj.id === id);

    if (index !== -1) this.listOfFavorite.splice(index, 1);
    console.log('after service metod:', this.listOfFavorite);
  }
}

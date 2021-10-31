import { Injectable } from '@angular/core';
import { BeerInfo } from '../interfaces/beer-info';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  public listOfFavorite: BeerInfo[] = [];

  constructor() { }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeerIndexService {
  public index!: number;
  constructor() { }
}

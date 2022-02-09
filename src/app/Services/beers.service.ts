import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Item } from '../Models/item';

@Injectable({
  providedIn: 'root',
})
export class BeersService {
  public subject: Subject<any>;
  request: Observable<Item[]>;
  result: any;
  list: any;

  constructor(private http: HttpClient) {
    this.subject = new Subject<Item[]>();
    this.request = this.http.get<Item[]>('https://api.punkapi.com/v2/beers');
    this.result = this.request.subscribe(this.subject);
  }
}

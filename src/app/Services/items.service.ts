import { Injectable } from '@angular/core';
import { Item } from '../Models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  public listOfProducts: Item [];

  constructor() { 
    this.listOfProducts = [];

    this.listOfProducts.push(new Item(261, 'Grinbergen', 'Dark solid beer', 6,'../../assets/Images/grimbergen.jpg'))
    this.listOfProducts.push(new Item(237, 'Kroonenburg Blanch', 'Aromatised wheat beer', 4.7,'../../assets/Images/blanch.jpg'))
    this.listOfProducts.push(new Item(242, 'Zigulinis', 'Unfiltered wheat beer', 4.2,'../../assets/Images/zigulinis.jpg'))
    this.listOfProducts.push(new Item(237, 'Kroonenburg Blanch', 'Aromatised wheat beer', 4.7,'../../assets/Images/blanch.jpg'))
    this.listOfProducts.push(new Item(242, 'Zigulinis', 'Unfiltered wheat beer', 4.2,'../../assets/Images/zigulinis.jpg'))
    this.listOfProducts.push(new Item(261, 'Grinbergen', 'Dark solid beer', 6,'../../assets/Images/grimbergen.jpg'))
  }
}

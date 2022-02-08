import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Models/item';
import { ItemsService } from 'src/app/Services/items.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  public beerList: Item[];

  constructor(public itemsService: ItemsService) {
    this.beerList = [];
  }

  ngOnInit(): void {
    this.itemsService.getBeer();
  }

  public nextPage() {
    this.itemsService.getnextBearPage();
  }
}

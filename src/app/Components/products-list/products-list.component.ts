import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/Models/item';
import { ItemsService } from 'src/app/Services/items.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit, OnDestroy {
  public beerList: Item[];
  message: string = '';
  $subs!: Subscription;

  constructor(public itemsService: ItemsService) {
    this.beerList = [];
  }

  ngOnInit(): void {
    this.itemsService.getBeer();
    this.$subs = this.itemsService.receivedMsg().subscribe((data) => {
      this.message = data;
    });
  }

  ngOnDestroy(): void {
    this.$subs.unsubscribe;
  }

  public nextPage() {
    this.itemsService.getnextBearPage();
  }
}

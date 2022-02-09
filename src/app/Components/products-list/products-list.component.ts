import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/Models/item';
import { FavoriteService } from 'src/app/Services/favorite.service';
import { ItemsService } from 'src/app/Services/items.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit, OnDestroy {
  searchString: string = '';
  public beers$: Subscription;
  public beerList: any;

  constructor(public itemsService: ItemsService, private fs: FavoriteService) {
    //bandom gauti data is http request
    this.beers$ = this.itemsService.receivedBeersList.subscribe((beers$) => {
      console.log('this is data', beers$);
      this.beerList = beers$;
    });
  }

  ngOnInit(): void {
    this.fs.subject.subscribe((d) => {
      console.log('this is new list:', d);
    });
    // this.itemsService.getBeer();
    // this.$subs = this.itemsService.receivedSearchString().subscribe((data) => {
    //   this.searchString = data;
    //   // this.itemsService.getBeerByName(this.searchString);
    // });
  }

  ngOnDestroy(): void {
    // this.beers$.unsubscribe;
  }

  public nextPage() {
    this.itemsService.getnextBearPage();
  }
}

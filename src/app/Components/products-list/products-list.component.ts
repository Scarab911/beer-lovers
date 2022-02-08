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
  // searchString: string = '';
  public beers$: Subscription;
  public beerList: any;

  constructor(public itemsService: ItemsService) {
    //bandom gauti data is http request
    this.beers$ = this.itemsService.receivedBeersList.subscribe((beers$) => {
      console.log('this is data', beers$);
      this.beerList = beers$;
      this.beerList == null
        ? console.log('nieko gero')
        : console.log(this.beerList);
    });
  }

  ngOnInit(): void {
    console.log('pasileido prodcut-list component');

    // this.itemsService.getBeer();

    // this.$subs = this.itemsService.receivedSearchString().subscribe((data) => {
    //   this.searchString = data;
    //   // this.itemsService.getBeerByName(this.searchString);
    // });
  }

  ngOnDestroy(): void {
    this.beers$.unsubscribe;
  }

  public nextPage() {
    this.itemsService.getnextBearPage();
  }
}

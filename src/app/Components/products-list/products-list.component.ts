import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/Models/item';
import { BeersService } from 'src/app/Services/beers.service';
import { ItemsService } from 'src/app/Services/items.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit, OnDestroy {
  // public beers$: Subscription;
  public beerList: any;

  constructor(
    public itemsService: ItemsService,
    private beerService: BeersService
  ) {
    // //subscribing to data observable after get request:
    // this.beers$ = this.itemsService.receivedBeersList.subscribe((data) => {
    //   console.log('this is data', data);
    //   this.beerList = data;
    // });
  }

  ngOnInit(): void {
    this.beerService.subject.subscribe((d) => {
      this.itemsService.listOfProducts = d;
      console.log('this is new list:', d);
    });
    // this.itemsService.getBeer();

    //******Testing search subject if  subscriber get data******
    // this.$subs = this.itemsService.receivedSearchString().subscribe((data) => {
    //   this.searchString = data;
    //   // this.itemsService.getBeerByName(this.searchString);
    // });
  }

  ngOnDestroy(): void {
    // this.beers$.unsubscribe;
  }

  // public nextPage() {
  //   this.itemsService.getnextBearPage();
  // }
}

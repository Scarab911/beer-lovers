import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/Models/item';
import { BeersService } from 'src/app/Services/beers.service';
import { FavoriteService } from 'src/app/Services/favorite.service';
import { ItemsService } from 'src/app/Services/items.service';

@Component({
  selector: 'app-beer-page',
  templateUrl: './beer-page.component.html',
  styleUrls: ['./beer-page.component.scss'],
})
export class BeerPageComponent implements OnInit {
  public id!: number;
  public beer!: Item;
  beerList: Item[];

  constructor(
    public itemsService: ItemsService,
    private favoriteService: FavoriteService,
    private route: ActivatedRoute,
    private beerService: BeersService
  ) {
    this.beerList = [];
  }

  ngOnInit(): void {
    this.beerService.subject.subscribe((data) => {
      this.beerList = data;
      console.log('list of beers from beer desc:', this.beerList);
    });

    this.id = this.route.snapshot.params['id']; //get id of clicked beer

    // this.beer = this.beerList.find((beer) => beer.id == this.id) //dont know how to overcome posible undefined
    console.log(this.id);
    // console.log(this.itemsService.listOfProducts); //always comes undefined

    this.beer = this.itemsService.getBeerByID(this.id);
  }

  //pridedam unikalia alaus rusi i megstamiausiu sarasa:
  public pushFavorite(): void {
    //patikrinam ar jau existuoja sarase
    const isExists = this.favoriteService.listOfFavorite.some(
      (item) => item === this.beer
    );

    if (isExists) {
      alert('This kind of beer already in a list!');
      return;
    }
    if (this.beer === undefined) return;

    this.favoriteService.listOfFavorite.push(this.beer);
    console.log(this.favoriteService.listOfFavorite);
  }
}

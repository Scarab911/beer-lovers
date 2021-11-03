import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/Models/item';
import { FavoriteService } from 'src/app/Services/favorite.service';
import { ItemsService } from 'src/app/Services/items.service';

@Component({
  selector: 'app-beer-page',
  templateUrl: './beer-page.component.html',
  styleUrls: ['./beer-page.component.scss']
})
export class BeerPageComponent implements OnInit {
  public id!: number;
  public beer!:Item;
  
  constructor(
              public itemsService: ItemsService,
              private favoriteService: FavoriteService, 
              private route:ActivatedRoute
              ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; //surandam paspausto elemento id per snapshot
   
    this.beer = this.itemsService.getBeerByID(this.id)
    // console.log(this.beer);
    
  }

  //pridedam unikalia alaus rusi i megstamiausiu sarasa:
  public pushFavorite(): void {
    //patikrinam ar jau existuoja sarase
    const isExists = this.favoriteService.listOfFavorite.some((item) => item === this.beer);

    if (isExists) {
      alert('This kind of beer already in a list!')
      return;
    }
      
    this.favoriteService.listOfFavorite.push(this.beer);
    console.log(this.favoriteService.listOfFavorite);
    
  }
}

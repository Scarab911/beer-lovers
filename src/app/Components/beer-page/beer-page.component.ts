import { Component, OnInit } from '@angular/core';
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
   
    this.beer = this.itemsService.getBeer(this.id)
    console.log(this.beer);
    
  }

  public pushFavorite(): void {
    console.log('megstamiausias pridetas');
  }
}

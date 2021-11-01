import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Models/item';
import { FavoriteService } from 'src/app/Services/favorite.service';

@Component({
  selector: 'app-favorits-list',
  templateUrl: './favorits-list.component.html',
  styleUrls: ['./favorits-list.component.scss']
})
export class FavoritsListComponent implements OnInit {
  public item!: Item;
  public favoriteBeersList!: Item[];

  constructor(
              public favoriteService: FavoriteService
  ) { }

  ngOnInit(): void {
    this.favoriteBeersList = this.favoriteService.listOfFavorite;
  }

  public showFavorite(){
    console.log(this.favoriteService.listOfFavorite);
  }

  public removeFavoriteItem(id:number): void {
    
    this.favoriteService.removeFromfavorite(id)
  }
}

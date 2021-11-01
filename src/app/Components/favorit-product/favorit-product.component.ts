import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/Models/item';

@Component({
  selector: 'app-favorit-product',
  templateUrl: './favorit-product.component.html',
  styleUrls: ['./favorit-product.component.scss']
})
export class FavoritProductComponent implements OnInit {

 @Input()
    public item!: Item;
    
  @Output()
    public onMoreInfo: EventEmitter<number>;
    
  @Output()
    public onItemRemoved: EventEmitter<number>;

  constructor() {
    this.onMoreInfo = new EventEmitter<number>();
    this.onItemRemoved = new EventEmitter<number>();
   }

  ngOnInit(): void {
  }

}

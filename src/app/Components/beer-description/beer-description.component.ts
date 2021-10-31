import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/Models/item';

@Component({
  selector: 'app-beer-description [beer]',
  templateUrl: './beer-description.component.html',
  styleUrls: ['./beer-description.component.scss']
})
export class BeerDescriptionComponent implements OnInit {

  @Input()
    public beer!: Item;

  @Output() 
    public onAddFavorite: EventEmitter<void>;

  constructor( ) {
    this.onAddFavorite = new EventEmitter();
   }

  ngOnInit(): void {
  }

  
}

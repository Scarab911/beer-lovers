import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/Models/item';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input()
    public item!: Item;

  constructor() { }

  ngOnInit(): void {
  }

}

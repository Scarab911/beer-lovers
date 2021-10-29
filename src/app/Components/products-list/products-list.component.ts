import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/Services/items.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  constructor(
    public itemsService: ItemsService
  ) {}

  ngOnInit(): void {
  }

}

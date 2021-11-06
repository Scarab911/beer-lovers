import { Component, Input, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/Services/items.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  // @Input() beerInfo!: BeerInfo;

  constructor(
    public itemsService: ItemsService
  ) {}

  ngOnInit(): void {
  this.itemsService.getBeer();
  }

  public nextPage(){
    this.itemsService.getnextBearPage();
  }
  // public getIndex(id:number): number {
  //   console.log('paspausto item id:', id);

  //   let index = 0;

  //   for(var i = 0; i < this.itemsService.listOfProducts.length; i++) {
  //     if(this.itemsService.listOfProducts[i].id === id) {
  //         index = i;
  //         break;
  //       }
  //   } 

  //   // const thisIndex = this.itemsService.listOfProducts.indexOf((obj) => {obj.id === id});

  //   console.log('paspausto item indexas:', index);
  //   return index
  // }
}

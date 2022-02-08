import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/Services/items.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public itemsService: ItemsService) {}

  ngOnInit(): void {}

  getBeers(): void {
    // this.itemsService.getBeer();
  }
}

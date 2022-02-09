import { Component } from '@angular/core';
import { ItemsService } from './Services/items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'beer-lovers';

  constructor(private itemsService: ItemsService) {
    // console.log('pasileido app');
    // this.itemsService.getBeersRequest();
  }
}

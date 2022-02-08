import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Item } from 'src/app/Models/item';
import { ItemsService } from 'src/app/Services/items.service';

@Component({
  selector: 'app-beer-description [beer]',
  templateUrl: './beer-description.component.html',
  styleUrls: ['./beer-description.component.scss'],
})
export class BeerDescriptionComponent implements OnInit, OnDestroy {
  searchString: string = '';
  $subs!: Subscription;

  @Input()
  public beer!: Item;

  @Output()
  public onAddFavorite: EventEmitter<void>;

  constructor(private itemService: ItemsService) {
    this.onAddFavorite = new EventEmitter();
  }

  ngOnInit(): void {
    console.log('pasileido beer description');

    this.$subs = this.itemService.receivedSearchString().subscribe((data) => {
      this.searchString = data;
    });
  }
  ngOnDestroy(): void {
    this.$subs.unsubscribe;
  }
}

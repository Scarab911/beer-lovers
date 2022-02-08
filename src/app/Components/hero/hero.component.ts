import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from 'src/app/Services/items.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  // public searchString!: string;

  @Output() onSearch: EventEmitter<string>;

  constructor(private router: Router, private itemsService: ItemsService) {
    this.onSearch = new EventEmitter<string>();
  }

  ngOnInit(): void {
    // this.searchString != '';
  }

  public getSearchString(text: string): void {
    // console.log('mygtukas paspaustas', this.searchString);
    this.itemsService.searchString(text);
    // this.router.navigate(['/home']).then(() => {
    //   this.itemsService.getBeerByName(this.searchString);
    // });
  }

  public onSubmit(text: string) {
    // po nukreipimo filtruojam toliau
    this.router.navigate(['/home']).then(() => {
      this.itemsService.getBeerByName(text);
    });
  }
}

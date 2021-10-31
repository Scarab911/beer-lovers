import { Pipe, PipeTransform } from '@angular/core';
import { ItemsService } from "src/app/Services/items.service";

@Pipe({
  name: 'getIndex'
})
export class GetIndexPipe implements PipeTransform {

  transform(id: number) {
    
    
  }

}

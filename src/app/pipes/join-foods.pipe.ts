import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'foods'
})
export class joinFoods implements PipeTransform {

  transform(food: string[]) {
    
    return food.join(', ')
  }

}

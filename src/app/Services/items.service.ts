import { Injectable } from '@angular/core';
import { Item } from '../Models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  public listOfProducts: Item [];

  constructor() { 
    this.listOfProducts = [];

    this.listOfProducts.push(new Item(261, 'Grinbergen', 'Dark solid beer', 6.5,'../../assets/Images/grimbergen.jpg','Grimbergen Double Ambrée is an authentic and savoury abbey beer, renowned for its unique well-balanced contrast between spicy and fruity notes. NOSE: Strong fragrances of caramel and liquorice blend with the more subtle smells of red fruits, prunes and roasted malt.', ['Baked beetroot salad','Roasted peanuts'], 4.3));

    this.listOfProducts.push(new Item(237, 'Kroonenburg Blanch', 'Aromatised wheat beer', 4.7,'../../assets/Images/blanch.jpg', 'Kronenbourg 1664 Blanc is an exquisitely fruity French wheat beer that is crafted to refresh that was launched in 2006. The deliciously hazy yellow 5% beer is brewed with a light French touch to give subtle aromas and delicate layers of citrus fruits and coriander spice.',[],3.9));

    this.listOfProducts.push(new Item(242, 'Žigulinis', 'Lager hop beer', 4.2,'../../assets/Images/zigulinis.jpg', 'A simple lager beer of one hop flower and one malt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, porro. Ipsa facilis sequi corrupti consectetur beatae accusamus soluta architecto id!',[], 3.7));

    this.listOfProducts.push(new Item(268, 'Kroonenburg Blanch', 'Aromatised wheat beer', 4.7,'../../assets/Images/blanch.jpg', 'Kronenbourg 1664 Blanc is an exquisitely fruity French wheat beer that is crafted to refresh that was launched in 2006. The deliciously hazy yellow 5% beer is brewed with a light French touch to give subtle aromas and delicate layers of citrus fruits and coriander spice.',[],3.9));
    
    this.listOfProducts.push(new Item(36, 'Žigulinis', 'Lager hop beer', 4.2,'../../assets/Images/zigulinis.jpg', 'A simple lager beer of one hop flower and one malt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, porro. Ipsa facilis sequi corrupti consectetur beatae accusamus soluta architecto id!',[], 3.7));
    
    this.listOfProducts.push(new Item(145, 'Grinbergen', 'Dark solid beer', 6.5,'../../assets/Images/grimbergen.jpg','Grimbergen Double Ambrée is an authentic and savoury abbey beer, renowned for its unique well-balanced contrast between spicy and fruity notes. NOSE: Strong fragrances of caramel and liquorice blend with the more subtle smells of red fruits, prunes and roasted malt.', [], 4.3));
  }

  public getBeerByID(id:number): Item {
    //find object by snapshoted id:
    const beer = this.listOfProducts.find((obj:Item) => obj.id == id); //nereikia {} arrow funcijoj arba tada reikia deti return!!!
    
    if (beer !== undefined) {
      return beer
    }
      return this.listOfProducts[0]
  }

  public getBeerByName(name?: string): Item {
    const beerByName = this.listOfProducts.find((obj) => obj.name == name)
    if (beerByName !== undefined) {
      return beerByName
    }
      return this.listOfProducts[0]
  }
}

**Angular projektas - Alaus megėjų platforma**

Sukurkite platformą alaus megėjams, jūsų Angular projekte privalo būti bent 2 skirtingi routes, 3 skirtingi komponentai ir bent vienas service.
Jūsų platforma privalo turėti alaus modelį (klasę arba interface) su tokiais parametrais:

- **id**: number - unikalus alaus rūšies id

- **name**: string - alaus rūšies pavadinimas

- **description**: string - alaus rūšies aprašymas

- **image_url**: string - alaus paveikslėlis

- **food_pairing**: string[] - string masyvas, kuriame saugoma informacija, su kokiu maistu reikėtų derinti šią alau rūšį

- **abv**: number - alchoholio kiekio aluje rodiklis (stiprumas)

- **ph**: number - alaus pH lygis (rūgštingumas/šarmingumas)
  Platformos funkcionalumą sugalvokite patys, svarbu įgyvendinti aukščiau pateiktus kriterijus. Idėjos:

Alaus rušių atvaizdavimas ir rikiavimas
Alaus rušių filtravimas pagal kriterijus
Mėgstamiausiu alaus rušių pridėjimas
Alaus rušių rinkinių sudarymas

Ranka suvesta alaus info pradedant projekta:

```js
this.listOfProducts = [];

this.listOfProducts.push(
  new Item(
    261,
    "Grinbergen",
    "Dark solid beer",
    6.5,
    "../../assets/Images/grimbergen.jpg",
    "Grimbergen Double Ambrée is an authentic and savoury abbey beer, renowned for its unique well-balanced contrast between spicy and fruity notes. NOSE: Strong fragrances of caramel and liquorice blend with the more subtle smells of red fruits, prunes and roasted malt.",
    ["Baked beetroot salad", "Roasted peanuts"],
    4.3
  )
);

this.listOfProducts.push(
  new Item(
    237,
    "Kroonenburg Blanch",
    "Aromatised wheat beer",
    4.7,
    "../../assets/Images/blanch.jpg",
    "Kronenbourg 1664 Blanc is an exquisitely fruity French wheat beer that is crafted to refresh that was launched in 2006. The deliciously hazy yellow 5% beer is brewed with a light French touch to give subtle aromas and delicate layers of citrus fruits and coriander spice.",
    [],
    3.9
  )
);

this.listOfProducts.push(
  new Item(
    242,
    "Žigulinis",
    "Lager hop beer",
    4.2,
    "../../assets/Images/zigulinis.jpg",
    "A simple lager beer of one hop flower and one malt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, porro. Ipsa facilis sequi corrupti consectetur beatae accusamus soluta architecto id!",
    [],
    3.7
  )
);
```

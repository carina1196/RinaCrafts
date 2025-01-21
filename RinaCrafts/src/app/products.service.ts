import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  cottonYarn4ply: any = [
    {
      description: 'White',
      img: '4plyCotton/white.png',
      quantity: 5,
      price: 0.8,
    },
    {
      description: 'Cream',
      img: '4plyCotton/cream.png',
      quantity: 0,
      price: 0.8,
    },
    {
      description: 'Skin',
      img: '4plyCotton/skin.png',
      quantity: 10,
      price: 0.8,
    },
    {
      description: 'Fair Skin',
      img: '4plyCotton/fairSkin.png',
      quantity: 100,
      price: 0.8,
    },
    {
      description: 'Pink',
      img: '4plyCotton/pink.png',
      quantity: 100,
      price: 0.8,
    },
  ];

  lifeYarn4ply: any = [
    {
      description: 'White',
      img: '4plyLifeYarn/white.png',
      quantity: 100,
      price: 1.2,
    },
    {
      description: 'Cream',
      img: '4plyLifeYarn/cream.png',
      quantity: 100,
      price: 1.2,
    },
    {
      description: 'Navy',
      img: '4plyLifeYarn/navy.png',
      quantity: 100,
      price: 1.2,
    },
  ];

  constructor() {}

  getAllProducts() {
    return this.cottonYarn4ply.concat(this.lifeYarn4ply);
  }
}

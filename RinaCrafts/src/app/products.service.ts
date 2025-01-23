import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  data: any = [
    {
      id: 1,
      category: 'yarn',
      brand: 'cottonYarn4ply',
      description: 'White',
      img: '4plyCotton/white.png',
      stock: 5,
      price: 0.8,
    },
    {
      id: 2,
      category: 'yarn',
      brand: 'cottonYarn4ply',
      description: 'Cream',
      img: '4plyCotton/cream.png',
      stock: 0,
      price: 0.8,
    },
    {
      id: 3,
      category: 'yarn',
      brand: 'cottonYarn4ply',
      description: 'Skin',
      img: '4plyCotton/skin.png',
      stock: 10,
      price: 0.8,
    },
    {
      id: 4,
      category: 'yarn',
      brand: 'cottonYarn4ply',
      description: 'Fair Skin',
      img: '4plyCotton/fairSkin.png',
      stock: 100,
      price: 0.8,
    },
    {
      id: 5,
      category: 'yarn',
      brand: 'cottonYarn4ply',
      description: 'Pink',
      img: '4plyCotton/pink.png',
      stock: 100,
      price: 0.8,
    },
    {
      id: 6,
      category: 'yarn',
      brand: 'lifeYarn4ply',
      description: 'White',
      img: '4plyLifeYarn/white.png',
      stock: 100,
      price: 1.2,
    },
    {
      id: 7,
      category: 'yarn',
      brand: 'lifeYarn4ply',
      description: 'Cream',
      img: '4plyLifeYarn/cream.png',
      stock: 100,
      price: 1.2,
    },
    {
      id: 8,
      category: 'yarn',
      brand: 'lifeYarn4ply',
      description: 'Navy',
      img: '4plyLifeYarn/navy.png',
      stock: 100,
      price: 1.2,
    },
    {
      id: 9,
      category: 'yarn',
      brand: 'cottonYarn4ply',
      description: 'Royal Blue',
      img: '4plyCotton/royalBlue.png',
      stock: 5,
      price: 0.8,
    },
    {
      id: 10,
      category: 'yarn',
      brand: 'cottonYarn4ply',
      description: 'Navy',
      img: '4plyCotton/navy.png',
      stock: 5,
      price: 0.8,
    },
    {
      id: 11,
      category: 'yarn',
      brand: 'cottonYarn4ply',
      description: 'Turquoise',
      img: '4plyCotton/turquoise.png',
      stock: 5,
      price: 0.8,
    },
    {
      id: 12,
      category: 'yarn',
      brand: 'cottonYarn4ply',
      description: 'Emerald',
      img: '4plyCotton/emerald.png',
      stock: 5,
      price: 0.8,
    },
    {
      id: 13,
      category: 'yarn',
      brand: 'cottonYarn4ply',
      description: 'Lime',
      img: '4plyCotton/lime.png',
      stock: 5,
      price: 0.8,
    },
    {
      id: 14,
      category: 'yarn',
      brand: 'cottonYarn4ply',
      description: 'Green',
      img: '4plyCotton/green.png',
      stock: 5,
      price: 0.8,
    },
    {
      id: 15,
      category: 'yarn',
      brand: 'cottonYarn4ply',
      description: 'Grey',
      img: '4plyCotton/grey.png',
      stock: 5,
      price: 0.8,
    },
    {
      id: 16,
      category: 'yarn',
      brand: 'cottonYarn4ply',
      description: 'Black',
      img: '4plyCotton/black.png',
      stock: 5,
      price: 0.8,
    },
    {
      id: 17,
      category: 'yarn',
      brand: 'cottonYarn4ply',
      description: 'Light Grey',
      img: '4plyCotton/lightGrey.png',
      stock: 5,
      price: 0.8,
    },
    {
      id: 18,
      category: 'yarn',
      brand: 'cottonYarn4ply',
      description: 'Orange',
      img: '4plyCotton/orange.png',
      stock: 5,
      price: 0.8,
    },
    {
      id: 19,
      category: 'yarn',
      brand: 'cottonYarn4ply',
      description: 'Matcha',
      img: '4plyCotton/matcha.png',
      stock: 5,
      price: 0.8,
    },
    {
      id: 20,
      category: 'yarn',
      brand: 'cottonYarn4ply',
      description: 'Aubergine',
      img: '4plyCotton/aubergine.png',
      stock: 5,
      price: 0.8,
    },
    {
      id: 21,
      category: 'yarn',
      brand: 'cottonYarn4ply',
      description: 'Off White',
      img: '4plyCotton/offWhite.png',
      stock: 5,
      price: 0.8,
    },
    {
      id: 22,
      category: 'yarn',
      brand: 'cottonYarn4ply',
      description: 'Lavender',
      img: '4plyCotton/lavender.png',
      stock: 5,
      price: 0.8,
    },
    {
      id: 23,
      category: 'yarn',
      brand: 'cottonYarn4ply',
      description: 'Aquamarine',
      img: '4plyCotton/aquamarine.png',
      stock: 5,
      price: 0.8,
    },
    {
      id: 24,
      category: 'yarn',
      brand: 'cottonYarn4ply',
      description: 'Caramel',
      img: '4plyCotton/caramel.png',
      stock: 5,
      price: 0.8,
    },
    {
      id: 25,
      category: 'yarn',
      brand: 'cottonYarn4ply',
      description: 'Blue',
      img: '4plyCotton/blue.png',
      stock: 5,
      price: 0.8,
    },
    {
      id: 26,
      category: 'yarn',
      brand: 'cottonYarn4ply',
      description: 'Hot Pink',
      img: '4plyCotton/hotPink.png',
      stock: 5,
      price: 0.8,
    },
    {
      id: 27,
      category: 'yarn',
      brand: 'cottonYarn4ply',
      description: 'Light Aqua',
      img: '4plyCotton/lightAqua.png',
      stock: 5,
      price: 0.8,
    },
    {
      id: 28,
      category: 'yarn',
      brand: 'cottonYarn4ply',
      description: 'Light Pink',
      img: '4plyCotton/lightPink.png',
      stock: 5,
      price: 0.8,
    },
    {
      id: 29,
      category: 'yarn',
      brand: 'cottonYarn4ply',
      description: 'Light Yellow',
      img: '4plyCotton/lightYellow.png',
      stock: 5,
      price: 0.8,
    },
    {
      id: 30,
      category: 'yarn',
      brand: 'cottonYarn4ply',
      description: 'Mauve',
      img: '4plyCotton/mauve.png',
      stock: 5,
      price: 0.8,
    },
    {
      id: 31,
      category: 'yarn',
      brand: 'cottonYarn4ply',
      description: 'Purple',
      img: '4plyCotton/purple.png',
      stock: 5,
      price: 0.8,
    },
    {
      id: 32,
      category: 'yarn',
      brand: 'cottonYarn4ply',
      description: 'Red',
      img: '4plyCotton/red.png',
      stock: 5,
      price: 0.8,
    },
    {
      id: 33,
      category: 'yarn',
      brand: 'cottonYarn4ply',
      description: 'Watermelon Red',
      img: '4plyCotton/watermelonRed.png',
      stock: 5,
      price: 0.8,
    },
    {
      id: 34,
      category: 'yarn',
      brand: 'cottonYarn4ply',
      description: 'Wine',
      img: '4plyCotton/wine.png',
      stock: 5,
      price: 0.8,
    },
    {
      id: 35,
      category: 'yarn',
      brand: 'cottonYarn4ply',
      description: 'Yellow',
      img: '4plyCotton/yellow.png',
      stock: 5,
      price: 0.8,
    },
  ];

  constructor(private http: HttpClient) {}

  getAllProducts = () => {
    return this.data;
  };
}

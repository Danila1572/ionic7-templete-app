import { Injectable } from '@angular/core';

export interface Product {
  name: string
  desc: string
  checked: boolean
  id: number
  imageUrl: string
}
1
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public products: Product[] = [
    {
      name: 'Сима-лэнд',
      desc: 'Специальные цены на сиропы и топпинги Акция закончится 22 января Успевайте, только с 9 по 22 января на сиропы и топпинги из списка действуют специальные цены. ',
      checked: false,
      id: 1,
      imageUrl: 'https://e-jam.ru/upload/iblock/876/0g2z0uhui3mv9qt810mvlk4f7ldhjxyk/toppingi.jpg'
    },
    {
      name: 'Лазурит',
      desc: 'Новый год наступил, а праздничные скидки на избранные коллекции мебели LAZURIT остались*:СКИДКИ 65% на спальни «Амалия», «Жаклин» и «Сильвия».',
      checked: true,
      id: 2,
      imageUrl: 'https://www.princeplaza.ru/wp-content/uploads/2024/01/1200h630.jpg'
    },
    {
      name: 'Пицца Суши Вок',
      desc: 'Мы несем ответственность за вкус наших блюд и поэтому разработали новый стандарт: «Если блюдо покажется вам невкусным, мы вернем деньги за оплаченный заказ!»',
      checked: false,
      id: 3,
      imageUrl: 'https://assets.allcafe.ru/k/holidays/canvas/960x420/pic/283551203079.jpg'
    },
    
  ];

  constructor() { }

  public getProducts(): Product[] {
    return this.products;
  }

  public getProductById(id: number): Product {
    return this.products[id];
  }
}

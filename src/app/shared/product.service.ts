import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class ProductService {

  constructor(private logger: LoggerService) { }

  getProduct(): Product {
    return new Product(0, 'iphone7', 6999, '苹果品牌');
  }

}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public desc: string
  ) {}
}

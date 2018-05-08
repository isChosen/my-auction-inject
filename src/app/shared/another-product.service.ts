import { Injectable } from '@angular/core';
import { ProductService, Product } from './product.service';
import { LoggerService } from './logger.service';

@Injectable()
export class AnotherProductService implements ProductService {

  getProduct(): Product {
    this.logger.log('anotherProductService 调用了 log 方法');
    return new Product(2, 'mate10', 3666, '华为品牌');
  }
  constructor(private logger: LoggerService) { }

}

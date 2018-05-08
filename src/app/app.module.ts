import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';
import { ProductService } from './shared/product.service';
import { LoggerService } from './shared/logger.service';
import { AnotherProductService } from './shared/another-product.service';


@NgModule({
  declarations: [
    AppComponent,
    Product1Component,
    Product2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: ProductService,
      useFactory: (logger: LoggerService, appConf) => {
        const dev = Math.random() > 0.5;
        if (appConf.isDev) {
          return new ProductService(logger);
        } else {
          return new AnotherProductService(logger);
        }
      },
      deps: [LoggerService, 'APP_CONF']
    },
    LoggerService,
    {provide: 'APP_CONF', useValue: {isDev: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

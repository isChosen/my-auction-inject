import { TestBed, inject } from '@angular/core/testing';

import { AntherProductService } from './anther-product.service';

describe('AntherProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AntherProductService]
    });
  });

  it('should be created', inject([AntherProductService], (service: AntherProductService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { CarsOffersService } from './cars-offers.service';

describe('CarsOffersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarsOffersService]
    });
  });

  it('should be created', inject([CarsOffersService], (service: CarsOffersService) => {
    expect(service).toBeTruthy();
  }));
});

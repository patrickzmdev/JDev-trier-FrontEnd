import { TestBed } from '@angular/core/testing';

import { RestauranteService } from './restaurante-service.service';

describe('ServiceService', () => {
  let service: RestauranteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestauranteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

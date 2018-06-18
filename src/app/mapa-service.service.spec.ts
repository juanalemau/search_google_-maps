import { TestBed, inject } from '@angular/core/testing';

import { MapaServiceService } from './mapa-service.service';

describe('MapaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapaServiceService]
    });
  });

  it('should be created', inject([MapaServiceService], (service: MapaServiceService) => {
    expect(service).toBeTruthy();
  }));
});

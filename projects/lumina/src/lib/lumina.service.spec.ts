import { TestBed } from '@angular/core/testing';

import { LuminaService } from './lumina.service';

describe('LuminaService', () => {
  let service: LuminaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LuminaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

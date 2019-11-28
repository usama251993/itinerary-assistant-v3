import { TestBed } from '@angular/core/testing';

import { IaFabService } from './ia-fab.service';

describe('IaFabService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IaFabService = TestBed.get(IaFabService);
    expect(service).toBeTruthy();
  });
});

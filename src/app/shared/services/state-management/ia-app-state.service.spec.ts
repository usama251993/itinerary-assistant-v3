import { TestBed } from '@angular/core/testing';

import { IaAppStateService } from './ia-app-state.service';

describe('IaAppStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IaAppStateService = TestBed.get(IaAppStateService);
    expect(service).toBeTruthy();
  });
});

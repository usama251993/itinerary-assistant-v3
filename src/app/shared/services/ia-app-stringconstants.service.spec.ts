import { TestBed } from '@angular/core/testing';

import { IaAppStringconstantsService } from './ia-app-stringconstants.service';

describe('IaAppStringconstantsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IaAppStringconstantsService = TestBed.get(IaAppStringconstantsService);
    expect(service).toBeTruthy();
  });
});

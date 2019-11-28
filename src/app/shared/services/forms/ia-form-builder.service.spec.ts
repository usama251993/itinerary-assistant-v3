import { TestBed } from '@angular/core/testing';

import { IaFormBuilderService } from './ia-form-builder.service';

describe('IaFormBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IaFormBuilderService = TestBed.get(IaFormBuilderService);
    expect(service).toBeTruthy();
  });
});

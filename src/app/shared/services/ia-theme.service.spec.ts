import { TestBed } from '@angular/core/testing';

import { IaThemeService } from './ia-theme.service';

describe('IaThemeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IaThemeService = TestBed.get(IaThemeService);
    expect(service).toBeTruthy();
  });
});

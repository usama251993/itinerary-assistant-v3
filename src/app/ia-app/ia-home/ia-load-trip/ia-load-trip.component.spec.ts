import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaLoadTripComponent } from './ia-load-trip.component';

describe('IaLoadTripComponent', () => {
  let component: IaLoadTripComponent;
  let fixture: ComponentFixture<IaLoadTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaLoadTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaLoadTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaCreateTripComponent } from './ia-create-trip.component';

describe('IaCreateTripComponent', () => {
  let component: IaCreateTripComponent;
  let fixture: ComponentFixture<IaCreateTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaCreateTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaCreateTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

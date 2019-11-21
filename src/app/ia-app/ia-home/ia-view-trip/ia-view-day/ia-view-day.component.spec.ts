import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaViewDayComponent } from './ia-view-day.component';

describe('IaViewDayComponent', () => {
  let component: IaViewDayComponent;
  let fixture: ComponentFixture<IaViewDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaViewDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaViewDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaViewStayComponent } from './ia-view-stay.component';

describe('IaViewStayComponent', () => {
  let component: IaViewStayComponent;
  let fixture: ComponentFixture<IaViewStayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaViewStayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaViewStayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

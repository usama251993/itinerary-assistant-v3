import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaRouteErrorComponent } from './ia-route-error.component';

describe('IaRouteErrorComponent', () => {
  let component: IaRouteErrorComponent;
  let fixture: ComponentFixture<IaRouteErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaRouteErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaRouteErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaFabComponent } from './ia-fab.component';

describe('IaFabComponent', () => {
  let component: IaFabComponent;
  let fixture: ComponentFixture<IaFabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaFabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

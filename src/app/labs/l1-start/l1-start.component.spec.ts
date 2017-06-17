import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { L1StartComponent } from './l1-start.component';

describe('L1StartComponent', () => {
  let component: L1StartComponent;
  let fixture: ComponentFixture<L1StartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L1StartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(L1StartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

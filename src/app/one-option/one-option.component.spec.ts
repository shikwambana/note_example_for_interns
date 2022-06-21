import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneOptionComponent } from './one-option.component';

describe('OneOptionComponent', () => {
  let component: OneOptionComponent;
  let fixture: ComponentFixture<OneOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

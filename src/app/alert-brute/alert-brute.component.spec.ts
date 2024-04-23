import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertBruteComponent } from './alert-brute.component';

describe('AlertBruteComponent', () => {
  let component: AlertBruteComponent;
  let fixture: ComponentFixture<AlertBruteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertBruteComponent]
    });
    fixture = TestBed.createComponent(AlertBruteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

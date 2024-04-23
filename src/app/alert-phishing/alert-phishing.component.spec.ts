import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertPhishingComponent } from './alert-phishing.component';

describe('AlertPhishingComponent', () => {
  let component: AlertPhishingComponent;
  let fixture: ComponentFixture<AlertPhishingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertPhishingComponent]
    });
    fixture = TestBed.createComponent(AlertPhishingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhshingDetectionComponent } from './phshing-detection.component';

describe('PhshingDetectionComponent', () => {
  let component: PhshingDetectionComponent;
  let fixture: ComponentFixture<PhshingDetectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhshingDetectionComponent]
    });
    fixture = TestBed.createComponent(PhshingDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

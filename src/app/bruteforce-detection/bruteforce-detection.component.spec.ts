import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BruteforceDetectionComponent } from './bruteforce-detection.component';

describe('BruteforceDetectionComponent', () => {
  let component: BruteforceDetectionComponent;
  let fixture: ComponentFixture<BruteforceDetectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BruteforceDetectionComponent]
    });
    fixture = TestBed.createComponent(BruteforceDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

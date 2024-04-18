import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdosDetectionComponent } from './ddos-detection.component';

describe('DdosDetectionComponent', () => {
  let component: DdosDetectionComponent;
  let fixture: ComponentFixture<DdosDetectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DdosDetectionComponent]
    });
    fixture = TestBed.createComponent(DdosDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

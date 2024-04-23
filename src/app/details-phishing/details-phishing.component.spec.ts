import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPhishingComponent } from './details-phishing.component';

describe('DetailsPhishingComponent', () => {
  let component: DetailsPhishingComponent;
  let fixture: ComponentFixture<DetailsPhishingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsPhishingComponent]
    });
    fixture = TestBed.createComponent(DetailsPhishingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

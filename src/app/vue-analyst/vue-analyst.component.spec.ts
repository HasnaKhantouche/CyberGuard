import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueAnalystComponent } from './vue-analyst.component';

describe('VueAnalystComponent', () => {
  let component: VueAnalystComponent;
  let fixture: ComponentFixture<VueAnalystComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VueAnalystComponent]
    });
    fixture = TestBed.createComponent(VueAnalystComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBruteforceComponent } from './details-bruteforce.component';

describe('DetailsBruteforceComponent', () => {
  let component: DetailsBruteforceComponent;
  let fixture: ComponentFixture<DetailsBruteforceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsBruteforceComponent]
    });
    fixture = TestBed.createComponent(DetailsBruteforceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

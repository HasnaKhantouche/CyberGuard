import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlinjectionDetectionComponent } from './sqlinjection-detection.component';

describe('SqlinjectionDetectionComponent', () => {
  let component: SqlinjectionDetectionComponent;
  let fixture: ComponentFixture<SqlinjectionDetectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SqlinjectionDetectionComponent]
    });
    fixture = TestBed.createComponent(SqlinjectionDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

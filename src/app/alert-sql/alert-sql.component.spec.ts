import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertSqlComponent } from './alert-sql.component';

describe('AlertSqlComponent', () => {
  let component: AlertSqlComponent;
  let fixture: ComponentFixture<AlertSqlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertSqlComponent]
    });
    fixture = TestBed.createComponent(AlertSqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

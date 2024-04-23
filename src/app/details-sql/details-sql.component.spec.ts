import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSqlComponent } from './details-sql.component';

describe('DetailsSqlComponent', () => {
  let component: DetailsSqlComponent;
  let fixture: ComponentFixture<DetailsSqlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsSqlComponent]
    });
    fixture = TestBed.createComponent(DetailsSqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

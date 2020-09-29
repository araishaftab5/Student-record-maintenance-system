import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeinsertComponent } from './gradeinsert.component';

describe('GradeinsertComponent', () => {
  let component: GradeinsertComponent;
  let fixture: ComponentFixture<GradeinsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeinsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeinsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

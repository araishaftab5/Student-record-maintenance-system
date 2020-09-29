import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseinsertComponent } from './courseinsert.component';

describe('CourseinsertComponent', () => {
  let component: CourseinsertComponent;
  let fixture: ComponentFixture<CourseinsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseinsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseinsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GradeinsertComponent } from './gradeinsert.component';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
  import { DebugElement } from '@angular/core';
import { UsersService } from '../users.service';
describe('GradeinsertComponent', () => {
  let component: GradeinsertComponent;
  let fixture: ComponentFixture<GradeinsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
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
    const userService: UsersService=TestBed.get(UsersService);
    expect(component).toBeTruthy();
  });
});

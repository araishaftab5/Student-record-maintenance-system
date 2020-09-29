import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-courseinsert',
  templateUrl: './courseinsert.component.html',
  styleUrls: ['./courseinsert.component.css']
})
export class CourseinsertComponent implements OnInit {
message;
  regForm = new FormGroup({
    coursenameFormControl: new FormControl(''),
    branchFormControl: new FormControl(''),
    creditsFormControl: new FormControl(''),
   
     });
  constructor(private router:Router,private service:UsersService) { }

  ngOnInit(): void {
  }
  view(){
    this.router.navigate(['']);
  }
  addNow(){
    let course = {
      coursename: this.regForm.get('coursenameFormControl').value,
      branch: this.regForm.get('branchFormControl').value,
      credits: this.regForm.get('creditsFormControl').value
    }
    let response=this.service.addCourse(course);
    response.subscribe((data) =>this.message=data);


}
}


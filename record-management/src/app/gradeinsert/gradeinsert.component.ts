import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-gradeinsert',
  templateUrl: './gradeinsert.component.html',
  styleUrls: ['./gradeinsert.component.css']
})
export class GradeinsertComponent implements OnInit {
  message;
  regForm = new FormGroup({
    studentidFormControl: new FormControl(''),
    courseidFormControl: new FormControl(''),
    gradeFormControl: new FormControl(''),
   
     });
  constructor(private router:Router,private service:UsersService) { }

  ngOnInit(): void {
  }
  view(){
    this.router.navigate(['']);
  }
  addNow(){
    let grade = {
      studentid: this.regForm.get('studentidFormControl').value,
      courseid: this.regForm.get('courseidFormControl').value,
      grade: this.regForm.get('gradeFormControl').value
    }
    let response=this.service.addGrade(grade);
    response.subscribe((data) =>this.message=data);


}
}

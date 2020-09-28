import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import {FormGroup,FormControl} from '@angular/forms'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  regForm = new FormGroup({
    nameFormControl: new FormControl(''),
    emailFormControl: new FormControl(''),
    batchFormControl: new FormControl(''),
    branchFormControl: new FormControl(''),
    contactFormControl: new FormControl('')
     });
  message:any;
  constructor(private service:UsersService,private router:Router) { }

  ngOnInit(): void {
  }

public registerNow(){
  let user = {
    name: this.regForm.get('nameFormControl').value,
    email: this.regForm.get('emailFormControl').value,
    batch: this.regForm.get('batchFormControl').value,
    branch: this.regForm.get('branchFormControl').value,
    contact: this.regForm.get('contactFormControl').value
  }
let response=this.service.doRegistration(user);
response.subscribe((data) =>this.message=data);
}
view(){
  this.router.navigate(['']);
}
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private userservice:UsersService,private router:Router) { }
dataArr:any;
  ngOnInit(): void {
     this.getStudentData();
  }
  getStudentData()
  {
this.userservice.getData().subscribe(res=>{
  this.dataArr=res;
})
  }
  deleteData(id){
    this.userservice.deleteData(id).subscribe(res =>{
      this.getStudentData();
      
    })
  }
  add(){
    this.router.navigate(['/insert']);
  }
  addcourse(){
    this.router.navigate(['/addcourse']);
  }
  addgrade(){
    this.router.navigate(['/addgrade']);
  }
  

}

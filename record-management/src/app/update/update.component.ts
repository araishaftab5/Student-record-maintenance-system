import { viewClassName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { User } from '../user.model';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  message:any;
  id;
  user=new User();
  data;
  constructor(private router:Router,private service:UsersService,  private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.getData();
  }
  getData()
  {
this.service.getOneEmployee(this.id).subscribe(res=>{
 this.data=res;
  this.user=this.data;
})
  }
  view(){
    this.router.navigate(['']);
  }
  update(){
    this.service.updateData(this.id,this.user).subscribe(res=>{
    })
}
}

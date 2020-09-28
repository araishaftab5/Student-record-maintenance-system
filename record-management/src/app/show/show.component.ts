import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute,private service:UsersService) { }
  id;
  data;
  user;
  name;
  branch;
  course;
  courseid;
  grades;
  g;
  cnt=0;
   filter:any = {}

  gradeone:any=[];
  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.getData();
  }
  getData()
  {
    this.service.getOneEmployee(this.id).subscribe(res=>{
    this.data=res;
    this.user=this.data;
    this.name=this.user.name;
    this.branch=this.user.branch;
    this.getCourses();
})
  }
  getCourses(){
    this.service.getCourses(this.branch).subscribe(res =>{
      this.course=res;
      //this.courseid=this.course.courseid
       let i;
       for(i=0;i<this.course.length;i++)
       {
          this.getGrades(this.id, this.course[i].courseid);
       }
       console.log(this.gradeone);
     
    })
  }
  getGrades(id,courseid){
      this.service.getGrades(id,courseid).subscribe(res =>{
      this.grades=res;
      if(this.grades==null)
      this.gradeone.push("Not given");
      else
      this.gradeone.push(this.grades.grade);
    })

    
  }

}

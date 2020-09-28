import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
//import {RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'})
  constructor(private http:HttpClient) { }

  public doRegistration(user){
    return this.http.post("http://localhost:8080/rest/users/add",user,{headers: this.headers});
  }
  public getData(){
    return this.http.get("http://localhost:8080/rest/users/all");
  }
  public deleteData(id){
    return this.http.delete('http://localhost:8080/rest/users/delete/'+id);
  }
  public updateData(id,user){
   return this.http.patch('http://localhost:8080/rest/users/update/',user);
  }
  public getOneEmployee(id){
   return this.http.get('http://localhost:8080/rest/users/getone/'+id);
  }
  public getCourses(branch){
   return this.http.get('http://localhost:8080/rest/users/courses/'+branch);
  }
  public getGrades(id,courseid){  
  
  return this.http.get('http://localhost:8080/rest/users/grades/'+id+'/'+courseid);
  } 
}

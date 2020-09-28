package com.techprimers.mybatis.springbootmybatis.model;

public class Grade {
  private Integer gradeid;
  private Integer studentid;
  private String grade;
  private Integer courseid;
public Grade(Integer gradeid, Integer studentid, String grade, Integer courseid) {
	super();
	this.gradeid = gradeid;
	this.studentid = studentid;
	this.grade = grade;
	this.courseid = courseid;
}
public Integer getGradeid() {
	return gradeid;
}
public Integer getStudentid() {
	return studentid;
}
public String getGrade() {
	return grade;
}
public Integer getCourseid() {
	return courseid;
}
public void setGradeid(Integer gradeid) {
	this.gradeid = gradeid;
}
public void setStudentid(Integer studentid) {
	this.studentid = studentid;
}
public void setGrade(String grade) {
	this.grade = grade;
}
public void setCourseid(Integer courseid) {
	this.courseid = courseid;
}
  
}

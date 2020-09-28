package com.techprimers.mybatis.springbootmybatis.model;

public class Course {
   private Integer courseid;
   private String coursename;
   private String branch;
   private Integer credits;
public Course(Integer courseid, String coursename, String branch, Integer credits) {
	super();
	this.courseid = courseid;
	this.coursename = coursename;
	this.branch = branch;
	this.credits = credits;
}
public Integer getCourseid() {
	return courseid;
}
public String getCoursename() {
	return coursename;
}
public String getBranch() {
	return branch;
}
public Integer getCredits() {
	return credits;
}
public void setCourseid(Integer courseid) {
	this.courseid = courseid;
}
public void setCoursename(String coursename) {
	this.coursename = coursename;
}
public void setBranch(String branch) {
	this.branch = branch;
}
public void setCredits(Integer credits) {
	this.credits = credits;
}
   
}

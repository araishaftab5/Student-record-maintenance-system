package com.techprimers.mybatis.springbootmybatis.model;

public class User {
  //POJO to retrive data
private Integer id;
   private String name;
   private String email;
   private Integer batch;
   private String branch;
   private String contact;
   
public User(Integer id, String name, String email, Integer batch, String branch, String contact) {
	super();
	this.id = id;
	this.name = name;
	this.email = email;
	this.batch = batch;
	this.branch = branch;
	this.contact = contact;
}
public User() {
	// TODO Auto-generated constructor stub
}
public void setId(Integer id) {
	this.id = id;
}
public void setName(String name) {
	this.name = name;
}
public void setEmail(String email) {
	this.email = email;
}
public void setBatch(Integer batch) {
	this.batch = batch;
}
public Integer getId() {
	return id;
}
public String getName() {
	return name;
}
public String getEmail() {
	return email;
}
public Integer getBatch() {
	return batch;
}
public String getBranch() {
	return branch;
}
public String getContact() {
	return contact;
}
public void setBranch(String branch) {
	this.branch = branch;
}
public void setContact(String contact) {
	this.contact = contact;
}
   
}

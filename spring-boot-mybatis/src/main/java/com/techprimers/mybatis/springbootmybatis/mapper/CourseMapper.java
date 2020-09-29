package com.techprimers.mybatis.springbootmybatis.mapper;

import java.util.List;

import javax.websocket.server.PathParam;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.SelectKey;

import com.techprimers.mybatis.springbootmybatis.model.Course;
import com.techprimers.mybatis.springbootmybatis.model.Grade;
import com.techprimers.mybatis.springbootmybatis.model.User;


@Mapper
public interface CourseMapper {
	
	@Select("select * from courses where branch=#{branch}")
	List<Course> getCourse(@PathParam("branch") final String branch);
	
	@Select("select * from grade where studentid=#{studentid} and courseid=#{courseid}")
	Grade getGrade(Integer studentid,Integer courseid);

	@Insert("insert into courses(coursename,branch,credits) values(#{coursename},#{branch},#{credits})")
	@SelectKey(statement="SELECT LAST_INSERT_ID()", keyProperty="courseid", before=false, resultType=Integer.class)
	void insert(Course course);
	
	@Insert("insert into grade(studentid,courseid,grade) values(#{studentid},#{courseid},#{grade})")
	@SelectKey(statement="SELECT LAST_INSERT_ID()", keyProperty="gradeid", before=false, resultType=Integer.class)
	void insertGrade(Grade grade);
}


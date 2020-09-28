package com.techprimers.mybatis.springbootmybatis.mapper;

import java.util.List;

import javax.websocket.server.PathParam;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.techprimers.mybatis.springbootmybatis.model.Course;
import com.techprimers.mybatis.springbootmybatis.model.Grade;


@Mapper
public interface CourseMapper {
	
	@Select("select * from courses where branch=#{branch}")
	List<Course> getCourse(@PathParam("branch") final String branch);
	
	@Select("select * from grade where studentid=#{studentid} and courseid=#{courseid}")
	Grade getGrade(Integer studentid,Integer courseid);
}

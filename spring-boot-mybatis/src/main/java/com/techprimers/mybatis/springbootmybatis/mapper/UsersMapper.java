package com.techprimers.mybatis.springbootmybatis.mapper;

import java.util.List;

import javax.websocket.server.PathParam;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.SelectKey;
import org.apache.ibatis.annotations.Update;

import com.techprimers.mybatis.springbootmybatis.model.User;

@Mapper
public interface UsersMapper {

	@Select("select * from studentdata")
	List<User> findAll();

	@Insert("insert into studentdata(name,email,batch,branch,contact) values(#{name},#{email},#{batch},#{branch},#{contact})")
	@SelectKey(statement="SELECT LAST_INSERT_ID()", keyProperty="id", before=false, resultType=Integer.class)
	void insert(User user);
	
	@Select("select * from studentdata where id=#{id}")
	User findSpecificUser(@PathParam("id") final Integer id);

    @Update("update studentdata set batch=#{batch},name=#{name},email=#{email},branch=#{branch},contact=#{contact} where id=#{id}")
    void update(User user);
    
    @Delete("delete from studentdata where id=#{id}")
    void delete(@PathParam("id") final Integer id);
}

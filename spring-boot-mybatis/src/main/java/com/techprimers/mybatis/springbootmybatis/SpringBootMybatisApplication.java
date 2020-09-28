package com.techprimers.mybatis.springbootmybatis;

import org.apache.ibatis.type.MappedTypes;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.techprimers.mybatis.springbootmybatis.model.User;

@CrossOrigin(origins = "*")
@MappedTypes(User.class)
@MapperScan("com.techprimers.mybatis.springbootmybatis.mapper")
@SpringBootApplication
public class SpringBootMybatisApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootMybatisApplication.class, args);
	}

}

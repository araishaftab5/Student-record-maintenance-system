package com.techprimers.mybatis.springbootmybatis.resource;



import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.techprimers.mybatis.springbootmybatis.mapper.CourseMapper;
import com.techprimers.mybatis.springbootmybatis.mapper.UsersMapper;
import com.techprimers.mybatis.springbootmybatis.model.Course;
import com.techprimers.mybatis.springbootmybatis.model.Grade;
import com.techprimers.mybatis.springbootmybatis.model.User;



@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/rest/users")
public class UsersResource {

	private UsersMapper usersMapper;
	private CourseMapper courseMapper;
	
	public UsersResource(UsersMapper usersMapper,CourseMapper courseMapper) {
		super();
		this.usersMapper = usersMapper;
		this.courseMapper = courseMapper;
		
	}
	

	


	@GetMapping("/all")
	public List<User> getAll()
	{
		return usersMapper.findAll();
	}
	
	@PostMapping("/add")
	public void add(@RequestBody User user)
	{
//		User user= new User();
//		user.setName("Ria");
//		user.setEmail("ria1000jain@gmail.com");
//		user.setBatch(2020);
		usersMapper.insert(user);
		
	}
	
	@GetMapping("/getone/{id}")
	public User getOne(@PathVariable Integer id){
		return usersMapper.findSpecificUser(id);
	}
	
	@PatchMapping("/update")
	public void update(@RequestBody User user)
	{
	    
		usersMapper.update(user);
		
	}
	
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable Integer id)
	{
//		User user= new User();
//		user.setName("Ria");
//		
		usersMapper.delete(id);
		//return usersMapper.findAll();
	}
	
	@GetMapping("/courses/{branch}")
	public List<Course> getCourses(@PathVariable String branch)
	{
		System.out.println("hye");
		return courseMapper.getCourse(branch);
	}
	
	@GetMapping("/grades/{studentid}/{courseid}")
	public Grade getGrade(@PathVariable Integer studentid, @PathVariable Integer courseid)
	{
		//System.out.println("hye from get grades");
		return courseMapper.getGrade(studentid,courseid);
	}
}

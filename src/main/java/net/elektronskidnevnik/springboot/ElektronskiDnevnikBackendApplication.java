package net.elektronskidnevnik.springboot;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import net.elektronskidnevnik.springboot.service.UserService;



@SpringBootApplication
public class ElektronskiDnevnikBackendApplication implements CommandLineRunner {

	@Autowired
	UserService userService;
	
	
	public static void main(String[] args) {
		SpringApplication.run(ElektronskiDnevnikBackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("starting code");

//		User user = new User();
//
//		user.setFirstName("Ljubisa");
//		user.setLastName("Savic");
//		user.setUsername("Ljube");
//		user.setPassword(this.bCryptPasswordEncoder.encode("ljubisa1"));
//		user.setEmail("ljube@gsg.com");
//		user.setProfile("default.png");
//
//		Role role1 = new Role();
//
//		role1.setRoleId(44L);
//		role1.setRoleName("ADMIN");
//
//		Set<UserRole> userRoleSet = new HashSet<>();
//		UserRole userRole = new UserRole();
//		userRole.setRole(role1);
//		userRole.setUser(user);
//
//		userRoleSet.add(userRole);
//
//		User user1 = this.userService.createUser(user, userRoleSet);
//		System.out.println(user1.getUsername());
	}

}
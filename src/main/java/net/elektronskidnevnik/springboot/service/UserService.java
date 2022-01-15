package net.elektronskidnevnik.springboot.service;

import java.util.Set;

import net.elektronskidnevnik.springboot.model.User;
import net.elektronskidnevnik.springboot.model.UserRole;

public interface UserService {

	
public User createUser(User user, Set<UserRole> userRoles) throws Exception;
	
	public User getUser(String username);
	
	public void deleteUser(Long userId);
}

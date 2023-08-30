package com.app.service;

import java.util.List;
import com.app.entities.User;

public interface IUserService {

	String registerUser(User TransientObject);

	public List<User> getAllUsers();
	
	
}

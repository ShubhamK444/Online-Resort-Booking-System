package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.dao.UserRepository;
import com.app.entities.User;

@Service
public class ForgotPasswordImpl implements IForgotPassword {
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	UserRepository repository;
	
	@Override
	public String resetPassword(User user) {
		
		User user1 = repository.findByIdCardNumber(user.getIdCardNumber());
		User user2 = repository.findByEmail(user.getEmail());
		
		if(user1 != null && user2 != null) {
			String psw = passwordEncoder.encode(user.getPassword());
			user1.setPassword(psw);
			User updatedUser = repository.save(user1);
			
			if(updatedUser != null) {
				return "Password gets updated.";
			}
		}
		return "Customer is not registered yet.";
	}

}

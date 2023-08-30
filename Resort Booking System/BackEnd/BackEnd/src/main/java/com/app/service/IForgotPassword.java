package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.app.entities.User;

public interface IForgotPassword {
	
	@Autowired
	public String resetPassword(User user);
	

}

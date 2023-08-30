package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.User;
import com.app.service.IForgotPassword;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/forgotPassword")
public class ForgotPasswordController {
	
	@Autowired
	private IForgotPassword forgotPassword;
	
	@PostMapping("/reset")
	public String forgotPassword(@RequestBody User user) {
		return forgotPassword.resetPassword(user);
	}
	
}

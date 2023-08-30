package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.User;
import com.app.service.LoginService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/user")
public class LoginController {
	
	@Autowired
	private LoginService loginService;
	
	@PostMapping("/signIn")
	public User authenticateUser(@RequestBody User user) {
		return loginService.authenticateUser(user);
	}
}

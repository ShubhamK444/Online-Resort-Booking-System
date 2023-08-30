package com.app.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.app.entities.User;
import com.app.service.IUserService;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "*")
public class UserController {

	@Autowired
	private IUserService userService;

	public UserController() {
		System.out.println("in ctor of " + getClass());
	}

	@PostMapping("/signup")
	public ResponseEntity<?> addNewEmp(@RequestBody User usr) {
		System.out.println("in add new emp " + usr);
		return ResponseEntity.status(200).body(userService.registerUser(usr));
	}

	@GetMapping("/getalluser")
	public List<User> getAllUser() {
		return userService.getAllUsers();
	}

}

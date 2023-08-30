package com.app.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.dao.UserRepository;
import com.app.entities.User;

@Service
public class LoginServiceImpl implements LoginService {

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

	@Autowired
	private UserRepository userRepository;

	@Override
	public User authenticateUser(User user) {

		Optional<User> opUser = Optional.ofNullable(userRepository.findByEmail(user.getEmail()));
		User dbUser = opUser.get();

		if (opUser.isPresent()) {

			if (bCryptPasswordEncoder.matches(user.getPassword(), dbUser.getPassword()))
				//return "Successfully logged in!";
				return dbUser;
			else
				//return "Wrong password, please try again.";
				return null;
		}
		//return "Customer is not registered yet !!";
		return null;
	}
}

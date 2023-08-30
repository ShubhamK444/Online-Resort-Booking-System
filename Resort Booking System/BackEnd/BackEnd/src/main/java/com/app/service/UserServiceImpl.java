package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.app.customExceptions.ResourceNotFoundException;
import com.app.dao.BookingRepository;
import com.app.dao.RoomRepository;
import com.app.dao.UserRepository;
import com.app.entities.Booking;
import com.app.entities.RoomCategory;
import com.app.entities.User;

@Service
@Transactional
public class UserServiceImpl implements IUserService {

	@Autowired
	UserRepository userRepository;

	@Autowired
	private PasswordEncoder encoder;

	@Override
	public String registerUser(User userToBePersist) {

		User email = userRepository.findByEmail(userToBePersist.getEmail());
		User phone = userRepository.findByPhoneNumber(userToBePersist.getPhoneNumber());
		User adhar = userRepository.findByIdCardNumber(userToBePersist.getIdCardNumber());

		if (email != null) {
			return "email is already exist!";
		} else if (phone != null) {
			return "phone is already exist!";
		} else if (adhar != null) {
			return "Aadhar card no is already exist!";
		}
		// encode pwd
		userToBePersist.setPassword(encoder.encode(userToBePersist.getPassword()));
		User user = userRepository.save(userToBePersist);
		return "Registration succsefully completed!";

	}

	@Override
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

}

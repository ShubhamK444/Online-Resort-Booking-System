package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.app.entities.User;

public interface UserRepository extends JpaRepository<User,Integer> {

	User findByEmail(String email);
	
	User findByIdCardNumber(String idCard);

	User findByPhoneNumber(String phoneNumber);

	
}

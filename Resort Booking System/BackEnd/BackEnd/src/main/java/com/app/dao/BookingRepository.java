package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Booking;

public interface BookingRepository extends JpaRepository<Booking, Integer> {

//	@Query("select b from Booking b where b.regNo = :regNo")
//	List<Booking> findByRegId(Integer regNo);
	
//	@Query("From Booking where User.Id = :regNo")
	
	List<Booking> findByDummy(Integer dummy);
	
	
	
}

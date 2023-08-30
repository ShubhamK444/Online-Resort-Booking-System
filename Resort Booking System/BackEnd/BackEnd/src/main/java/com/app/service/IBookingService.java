package com.app.service;

import java.util.*;
import com.app.entities.Booking;

public interface IBookingService {

	Booking saveBookingDetail(Booking book, Integer id);

	List<Booking> getBookingDetailById(Integer regNo);
	
	List<Booking> getAllBookingDetail();

	boolean deleteBooking(Integer id);
	
	Optional<Booking> getBookingDetailsBybookingId(Integer Id);
	
}

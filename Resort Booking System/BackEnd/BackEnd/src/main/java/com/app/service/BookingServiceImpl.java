package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.app.customExceptions.ResourceNotFoundException;
//import com.app.dao.BillRepository;
import com.app.dao.BookingRepository;
import com.app.dao.RoomRepository;
import com.app.entities.Booking;
//import com.app.entities.Receipt;
import com.app.entities.RoomCategory;
import com.app.entities.User;

@Service
@Transactional
public class BookingServiceImpl implements IBookingService {

	@Autowired
	private BookingRepository bookRepo;
	@Autowired
	RoomRepository roomRepository;

	@Override
	public Booking saveBookingDetail(Booking book, Integer id) {
		return bookRepo.save(book);
	}

	@Override
	public List<Booking> getAllBookingDetail() {
		return bookRepo.findAll();
	}

	@Override
	public boolean deleteBooking(Integer id) {
		try {
			bookRepo.deleteById(id);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	@Override
	public List<Booking> getBookingDetailById(Integer dummy) {
		return bookRepo.findByDummy(dummy);
	}

	@Override
	public Optional<Booking> getBookingDetailsBybookingId(Integer Id) {
		try {
			return bookRepo.findById(Id);
		} catch (Exception e) {
			return null;
		}
	}
}

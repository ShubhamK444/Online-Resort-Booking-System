package com.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.app.entities.Booking;
import com.app.service.IBookingService;

@RestController
@RequestMapping("/api/Book")
@CrossOrigin(origins = "*")
public class BookingController {
	
	@Autowired
	IBookingService bookService;
	
	@PostMapping("/{regNo}")
	public ResponseEntity<?> addBooking(@RequestBody Booking addBooking, @PathVariable Integer regNo) {
		Booking booking = bookService.saveBookingDetail(addBooking, regNo);
		if (booking != null) {
			return ResponseEntity.status(201).body(booking);
		} else {
			return ResponseEntity.status(500).body("error");
		}
	}
	
	@GetMapping("/getbooking/{dummy}")
	public List<Booking> getBookingByDummyId(@PathVariable Integer dummy){
		return bookService.getBookingDetailById(dummy);
	}
	
	@GetMapping("/getDetailByBookingId/{Id}")
	public Optional<Booking> getDetailsByBookingId(@PathVariable Integer Id){
		return bookService.getBookingDetailsBybookingId(Id);
	}
	
	@GetMapping("/getallbooking")
	public List<Booking> getAllBooking(){
		return bookService.getAllBookingDetail();
	}

	@DeleteMapping("/deletebooking/{Id}")
	public ResponseEntity<?> cancelBooking(@PathVariable Integer Id) {
		boolean status = bookService.deleteBooking(Id);
		if (status) {
			return ResponseEntity.status(200).body(true);
		} else {
			return ResponseEntity.status(500).body(false);
		}
	}
}

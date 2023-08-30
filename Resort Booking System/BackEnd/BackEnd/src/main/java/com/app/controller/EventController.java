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

import com.app.entities.Event;
import com.app.service.IEventService;

@RestController
@RequestMapping("/api/event")
@CrossOrigin(origins = "*")
public class EventController {
	@Autowired
	IEventService eventService;

	@PostMapping("/book/{regNo}")
	public ResponseEntity<?> addEvent(@RequestBody Event event, @PathVariable Integer regNo) {
		Event event1 = eventService.saveEventOrderDetails(event, regNo);
		if (event1 != null) {
			return ResponseEntity.status(201).body(event1);
		} else {
			return ResponseEntity.status(500).body("error");
		}
	}
	
	@GetMapping("/getEvent/{dummyId}")
	public List<Event> getDetailsById(@PathVariable Integer dummyId){
		return eventService.getEventDetailsById(dummyId);
	}
	
	@GetMapping("/getEventId/{Id}")
	public Optional<Event> getDetailByEventId(@PathVariable Integer Id){
		return eventService.getDetailById(Id);
	}
	
	
	@GetMapping("/getAllEvent")
	public List<Event> getAllEvents(){
		return eventService.getAllEventDetail();
	}
	
	@DeleteMapping("/deleteEvent/{Id}")
	public ResponseEntity<?> cancelEvent(@PathVariable Integer Id) {
		boolean status = eventService.deleteEvent(Id);
		if (status) {
			return ResponseEntity.status(200).body(true);
		} else {
			return ResponseEntity.status(500).body(false);
		}
	}
}

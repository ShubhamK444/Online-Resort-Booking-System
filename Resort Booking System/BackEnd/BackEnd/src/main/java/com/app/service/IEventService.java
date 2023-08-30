package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.entities.Event;

public interface IEventService {

	Event saveEventOrderDetails(Event event,Integer Id);
	
	List<Event> getEventDetailsById(Integer dummyId);
	
	List<Event> getAllEventDetail();
	
	Optional <Event> getDetailById(Integer Id);
	
	boolean deleteEvent(Integer id);
}

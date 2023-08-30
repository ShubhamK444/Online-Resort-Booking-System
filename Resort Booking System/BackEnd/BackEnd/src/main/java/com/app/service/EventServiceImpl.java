  package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.customExceptions.ResourceNotFoundException;

import com.app.dao.EventRepository;
import com.app.entities.Event;

@Service
@Transactional
public class EventServiceImpl implements IEventService {

	@Autowired
	EventRepository eventRepository;
	
	@Override
	public Event saveEventOrderDetails(Event event,Integer recieptId) {
		return eventRepository.save(event);
	}

	@Override
	public List<Event> getEventDetailsById(Integer dummyId) {
		return eventRepository.findByDummyId(dummyId);
	}
	
	@Override
	public List<Event> getAllEventDetail() {
		return eventRepository.findAll();
	}

	@Override
	public boolean deleteEvent(Integer id) {
		try {
			eventRepository.deleteById(id);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	@Override
	public Optional<Event> getDetailById(Integer Id) {
		return eventRepository.findById(Id);
	}
}

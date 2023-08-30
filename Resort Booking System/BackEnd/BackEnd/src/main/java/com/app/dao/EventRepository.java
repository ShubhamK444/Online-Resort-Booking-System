package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.app.entities.Event;

public interface EventRepository extends JpaRepository<Event, Integer> {

	List<Event> findByDummyId(Integer dummyId);
}

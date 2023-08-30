package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.app.entities.Enquiry;

public interface EnquiryRepository extends JpaRepository<Enquiry, Integer>{

}

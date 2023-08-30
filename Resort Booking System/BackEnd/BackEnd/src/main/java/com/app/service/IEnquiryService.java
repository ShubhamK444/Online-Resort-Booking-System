package com.app.service;

import java.util.List;

import com.app.entities.Enquiry;

public interface IEnquiryService {
	
	public String addEnquiry(Enquiry enquiry);

	public List<Enquiry> getAllEnquiries();
	
	public boolean deleteById(Integer Id);
	
}

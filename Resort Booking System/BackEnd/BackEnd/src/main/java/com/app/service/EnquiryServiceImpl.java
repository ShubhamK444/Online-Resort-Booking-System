package com.app.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.app.dao.EnquiryRepository;
import com.app.entities.Enquiry;

@Service
public class EnquiryServiceImpl implements IEnquiryService {

	@Autowired
	private EnquiryRepository enquiryRepository;

	@Override
	public String addEnquiry(Enquiry enquiry) {
		Enquiry enquiry2 = enquiryRepository.save(enquiry);
		System.err.println(enquiry2.toString());
		if (enquiry2 != null)
			return "Enquiry has been posted successfully.";
		return "Fail to add enquiry";
	}

	@Override
	public List<Enquiry> getAllEnquiries() {
		return enquiryRepository.findAll();
	}

	@Override
	public boolean deleteById(Integer Id) {
		try {
			enquiryRepository.deleteById(Id);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
}

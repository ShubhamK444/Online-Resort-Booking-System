package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Enquiry;
import com.app.service.IEnquiryService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/enquiry")
public class EnquiryController {
	
	@Autowired
	private IEnquiryService enquiryService;
	
	@PostMapping("/add")
	public String addEnquiry(@RequestBody Enquiry enquiry) {
		return enquiryService.addEnquiry(enquiry);
	}
	
	@GetMapping("/getall")
	public List<Enquiry> getAllEnquiries(){
		return enquiryService.getAllEnquiries();
	}
	
	@DeleteMapping("/delete/{Id}")
	public boolean deleteById(@PathVariable Integer Id) {
		return enquiryService.deleteById(Id);
	}
	
}

package com.app.entities;

import javax.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Enquiry extends BaseEntity{
	
	private String name;
	private String email;
	private String message;
	private long mobileNo;
	
}

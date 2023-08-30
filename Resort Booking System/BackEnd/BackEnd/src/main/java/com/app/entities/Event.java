package com.app.entities;

import java.time.LocalDate;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name="event_booking")
public class Event extends BaseEntity {
	
	@Column(name="evenet_name")
	private String eventName;
	@Column(name="evenet_date")
	private LocalDate eventDate;
	@Column(name="no_of_eventdays")
	private int noOfDays;
	@Column(name="no_of_Guests")
	private int noOfGuests;
	@Column(name="dummy_id")
	private int dummyId;
	private double price;
	@OneToOne
	@JoinColumn(name="user_regno")
	private User regNo;
	@JoinColumn(name = "invoice_no")
	private double invoiceNo;
	
}

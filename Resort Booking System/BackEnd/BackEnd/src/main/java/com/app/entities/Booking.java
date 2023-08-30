package com.app.entities;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonProperty;

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
@Table(name = "bookings_tbl")
public class Booking extends BaseEntity {
	@Column(length = 2, name = "room_count")
	private int roomCount;
//	 @Column(length = 20,name="nationality")
//	 private String nationality; 
	@Column(name = "booking_date")
	@DateTimeFormat(pattern = "")
	private LocalDate bookingDate;
	@Column(name = "in_date")
	@DateTimeFormat
	private LocalDate inDate;
	@Column(name = "out_date")
	@DateTimeFormat
	private LocalDate outDate;
	@OneToOne
	@JoinColumn(name = "user_regno", nullable = false)
	private User regNo;
	@Enumerated(EnumType.STRING)
	private RoomType roomtype;
	private double price;
	@Column(name = "dummy")
	private int dummy;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "room_category_id")
	private RoomCategory roomCategoryNo;
	@JoinColumn(name = "invoice_no")
	private double invoiceNo;
	
	public Booking(Integer Id) {
		this.Id = Id;
	}

//	@JsonProperty("room_category_id")
//	private void unpackNested(RoomType room_category_id) {
//	    this.roomCategory = new RoomCategory();
//	    roomCategory.setRoomtype(room_category_id);
//	}
//	

}

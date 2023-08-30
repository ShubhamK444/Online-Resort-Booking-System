package com.app.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="room_category")
public class RoomCategory extends BaseEntity {

	@Enumerated(EnumType.STRING)
	@Column(name="room_type")
	private RoomType roomtype;
	
	public boolean isAvailable;
	
//	@Column(name="room_count",nullable = false)
//	private int RoomCount ;
	
	@Column(nullable = false,name = "room_cost")
	private double cost ; 
	@OneToMany(fetch = FetchType.EAGER)
	@Cascade(CascadeType.ALL)
	@JoinColumn(name="category_id")
	private List <RoomImage> rList; 
	
	@Column(name="room_desc",length=250)
	private String roomDescription;
	
	public RoomCategory(RoomType roomtype,double cost){
		this.roomtype=roomtype;
		this.cost=cost;
	}
	public RoomCategory(RoomType roomtype){
		this.roomtype=roomtype;
	}
	
//	public void reduceRoomCount() {
//		if(RoomCount !=0)
//			RoomCount -= RoomCount;
//	}
	
}

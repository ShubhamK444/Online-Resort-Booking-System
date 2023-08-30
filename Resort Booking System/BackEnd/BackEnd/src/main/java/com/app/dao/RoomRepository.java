package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.entities.RoomCategory;
import com.app.entities.RoomType;


public interface RoomRepository extends JpaRepository< RoomCategory, Integer> {

	@Query("select RI.imagePath From  RoomImage RI   Join RoomCategory RC on RI.Id=RC.Id where RI.Id=:cid")
	String findByImageId(@Param("cid") Integer cid);
	
	RoomCategory findRoomCategoryByRoomtype(RoomType roomtype);
	
}

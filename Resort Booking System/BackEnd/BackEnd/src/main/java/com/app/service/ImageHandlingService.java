//package com.app.service;
//
//import java.io.File;
//import java.io.IOException;
//import java.nio.file.Files;
//import java.nio.file.Paths;
//import java.util.ArrayList;
//import java.util.List;
//
//import javax.annotation.PostConstruct;
//import javax.transaction.Transactional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Service;
//
//import com.app.dao.RoomRepository;
//
//import lombok.extern.slf4j.Slf4j;
//
//@Service
//@Transactional
//@Slf4j
//public class ImageHandlingService {
//
//	@Autowired
//	RoomRepository roomRepository;
//		
//	@Value("${file.upload.carousel}")
//	private String slideImages;
//	
//	@PostConstruct
//	public void anyInit() {
//		log.info("in init {} ", slideImages);
//		// create "images" folder : if one does not exist!
//		File dir = new File(slideImages);
//		if (!dir.exists())
//			log.info("dir created {} ", dir.mkdirs());
//		else
//			log.info("dir alrdy exists.... ");
//	}
//	
//	
//	public byte[] getImageById(Integer id) throws IOException {
//		String path=roomRepository.findByImageId(id);
//		if(path!=null) {
//			return Files.readAllBytes(Paths.get(path));
//		}
//		return null;
//	
//	}
//
//	public byte[] getCarouselImage(int imageid) throws IOException {	
////		return Files.readAllBytes(Paths.get("slideImages"+File.separator+"hotel"+imageid+".jpg"));	
//		return Files.readAllBytes(Paths.get("sample"+File.separator+"room"+imageid+".jpg"));
//	}
//}

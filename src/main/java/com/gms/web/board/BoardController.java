package com.gms.web.board;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class BoardController {
	private static final Logger logger = LoggerFactory.getLogger(BoardController.class);	
	@RequestMapping("/get/{cate}/list")
	public @ResponseBody Map<?,?> boardList(@PathVariable("cate") String category) {
		logger.info("boardList {}","진입");
		Map<String,String> map = new HashMap<>();
		System.out.println("board/list에 들어왔엉!!");
		switch(category) {
		case "board" : 
			map.put("msg", "게시판" +"리스트");
			break;
		case "grade" :
			map.put("msg", "성적" +"리스트");
			break;
		}
		return map;
	}
	
}

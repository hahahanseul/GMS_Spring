package com.gms.web.board;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/board")
public class BoardController {
	private static final Logger logger = LoggerFactory.getLogger(BoardController.class);	
	@RequestMapping("/add")
	public String addBoard(Model model) {
		logger.info("{}","BoardController >addBoard");
		return "auth:board/board_write.tiles";
	}
	@RequestMapping("/list")
	public String showBoard(Model model) {
		logger.info("{}","MemberController > showBoard");
		return "auth:board/board_list.tiles";
	}
	@RequestMapping("/detail")
	public String detailBoard(Model model) {
		logger.info("{}","BoardController > detailBoard");
		return "auth:board/board_detail.tiles";
	}
	@RequestMapping("/update")
	public String updateBoard(Model model) {
		logger.info("{}","BoardController > updateBoard");
		return "auth:board/board_update.tiles";
	}
}

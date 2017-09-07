package com.gms.web.member;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/member")
public class MemberController {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);	
	@RequestMapping("/add")
	public String addMember(Model model) {
		logger.info("{}","MemberController >addMember");
		return "auth:member/member_add.tiles";
	}
	@RequestMapping("/list")
	public String showMembers(Model model) {
		logger.info("{}","MemberController > showMembers");
		return "auth:member/member_list.tiles";
	}
	@RequestMapping("/search")
	public String searchMember(Model model) {
		logger.info("{}","MemberController > searchMember");
		return "auth:member/member_search.tiles";
	}
}

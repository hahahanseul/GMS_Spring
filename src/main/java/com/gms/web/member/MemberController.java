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
		return "member/member_add";
	}
	@RequestMapping("/list")
	public String showMembers(Model model) {
		logger.info("{}","MemberController > showMembers");
		return "member/member_list";
	}
	@RequestMapping("/search")
	public String searchMember(Model model) {
		logger.info("{}","MemberController > searchMember");
		return "member/member_search";
	}
}

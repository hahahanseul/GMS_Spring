package com.gms.web.grade;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/grade")
public class GradeController {
	private static final Logger logger = LoggerFactory.getLogger(GradeController.class);	
	@RequestMapping("/add")
	public String addGrade(Model model) {
		logger.info("{}","GradeController >addGrade");
		return "grade/grade_add";
	}
	@RequestMapping("/list")
	public String showGrade(Model model) {
		logger.info("{}","GradeController > showGrade");
		return "grade/grade_list";
	}
	@RequestMapping("/detail")
	public String detailGrade(Model model) {
		logger.info("{}","GradeController > detailGrade");
		return "grade/grade_detail";
	}
	@RequestMapping("/update")
	public String updateGrade(Model model) {
		logger.info("{}","GradeController > updateGrade");
		return "grade/grade_update";
	}
}

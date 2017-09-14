package com.gms.web.member;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.command.CommandDTO;
import com.gms.web.grade.MajorDTO;
import com.gms.web.grade.SubjectDTO;
import com.gms.web.proxy.PageProxy;

@Controller
@SessionAttributes("student")
@RequestMapping({"/member","/student"})
public class MemberController {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);	
	@Autowired MemberService service;
	@Autowired CommandDTO cmd;
	@Autowired StudentDTO student;
	@Autowired PageProxy pxy;
	@Autowired MemberDTO member;
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public String addStudent(@ModelAttribute MemberDTO member, @RequestParam("subject") List<String> list) {
		logger.info("등록 id :  " +   member.getId()  );
		logger.info("등록 name :  " +   member.getName()  );
		logger.info("등록 pw :  " +    member.getPw() );
		System.out.println("등록과목 : " + list);
		logger.info("등록과목 : " +    list);
		Map<String, Object> paramMap = new HashMap<>();
		paramMap.put("member", member);
		List<MajorDTO> paramList = new ArrayList<>();
		MajorDTO major = null;
		for(String m : list) {
			major=new MajorDTO();
			major.setId(member.getId());
			major.setSubjId(m);
			major.setTitle(m);
			paramList.add(major);
		} 
		paramMap.put("list", paramList);
		service.addMember(paramMap);
		return "redirect:/member/list/1";
	}
	@RequestMapping("/list/{pageNumber}")
	public String list(@PathVariable int pageNumber,Model model) {
		logger.info("member_list{}","진입");
		pxy.setPageSize(5);
		pxy.setBlockSize(5);
		pxy.setPageNumber(pageNumber);
		int count = Integer.parseInt(service.countMembers());
		pxy.setTheNumberOfRows(count);
		int[] result = new int[6];
		int theNumberOfPages=0, startPage=0, endPage=0;
		theNumberOfPages =(pxy.getTheNumberOfRows() % pxy.getPageSize()) == 0 ?
				pxy.getTheNumberOfRows() / pxy.getPageSize() : pxy.getTheNumberOfRows() / pxy.getPageSize() +1;
		startPage = pxy.getPageNumber() -((pxy.getPageNumber()-1)%pxy.getBlockSize());
		endPage = (startPage + pxy.getBlockSize() - 1 <=theNumberOfPages )? startPage + pxy.getBlockSize() -1 : theNumberOfPages;
		result[0] = pxy.getPageNumber();
		result[1] = theNumberOfPages;
		result[2] = startPage;
		result[3] = endPage;
		result[4] = (startPage - (theNumberOfPages / pxy.getBlockSize())>0)?1:0;
		result[5] = startPage + pxy.getBlockSize();
		logger.info("pageNumber      " + String.valueOf(pxy.getPageNumber()));
		logger.info("TheNumberOfRows   " + String.valueOf(pxy.getTheNumberOfRows()));
		logger.info("getPageSize   " + String.valueOf(pxy.getPageSize()));
		logger.info("pxy.getTheNumberOfRows() /pxy.getPageSize()+1   " + String.valueOf(pxy.getTheNumberOfRows() /pxy.getPageSize()+1));
		if(pxy.getPageNumber()<=pxy.getTheNumberOfRows() /pxy.getPageSize()+1) {
			if(pxy.getPageNumber() == 1) {
				cmd.setStartRow("1");
				cmd.setEndRow(String.valueOf(pxy.getPageSize()));
			}else {
				cmd.setStartRow(
						String.valueOf(
								(pxy.getPageNumber() -1) * pxy.getPageSize() +1));
				cmd.setEndRow(String.valueOf(pxy.getPageNumber() * pxy.getPageSize()));
			}
		} 
		System.out.println("StartRow::: " + cmd.getStartRow());
		System.out.println("EndRow::: " + cmd.getEndRow());
		@SuppressWarnings("unchecked")
		List<StudentDTO> list = (List<StudentDTO>) service.list(cmd);
		pxy.execute(model, result, list);
		model.addAttribute("count", count);
		return "auth:member/member_list.tiles";
	}
	@RequestMapping("/search/{id}")
	public String search(@PathVariable String id, Model model) {
		return null;
	}
	@RequestMapping("/detail/{id}")
	public String detail(@PathVariable String id, Model model) {
		logger.info("MemberController > detail에 들어왔어요");
		cmd.setSearch(id);
		model.addAttribute("student", service.findById(cmd));
		return "auth:member/member_detail.tiles";
	}
	@RequestMapping("/delete/{id}")
	public String delete(@PathVariable String id, Model model) {
		logger.info("MemberController > delete에 들어왔어요");
		cmd.setSearch(id);
		service.remove(cmd);
		return "redirect:/member/list/1";
	}
	@RequestMapping("/update")
	public String updateStudent(@ModelAttribute MemberDTO member) {
		logger.info("member update 진입했");
		//if() {}else {}
		
		service.modify(member);
		return "redirect:/member/detail/" + member.getId() ;
	}
}

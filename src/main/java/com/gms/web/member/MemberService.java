package com.gms.web.member;

import java.util.List;
import com.gms.web.command.CommandDTO;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudentDTO;

@Component
public interface MemberService {
	public String addMember(Map<String, Object> map);
	public List<?> list(CommandDTO cmd);
	public List<?> findByName(CommandDTO cmd);
	public StudentDTO findById(CommandDTO cmd);
	public String countMembers(CommandDTO cmd);
	public String modify(MemberDTO member);
	public String remove(CommandDTO cmd);
	public Map<String,Object> login(MemberDTO member);
	//MemberBean[] list=new MemberBean[4];
}

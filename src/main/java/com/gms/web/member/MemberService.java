package com.gms.web.member;

import java.util.List;

import com.gms.web.command.Command;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudentDTO;

@Component
public interface MemberService {
	public int addMember(Map<?, ?> map);
	public List<?> list(Command cmd);
	public List<?> findByName(Command cmd);
	public StudentDTO findById(Command cmd);
	public String countMembers();
	public int modify(MemberDTO member);
	public int remove(Command cmd);
	public Map<String,Object> login(Command cmd);
}

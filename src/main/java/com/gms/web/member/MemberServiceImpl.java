package com.gms.web.member;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.gms.web.command.CommandDTO;
import com.gms.web.grade.MajorDTO;
@Service
public class MemberServiceImpl implements MemberService {
	public static MemberServiceImpl getInstance() {
		return new MemberServiceImpl();
		}
	private MemberServiceImpl() {}
	@Override
	public String addMember(Map<String, Object> map) {
		System.out.println("Member Service 진입");
		MemberDTO m = (MemberDTO)map.get("member");
		System.out.println("넘어온 회원의 이름:" + m.toString());
		@SuppressWarnings("unchecked")
		List<MajorDTO> list = (List<MajorDTO>)map.get("major");
		System.out.println("넘어온 수강과목:" + list);
		return null;
	}
	@Override
	public List<?> list(CommandDTO cmd) {
		return null;
	}
	@Override
	public String countMembers(CommandDTO cmd) {
		return null;
	}
	@Override
	public List<?> findByName(CommandDTO cmd) {
		return null;
	}
	@Override
	public StudentDTO findById(CommandDTO cmd) {
		return null;
	}

	@Override
	public String modify(MemberDTO param) {
		String msg="";
		return msg;	
	}
	@Override
	public String remove(CommandDTO cmd) {
		String msg="";
		return msg;
		
	}
	@Override
	public Map<String,Object> login(MemberDTO member) {
		return null;
	}
}
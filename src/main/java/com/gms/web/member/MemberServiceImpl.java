package com.gms.web.member;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gms.web.command.CommandDTO;
import com.gms.web.grade.MajorDTO;
import com.gms.web.mapper.MemberMapper;
@Service
public class MemberServiceImpl implements MemberService {
	private static final Logger logger = LoggerFactory.getLogger(MemberServiceImpl.class);	
	@Autowired MemberMapper mapper;
	@Autowired MemberDTO member;
	@Autowired CommandDTO cmd;
	@Autowired StudentDTO student;
	@Override
	public int addMember(Map<String, Object> map) {
		int result=0;
		System.out.println("Member Service 진입");
		MemberDTO m = (MemberDTO)map.get("member");
		System.out.println("넘어온 회원의 이름:" + m.toString());
		@SuppressWarnings("unchecked")
		List<MajorDTO> list = (List<MajorDTO>)map.get("major");
		System.out.println("넘어온 수강과목:" + list);
		return result;
	}
	@SuppressWarnings("unchecked")
	@Override
	public List<StudentDTO> list(CommandDTO cmd) {
		return (List<StudentDTO>) mapper.selectAll(cmd);
	}
	@Override
	public String countMembers() {
		logger.info("count is {}","entered");
		String count = mapper.countMembers();
		logger.info("count is {}",count);
		return count;
	}
	@Override
	public List<?> findByName(CommandDTO cmd) {
		return null;
	}
	@Override
	public StudentDTO findById(CommandDTO cmd) {
		student = mapper.selectById(cmd);
		return student;
	}

	@Override
	public int modify(MemberDTO param) {
		return mapper.update(param);	
	}
	@Override
	public int remove(CommandDTO cmd) {
		return mapper.delete(cmd);
	}
	@Override
	public Map<String,Object> login(CommandDTO cmd) {
		Map<String, Object> map = new HashMap<>();
		member = mapper.login(cmd);
		String page, message = "";
		if(member!=null) {
			if(cmd.getColumn().equals(member.getPw())) {
				message = "success";
				page="auth:common/main.tiles";
			}else {
				message = "비밀번호가 틀립니다";
				page = "public:common/login.tiles";
			}
		}else {
			message="ID가 존재하지 않습니다";
			page = "public:common/join.tiles";
		}
		map.put("message", message);
		map.put("page", page);
		map.put("user", member);
		
		return map;
	}
}
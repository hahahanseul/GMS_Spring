package com.gms.web.member;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.gms.web.command.CommandDTO;
@Repository
public interface MemberDAO {
	public String insert(Map<String, Object> map);
	public List<?> selectAll(CommandDTO cmd);
	public String countMembers(CommandDTO cmd);
	public StudentDTO selectById(CommandDTO cmd);
	public List<?> selectByName(CommandDTO cmd);
	public String update(MemberDTO bean);
	public String delete(CommandDTO cmd);
	public MemberDTO login(CommandDTO cmd);
	//MemberBean[] list=new MemberBean[4];
}

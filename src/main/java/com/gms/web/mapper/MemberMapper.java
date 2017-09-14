package com.gms.web.mapper;

import java.util.List;
import org.springframework.stereotype.Repository;

import com.gms.web.command.CommandDTO;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudentDTO;
@Repository
public interface MemberMapper {
	public int insert(MemberDTO member);
	public List<?> selectAll(CommandDTO cmd);
	public String countMembers();
	public StudentDTO selectById(CommandDTO cmd);
	public List<?> selectByName(CommandDTO cmd);
	public int update(MemberDTO bean);
	public int delete(CommandDTO cmd);
	public MemberDTO login(CommandDTO cmd);
	//MemberBean[] list=new MemberBean[4];
}

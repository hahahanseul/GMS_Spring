package com.gms.web.member;
import java.io.Serializable;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;


@Data @Lazy @Component
public class MemberDTO implements Serializable{
	private static final long serialVersionUID=1L;
	private String id, pw, name,ssn, regdate,birthday,gender,email,phone,major,profile; 

}
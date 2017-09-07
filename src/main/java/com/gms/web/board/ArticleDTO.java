package com.gms.web.board;

import java.io.Serializable;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Lazy @Component
public class ArticleDTO implements Serializable {
	private static final long serialVersionUID=1L;
	private String id, title, content, regdate;
	private int articleSeq, hitcount;
	
	
	

}

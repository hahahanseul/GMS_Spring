package com.gms.web.board;

import java.io.Serializable;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Lazy @Component
public class Article implements Serializable {
	private static final long serialVersionUID=1L;
	private String id, title, content, regdate;
	private int articleSeq, hitcount;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getRegdate() {
		return regdate;
	}
	public void setRegdate(String regdate) {
		this.regdate = regdate;
	}
	public int getArticleSeq() {
		return articleSeq;
	}
	public void setArticleSeq(int articleSeq) {
		this.articleSeq = articleSeq;
	}
	public int getHitcount() {
		return hitcount;
	}
	public void setHitcount(int hitcount) {
		this.hitcount = hitcount;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	
	
	

}

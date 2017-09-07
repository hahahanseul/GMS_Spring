package com.gms.web.command;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.gms.web.constant.*;
import lombok.Data;


@Data @Lazy @Component
public class CommandDTO implements Commandable{
	protected String action,pageNumber,view, column, search, dir, page ,startRow, endRow;
	public void setPageNumber(String pageNumber) {
		this.pageNumber=(pageNumber==null)?
				"1": pageNumber;
		System.out.println("페이지번호 ::   " + pageNumber);
	}
	public void setAction(String action) {
		this.action=(action==null)?
				"move": action;
		System.out.println("액션 ::   " + action);
	}
	public void setColumn(String column) {
		this.column = (column==null)?
				"none": column;
		System.out.println("컬럼 ::   " +this.column);
	}
	public void setSearch(String search) {
		this.search = (search==null)?
				"none": search;
		System.out.println("검색어 ::   " +this.search);
	}
	@Override
	public void process() {
		this.view=
				(dir.equals("home"))?
						"/WEB-INF/view/common/home.jsp":
				Path.VIEW+dir+Path.SEPARATOR+page+Extension.JSP;
	}
	@Override
	public String toString() {
		return "Command [DEST=" + dir +"/"+page+ ".jsp" +",ACTION=" +action+ ", page="+ "]";
	}
}

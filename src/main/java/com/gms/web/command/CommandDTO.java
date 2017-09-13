package com.gms.web.command;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.gms.web.constant.*;
import com.gms.web.member.MemberDTO;

 @Lazy @Component
public class CommandDTO implements Commandable{
	protected String action,pageNumber,view, column, search, dir, page ,startRow, endRow;
	protected MemberDTO member;
	public void setEndRow(String endRow) {
		this.endRow = endRow;
	}
	public void setPage(String page) {
		this.page = page;
	}
	public String getStartRow() {
		return startRow;
	}
	public void setStartRow(String startRow) {
		this.startRow = startRow;
	}
	public String getAction() {
		return action;
	}
	public String getPageNumber() {
		return pageNumber;
	}
	public String getView() {
		return view;
	}
	public String getColumn() {
		return column;
	}
	public String getSearch() {
		return search;
	}
	public String getDir() {
		return dir;
	}
	public String getPage() {
		return page;
	}
	public String getEndRow() {
		return endRow;
	}
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
		System.out.println("commandDTO검색어 ::   " +this.search);
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

package com.gms.web.proxy;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import org.springframework.ui.Model;


@Component @Lazy
public class PageProxy {
	private int pageSize, blockSize, theNumberOfRows, pageNumber;
	public int getPageSize() {
		return pageSize;
	}
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	public int getBlockSize() {
		return blockSize;
	}
	public void setBlockSize(int blockSize) {
		this.blockSize = blockSize;
	}
	public int getTheNumberOfRows() {
		return theNumberOfRows;
	}
	public void setTheNumberOfRows(int theNumberOfRows) {
		this.theNumberOfRows = theNumberOfRows;
	}
	public int getPageNumber() {
		return pageNumber;
	}
	public void setPageNumber(int pageNumber) {
		this.pageNumber = pageNumber;
	}
	public void execute(Model model,int[] arr, List<?> list) {
		 model.addAttribute("pageNumber",arr[0]);
		 model.addAttribute("theNumberOfPages", arr[1]);
		 model.addAttribute("startPage",arr[2]);
		 model.addAttribute("endPage", arr[3]);
		 model.addAttribute("prevBlock", arr[4]);
		 model.addAttribute("nextBlock", arr[5]);
		 model.addAttribute("list", list);
	}
}

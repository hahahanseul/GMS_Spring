package com.gms.web.proxy;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.gms.web.member.StudentDTO;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
@Component @Data @Lazy
public class PageProxy extends Proxy {
	protected int pageSize, blockSize, theNumberOfRows, pageNumber;
	public PageProxy(HttpServletRequest request) {
		super(request);
	}
	public void execute(int[] arr, List<?> list) {
		 request.setAttribute("pageNumber",arr[0]);
		 request.setAttribute("theNumberOfPages", arr[1]);
		 request.setAttribute("startPage",arr[2]);
		 request.setAttribute("endPage", arr[3]);
		 request.setAttribute("prevBlock", arr[4]);
		 request.setAttribute("nextBlock", arr[5]);
		 request.setAttribute("list", list);
	}
}

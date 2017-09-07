package com.gms.web.command;



public class ListCommand extends CommandDTO {
	public ListCommand(String dir, String action, String page, String pageNumber) {
		//setDir(dir);
		setAction(action);
		//setPage(page);
		setPageNumber(pageNumber);
		process();
	}
}

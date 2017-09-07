package com.gms.web.command;


public class MoveCommand extends CommandDTO {
	public MoveCommand(String dir, String action, String page) {
		super.dir=dir;
		super.action=action;
		super.page=page;
		super.process();
	}
}

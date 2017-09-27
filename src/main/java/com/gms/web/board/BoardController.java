package com.gms.web.board;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.command.Command;
import com.gms.web.command.ResultMap;
import com.gms.web.mapper.BoardMapper;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.service.IGetService;
import com.gms.web.service.IListService;
import com.gms.web.service.IPutService;


@RestController
public class BoardController {
	private static final Logger logger = LoggerFactory.getLogger(BoardController.class);	
	@Autowired BoardMapper boardMapper;
	@Autowired GradeMapper gradeMapper;
	@Autowired Command cmd;
	public @ResponseBody Map<?,?> post(){ return null;}
	@RequestMapping("/get/{cate}/list")
	public @ResponseBody Map<?,?> boardList(@PathVariable("cate") String category) {
		logger.info("boardList {}","진입");
		Map<String,Object> map = new HashMap<>();
		IListService listService = null;
		IGetService countService = null;
		switch(category) {
		case "board" : 
			listService =(x)->{
					return boardMapper.selectList(cmd);
			};
			countService = (x)->{
				return boardMapper.count(cmd);
			};
			ResultMap r = (ResultMap) countService.execute(cmd);
			map.put("result", "success");
			map.put("total", r);
			map.put("list", listService.execute(cmd));
			break;
		case "grade" :
			listService =(x)->{
					return gradeMapper.selectSome(cmd);
			};
			map.put("list", listService.execute(cmd));
			break;
		}
		return map;
	}
	@RequestMapping("/get/{cate}/{seq}")
	public @ResponseBody Map<?,?> get(@PathVariable("cate") String category, @PathVariable("seq") String seq){ 
		logger.info("getSequence {}","진입");
		System.out.println("컨트롤러 넘어온 값"  + seq);
		Map<String, Object> map = new HashMap<>();
		cmd.setColumn("article_seq");
		cmd.setSearch(seq);
		System.out.println("커맨드에 들어간거 맞음??   "  +cmd.getSearch());
		IGetService getService = null;
		getService=(x)->{
			return boardMapper.selectOne(cmd);
		};
		map.put("article",getService.execute(cmd) );
		return map;
		}
	public @ResponseBody Map<?,?> list(){ return null;}
	
	@RequestMapping(value="/put/articles", method=RequestMethod.POST,consumes="application/json")
	public @ResponseBody Map<?,?> put(@RequestBody Article art){
		logger.info("컨트롤러put {}","진입");
		IPutService updateService = null;
		updateService=(x)->{
			boardMapper.update(cmd);
		};
		Map<String, Object> map = new HashMap<>();
		map.put("msg", art.getTitle());
		return map;
	}
	public @ResponseBody Map<?,?> delete(){ return null;}
	
}

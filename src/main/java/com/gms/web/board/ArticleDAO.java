package com.gms.web.board;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.gms.web.board.ArticleDTO;

@Repository
public interface ArticleDAO {
	public String insert(ArticleDTO bean);
	public String count();
	public List<ArticleDTO> selectAll();
	public List<ArticleDTO> selectById(String id);
	public ArticleDTO selectBySeq(int seq);
	public String update(ArticleDTO bean);
	public String delete(int seq);	
}

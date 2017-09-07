package com.gms.web.constant;

import org.springframework.stereotype.Component;

@Component
public class SQL {
	public static final String MEMBER_INSERT = String.format("INSERT INTO %s(%s,%s,%s,%s,%s,%s,%s,%s) VALUES(?,?,?,?,?,?,?,NOW())",DB.TABLE_MEMBER,DB.MEMBER_ID,DB.MEMBER_NAME,DB.MEMBER_PASS,DB.MEMBER_SSN,DB.PHONE,DB.EMAIL,DB.PROFILE,DB.MEMBER_REGDATE);
	public static final String MEMBER_LIST = String.format("SELECT * FROM %s",DB.TABLE_MEMBER);
	public static final String MEMBER_FINDBYNAME = String.format("SELECT * FROM %s WHERE %s= ?",DB.TABLE_MEMBER,DB.MEMBER_NAME);
	public static final String MEMBER_FINDBYID = String.format("SELECT * FROM %s WHERE %s= ?",DB.TABLE_MEMBER,DB.MEMBER_ID);
	public static final String MEMBER_COUNT = String.format("SELECT COUNT(*) AS %s FROM %s","count",DB.TABLE_MEMBER);
	public static final String MEMBER_UPDATE = String.format("UPDATE %s SET %s= ? WHERE %s = ?",DB.TABLE_MEMBER,DB.MEMBER_PASS,DB.MEMBER_ID);
	public static final String MEMBER_DELETE = String.format("DELETE FROM %s WHERE %s =?",DB.TABLE_MEMBER,DB.MEMBER_ID);
	public static final String BOARD_INSERT = String.format("INSERT INTO %s(%s,%s,%s,%s,%s,%s) VALUES (article_seq.nextval,?,?,?,0,SYSDATE)",DB.TABLE_BOARD,DB.BOARD_SEQ,DB.MEMBER_ID,DB.TITLE,DB.BOARD_CONTENT,DB.BOARD_HITCNT,DB.BOARD_REGDATE);
	public static final String BOARD_LIST = String.format("SELECT * FROM %s",DB.TABLE_BOARD);
	public static final String BOARD_FINDBYID = String.format("SELECT * FROM %s WHERE %s= ?",DB.TABLE_BOARD,DB.BOARD_ID);
	public static final String BOARD_FINDBYSEQ = String.format("SELECT * FROM %s WHERE %s= ?",DB.TABLE_BOARD,DB.BOARD_SEQ);
	public static final String BOARD_COUNT = String.format("SELECT COUNT(*) AS %s FROM %s","count",DB.TABLE_BOARD);
	public static final String BOARD_UPDATE = String.format("UPDATE %s SET %s= ?, %s=? WHERE %s = ?",DB.TABLE_BOARD,DB.TITLE,DB.BOARD_CONTENT,DB.BOARD_SEQ);
	public static final String BOARD_DELETE = String.format("DELETE FROM %s WHERE %s =?",DB.TABLE_BOARD,DB.BOARD_SEQ);
	public static final String MAJOR_INSERT=String.format("INSERT INTO %s(%s,%s,%s,%s) VALUES(?,?,?,?)", DB.TABLE_MAJOR,DB.MAJOR_ID,DB.TITLE,DB.MEMBER_ID,DB.SUBJ_ID);
	public static final String STUDENT_LIST = " select * " +  
			" from (select @rnum := @rnum +1 as rownum, s.* " +
		    " from (select @rnum := 0) r, student s " +
	    	" )t " +
	    	" where rownum between ? and ? ";
			
/*			
			" SELECT t2.* "
			+" FROM (SELECT ROWNUM seq, t.* "
			+" FROM(SELECT * "
			+" FROM student " 
			+" ORDER BY num DESC) t)t2 "
			+" WHERE t2.seq BETWEEN ? AND ? ";*/
	public static final String STUDENT_FINDBYNAME = String.format("SELECT * FROM Student WHERE %s like ?", "name");
	/*		" SELECT t2.* "
	+" FROM (SELECT ROWNUM seq, t.* "
	+" FROM(SELECT * "
	+" FROM student " 
	+" WHERE name LIKE '%'|| ? || '%' "
	+" ORDER BY num DESC) t)t2 "
	+" WHERE t2.seq BETWEEN ? AND ? "; */
	public static final String STUDENT_COUNT = String.format("SELECT COUNT(*) AS count FROM %s WHERE %s like ?",DB.TABLE_STUDENT, "name");
	public static final String STUDENT_FINDBYID= (String.format("SELECT * FROM %s WHERE id like ?", DB.TABLE_STUDENT));
	
}

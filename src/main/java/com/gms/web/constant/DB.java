package com.gms.web.constant;

import org.springframework.stereotype.Component;

@Component
public class DB {
	public static final String ORACLE_DRIVER ="oracle.jdbc.driver.OracleDriver";
	public static final String ORACLE_URL ="jdbc:oracle:thin:@localhost:1521:xe";
	public static final String MYSQL_DRIVER ="";
	public static final String MYSQL_URL ="";
	public static final String MSSQL_DRIVER ="";
	public static final String MSSQL_URL ="";
   public static final String MARIADB_DRIVER="org.mariadb.jdbc.Driver";
   public static final String MARIADB_URL="jdbc:mariadb://localhost:3306/hanbitdb";
	public static final String DB2_DRIVER ="";
	public static final String DB2_URL ="";
	public static final String USERNAME ="hanbit";
	public static final String PASSWORD ="hanbit";
	public static final String TABLE_MEMBER="Member";
	public static final String TABLE_BOARD="Board";
	public static final String TABLE_MAJOR ="major";
	public static final String MEMBER_ID="member_id";
	public static final String MEMBER_NAME="name";
	public static final String MEMBER_PASS="pw";
	public static final String MEMBER_SSN="ssn";
	public static final String MEMBER_REGDATE="regdate";
	public static final String PHONE="phone";
	public static final String EMAIL="email";
	public static final String PROFILE="profile";
	public static final String BOARD_SEQ="article_seq";
	public static final String BOARD_ID="id";
	public static final String BOARD_CONTENT="content";
	public static final String BOARD_REGDATE="regdate";
	public static final String BOARD_HITCNT="hitcount";
	public static final String MAJOR_ID="major_id";
	public static final String TITLE="title";
	public static final String SUBJ_ID="subj_id";
	public static final String TABLE_STUDENT="Student";
	public static final String NUM="rownum";
	public static final String ID="id";
}

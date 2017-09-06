<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0" charset="UTF-8">
<title>로그인</title>
<link rel="stylesheet" href="${ctx}/resources/css/member.css" />
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>
<body>
<div id="wrapper">
	<header>
		<h1 id="title">중생아, 로그인에 실패하였느니라</h1>
		<a id="go_main" href="${ctx}/WEB-INF/common/index.jsp">메인으로 가기</a><br>
 		<a id="db_tester" href="${ctx}/jdbc_test.jsp">DB 연결테스트</a>
	</header>
	<hr/>
	<div id="container">
		<form id="login_form" action="${ctx}/common.do" method="GET">
			<img id="login_img" src="${ctx}/resources/img/img_main.jpg" alt="" />
			<span id="login_id">ID</span>
			<input type="text" name="id" value="hong"/><br />
			<span id="login_pass">PASSWORD</span>
			<input type="text"  name="pw" value="2"/><br>
			<div id="login_btn_box">
				<input id="login_btn" type="submit" value="LOGIN"></input>
				<input id="cancel_btn" type="reset" value="CANCEL"></input>
			</div>
			<input type="hidden" name="page" value="main"/>
			<input type="hidden" name="action" value="login"/>
		</form>
	</div>
<jsp:include page="../common/footer.jsp" />
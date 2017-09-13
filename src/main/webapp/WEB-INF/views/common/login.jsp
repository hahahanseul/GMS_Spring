<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
	<header>
		<h1 id="title">로그인</h1>
		<a id="go_main" href="${ctx}/WEB-INF/common/index.jsp">메인으로 가기</a><br>
 		<a id="db_tester" href="${ctx}/jdbc_test.jsp">DB 연결테스트</a>
	</header>
	<hr/>
	<div id="container">
		<form id="login_form" name="login_form">
			<img id="login_img" src="${img}/img_main.jpg" alt="" />
			<span id="login_id_txt">ID</span>
			<input type="text" id="login_id" name="id"/><br />
			<span id="login_pass">PASSWORD</span>
			<input type="text" id="login_pw" name="pass"/><br>
			<div id="login_btn_box">
				<input id="loginBtn" type="submit" value="LOGIN" />
				<input id="cancelBtn" type="reset" value="CANCEL" />
			</div>
			<input type="hidden" name="page" value="main"/>
			<input type="hidden" name="action" value="login"/>
		</form>
	</div>
	<div style="text-align: center; width:100%;height: 50px;"><h4 style="font-size: 20px; color:red;">${message}</h4></div>
</body>
<script>
app.auth.init();
</script>
</html>
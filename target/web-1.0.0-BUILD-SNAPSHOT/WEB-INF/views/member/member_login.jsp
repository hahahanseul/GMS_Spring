<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/common_head.jsp" />
<header>
	<jsp:include page="${ctx}/WEB-INF/view/common/navbar.jsp" />
	<div class="jumbotron text-center">
	<h1>Grade Management System</h1>
	</div>
</header>
	<div id="container" class="margin-auto" style="width:400px">
	<form action="">
	<fieldset>
	<legend>log-in information</legend>
	<img src="<%=request.getContextPath()%>/img/img.jpg" style="width:300px;height:400px;"alt="" /><br />
		<span id="login_id">ID</span>
		<input type="text" />
		<span id="login_pass">PASSWORD</span>
		<input type="password" /><br />
		<input id="login_btn" type="submit" value="로그인"></input>
		<input id="cancel_btn" type="submit" value="취소"></input>
	</fieldset>
	</form>
	</div>
<jsp:include page="../common/footer.jsp" />
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../member/member_head.jsp" />
	<header>
		<jsp:include page="navbar.jsp" />
		<div class="jumbotron text-center">
	<h1>Grade Management System</h1>
</div>
	</header>
	<div id="container">
		<div id="sub_title">회원 추가 </div>
		<form id="join_form" name="join_form">
			<fieldset>
			<legend>join information</legend>
			<span id="join_id_txt">ID</span>
			<input id="join_id" type="text" name="join_id" placeholder="아이디"/>
			<span id="join_name_txt">NAME</span>
			<input id="join_name" type="text" name="join_name" placeholder="이름"/>
			<span id="join_pw_txt">PASSWORD</span>
			<input id="join_pw" type="password" name="join_pw" placeholder="비밀번호" /><br />
			<span id="join_birth_txt">생년월일</span>
			<input id="join_birth" type="date" name="join_birth" placeholder="yyyy/mm/dd"/><br /><br>
	 		<input type="radio" name="gender" value="여성" checked> 여성
			<input type="radio" name="gender" value="남성"> 남성<br>
			<span id="join_email_txt">email</span><input id="join_email" type="email" name="join_email" />
			<span id="join_phone_txt">phone</span><input id="join_phone" type="text" name="join_phone" />
			<br>
			<h3>전공</h3>
			<select name="major">
				<option value="computer"selected>컴퓨터공학</option>
				<option value="economics">경제학</option>
				<option value="art">미술학</option>
				<option value="tourism" >관광학</option>
			</select><br>
			<h3>수강과목</h3>
			<input type="checkbox" name="subject" value="java" checked/>자바<br>
			<input type="checkbox" name="subject" value="c" checked/>C언어<br>
			<input type="checkbox" name="subject" value="html"/>HTML<br>
			<input type="checkbox" name="subject" value="css"/>CSS<br>
			<input type="checkbox" name="subject" value="javascript"/>자바스크립트<br>
			<input type="checkbox" name="subject" value="sql"/>SQL<br />
			<input type="checkbox" name="subject" value="python"/>파이썬 <br />
			<input id="join_yes_btn" type="submit" value="제출" onclick="joinAlert()"/>
			<input id="join_no_btn" type="reset" value="취소"/>
		</fieldset>
		</form>
	</div>
<script>
	function joinAlert(){
		var input_id=document.getElementById('join_id').value;
		var input_pass=document.getElementById('join_pw').value;
		var input_name=document.getElementById('join_name').value;
		
		if(input_id === ""){
			alert('ID구다사이');
			return false;
		}
		if(input_name === ""){
			alert('name구다사이');
			return false;
		}
		var form = document.getElementById('join_form');
		form.action="${ctx}/member.do";
		form.method="post";
		return true;
	}
</script>
<jsp:include page="../common/footer.jsp" />
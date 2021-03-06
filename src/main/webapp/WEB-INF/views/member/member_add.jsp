<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<header>
	<div class="jumbotron text-center">
	<h1>Grade Management System</h1>
	</div>
</header>
	<div id="container">
		<div id="sub_title">회원 추가 </div>
		<form id="join_form">
			<fieldset>
			<legend>join information</legend>
			<span id="join_id_txt">ID</span>
			<input id="id" type="text" name="id" placeholder="아이디"/>
			<span id="join_name_txt">NAME</span>
			<input id="name" type="text" name="name" placeholder="이름" value="이길동"/>
			<span id="join_pw_txt">PASSWORD</span>
			<input id="pw" type="password" name="pw" placeholder="비밀번호"  value="1"/><br />
			<span id="join_birth_txt">생년월일</span>
			<input id="birth" type="text" name="birth" value="2000.05.05"/><br /><br>
	 		<input type="radio" name="gender" value="여성" checked> 여성
			<input type="radio" name="gender" value="남성"> 남성<br>
			<span id="join_email_txt">email</span><input id="email" type="email" name="email" value="leegd@test.com"/>
			<span id="join_phone_txt">phone</span><input id="phone" type="text" name="phone" value="010-0000-0000" />
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
			<input id="join_yes_btn" type="submit" value="제출"/>
			<input id="join_no_btn" type="reset" value="취소"/>
			<input type="hidden" name="action" value="join"/>
			<input type="hidden" name="page" value="main"/>
		</fieldset>
		</form>
	</div>
<script>
app.member.init();
</script>

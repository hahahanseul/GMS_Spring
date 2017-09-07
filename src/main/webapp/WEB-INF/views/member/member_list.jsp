<%@page import="java.util.Set"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<header>
	<div class="jumbotron text-center">
	<h1>Grade Management System</h1>
	</div>
</header>
<div id="container">
<div class="row">
  <div class="col-lg-4" style="margin:0 400px 20px 400px;">
    <div class="input-group">
      <input id="search" name="search" type="text" class="form-control" placeholder="Search for...">
      <span class="input-group-btn">
        <button onclick="searchStudent()" class="btn btn-default" type="button">Search!</button>
      </span>
    </div><!-- /input-group -->
  </div>
</div><!-- /.row -->
	<table id="member_tab">
		<tr id="member_menu">
			<th>No.</th>
			<th>아이디</th>
			<th>이름</th>
			<th>생년월일</th>
			<th>전화번호</th>
			<th>이메일</th>
			<th>수강과목</th>
			<th>등록일</th>
			<th>수정/삭제</th> 
		</tr>
			<c:forEach var="i" items="${requestScope.list}">
			<tr id="member_menu">
				<td>${i.num}</td>
				<td>${i.id}</td>
				<td><a onclick="controller.detailStudent('${i.id}')">${i.name}</a></td>
				<td>${i.ssn}</td>
				<td>${i.phone}</td>
				<td>${i.email}</td>
				<td>${i.title}</td>
				<td>${i.regdate}</td>
				<td>
				<a onclick="updateStudent('${i.id}')">수정</a> / 
				<a onclick="deleteStudent('${i.id}')">삭제</a>
				</td> 
			</tr>	
			</c:forEach>
	</table>
	<nav aria-label="Page navigation" style="width:400px;margin:0 auto">
	  <ul class="pagination">
	  	<c:if test="${requestScope.prevBlock gt 0}">
	  	 <li><a onclick="list('member', 'member_list', '1')"  href="#"><span class="glyphicon glyphicon-step-backward"></span></a></li>
	   	 <li>
	      <a onclick="list('member', 'member_list', '${requestScope.prevBlock}')" href="#" aria-label="Previous">
	        <span aria-hidden="true">&laquo;</span>
	      </a>
	    </li>
	  	</c:if>
	    <c:forEach varStatus="i" begin="${requestScope.startPage}" end="${requestScope.endPage}" step="1" >
    	    <c:choose>
    	    	<c:when test="${i.index eq requestScope.pageNumber}">
    	    	 	<li class="active"><a href="#">${i.index}</a></li>
    	    	</c:when>
    	    	<c:otherwise>
    	    	 	<li><a onclick="list('member','member_list','${i.index}')" >${i.index}</a></li>
    	    	</c:otherwise>
    	    </c:choose>
	    </c:forEach>
      	<c:if test="${requestScope.nextBlock le requestScope.theNumberOfPages}">
	    <li>
	      <a onclick="list('member','member_list','${requestScope.endPage+1}')" aria-label="Next">
	        <span aria-hidden="true">&raquo;</span>
	      </a>
	    </li>
	     <li><a onclick="list('member','member_list','${requestScope.theNumberOfPages}')"><span class="glyphicon glyphicon-step-forward"></span></a></li>
	     </c:if>
	  </ul>
	</nav>
	</div>
<jsp:include page="../common/footer.jsp" />
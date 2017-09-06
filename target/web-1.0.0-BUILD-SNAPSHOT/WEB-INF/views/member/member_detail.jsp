<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/common_head.jsp" />
<header>
	<jsp:include page="../common/navbar.jsp" />
	<div class="jumbotron text-center">
	<h1>Grade Management System</h1>
	</div>
</header>
<div id="container">
 <div class="jumbotron">
            <div class="row">
                <div class="col-md-3 col-xs-12 col-sm-6 col-lg-3">
                  <div class="thumbnail text-center photo_view_postion_b" >
                    <img src="${img}/img_member1.jpg" alt="stack photo" class="img">
                  </div>
                </div>
                <div class="col-md-9 col-xs-12 col-sm-6 col-lg-9">
                    <div class="" style="border-bottom:1px solid black">
                      <span id="stu_name" style="font-size: 50px;">${requestScope.student.name}</span>
                      <input type="hidden" id="stu_id" value="${requestScope.student.id}">
                      <button id="updateBtn" onclick="moveTo('member','member_update')">정보수정</button>
                    </div>
                      <hr>
                    <div class="col-md-8">  
                    <ul class=" details">
                      <li><p id="stu_phone"><span class="glyphicon glyphicon-earphone one" style="width:50px;"></span>${requestScope.student.phone}</p></li>
                      <li><p id="stu_email"><span class="glyphicon glyphicon-envelope one" style="width:50px;"></span>${requestScope.student.email}</p></li>
                      <li><p id="stu_title"><span class="glyphicon glyphicon-map-marker one" style="width:50px;"></span>${requestScope.student.title}</p></li>
                      <li><p><span class="glyphicon glyphicon-credit-card one" style="width:50px;"></span>
                      
             		</p></li>
                    </ul>
                    </div>
                    <div class="col-md-4">  
                      <div class="col-sm-5 col-xs-6 tital " >Birthday:</div><div class="col-sm-7 col-xs-6 ">2018/2/15</div>
                      <div class="clearfix"></div><div class="bot-border"></div>
                      <div class="col-sm-5 col-xs-6 tital " >Gender:</div><div class="col-sm-7 col-xs-6 ">Prasad</div>
                      <div class="clearfix"></div><div class="bot-border"></div>
                      <div class="col-sm-5 col-xs-6 tital " >Ethnicity:</div><div class="col-sm-7 col-xs-6 ">sdfsdfsdfsdfsdf</div>
                      <div class="clearfix"></div><div class="bot-border"></div>
                    </div>
                </div>
              </div>
              <div class="row">
                <div class="form-group row">
                  <div class="col-md-12">
                  <div class="form-group" style="border-bottom:1px solid black">
                      <h2>CONTACT INFO</h2>
                  </div>
                  </div>
                </div>
              </div>
              <div class="row"> 
               <div class="col-md-4">
                  <div class="col-sm-6 col-xs-6 tital " >Height(feet):</div><div class="col-sm-6 col-xs-6 contant_i">Prasad</div>
                  <div class="clearfix"></div><div class="bot-border"></div>
                  <div class="col-sm-6 col-xs-6 tital " >Weight(lbs):</div><div class="col-sm-6 col-xs-6 contant_i">Prasad</div>
                  <div class="clearfix"></div><div class="bot-border"></div>
                  <div class="col-sm-6 col-xs-6 tital " >Hair Color:</div><div class="col-sm-6 col-xs-6 contant_i">Prasad</div>
                  <div class="clearfix"></div><div class="bot-border"></div>
                  <div class="col-sm-6 col-xs-6 tital " >Hair Length:</div><div class="col-sm-6 col-xs-6 contant_i">Prasad</div>
                  <div class="clearfix"></div><div class="bot-border"></div>
                  <div class="col-sm-6 col-xs-6 tital " >Suit/Dress:</div><div class="col-sm-6 col-xs-6 contant_i">Prasad</div>
                  <div class="clearfix"></div><div class="bot-border"></div>
               </div>
              </div>
          </div>
</div>
<script>
memberDetail.init();
</script>
<jsp:include page="../common/footer.jsp" />

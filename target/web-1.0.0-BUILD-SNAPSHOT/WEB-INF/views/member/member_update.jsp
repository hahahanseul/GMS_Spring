<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/common_head.jsp" />
<header>
	<jsp:include page="../common/navbar.jsp" />
	<div class="jumbotron text-center">
	<h1>Grade Management System</h1>
	</div>
</header>
		<div class="container" style="width:60%">
			<div class="row main">
				<div class="panel-heading">
	               <div class="panel-title text-center">
	               		<h1 id="update_id" class="title"></h1>
	               		<hr />
	               	</div>
	            </div> 
				<div class="main-login main-center">
					<form class="form-horizontal" method="post" action="#">
						<div class="form-group">
							<label for="name" class="cols-sm-2 control-label">Name</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
									<input id="name" name="name" type="text" class="form-control"/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="email" class="cols-sm-2 control-label">Email</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
									<input id="email" name="email" type="text" class="form-control"/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="username" class="cols-sm-2 control-label">Username</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
									<input id="phone" name="phone"type="text" class="form-control"/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="password" class="cols-sm-2 control-label">Password</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input id="password" name="password" type="password" class="form-control" data-toggle="popover" placeholder="Enter your Password"/>
								</div>
								<span id="passwordInfo" class="hide">
								    <ul>
								        <li>At least 6 characters.</li>
								        <li>Use of special Characters like, [@, $].</li>
								        <li>Use of uppercase [A – Z] and lowercase [a – z] letters.</li>
								        <li>Use of numbers [0 – 9].</li>
								    </ul>
								</span>
								<span id="result"></span>
							</div>
						</div>

						<div class="form-group">
							<label for="confirm" class="cols-sm-2 control-label">Confirm Password</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input id="confirm" name="confirm" type="password" class="form-control" placeholder="Confirm your Password"/>
								</div>
								<span id="confirmPass"></span>
							</div>
						</div>

						<div class="form-group ">
							<button id="confirmBtn" type="button" class="btn btn-primary btn-lg btn-block login-button">UPDATE</button>
						</div>
					</form>
				</div>
			</div>
		</div>
<script>
memberUpdate.init();
</script>		
<jsp:include page="../common/footer.jsp" />

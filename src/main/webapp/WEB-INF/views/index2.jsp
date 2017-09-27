<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">	
<head>
	<meta charset="UTF-8" />
	<title>GMS</title>
	<link rel="stylesheet" href="${path.css}/megabox.css" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
<header>
	<div id="navigation">
		<div id="nav-box">
			<div id="logo"style="background-image:url('${path.img}/megabox_logo.jpg')"></div>
			<div id="nav-menu" >
				<ul >
					<li>영화</li> 
					<li>큐레이션</li> 
					<li>영화관</li> 
					<li>특별관</li> 
					<li>스토어</li> 
					<li>이벤트</li> 
					<li>로그인</li> 
				</ul>
			</div>
		</div>
	</div>
</header>
<div id="content">
	<div id="main-top">
		<div class="paging-arrow paging-left">
			<i class="glyphicon glyphicon-menu-left"></i>
		</div>
		<div id="main-top-box">
			<div id="top-menu">
				<div id="all-menus"><i class="glyphicon glyphicon-menu-hamburger"></i>전체메뉴</div>
				<div class="top-menu-list society">
					<ul>
						<li>필름 소사이어티</li>
						<li>클래식 소사이어티</li>
					</ul>				
				</div>
				<div id="top-menu-right">
					<div class="top-menu-list membership">
					<ul>
						<li>고객센터</li>
						<li>멤버십</li>
						<li>VIP</li>
					</ul>				
					</div>
					<div class="top-menu-btn time-table">상영시간표</div>
					<div class="top-menu-btn quick-reservation">빠른예매<i class="fa fa-ticket" aria-hidden="true"></i></div>
				</div>
			</div>
			<div id="movie-intro">
				<div class="movie-title-wrap">
					<div class="kor-title">매트릭스</div>
					<div class="eng-title">The Matrix</div>
				</div>
				<div class="movie-desc-wrap">
					<div class="movie-desc">당신을 전율케한 '가상현실'의 '혁명'</div>
				</div>
			</div>
			<div class="paging">
				<ul>
					<li><i class="glyphicon glyphicon-heart"></i></li>
					<li><i class="glyphicon glyphicon-heart-empty"></i></li>
                    <li><i class="glyphicon glyphicon-heart-empty"></i></li>
                    <li><i class="glyphicon glyphicon-heart-empty"></i></li>
                    <li><i class="glyphicon glyphicon-heart-empty"></i></li>
                    <li><i class="glyphicon glyphicon-play-circle"></i></li>
				</ul>
         	</div>
		</div>
		<div class="paging-arrow paging-right">
			<i class="glyphicon glyphicon-menu-right"></i>
        </div>
	</div>
</div>
<script>
</script>
</body>
</html>
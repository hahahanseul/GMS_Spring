var introUI={
	login : i =>{
		return '<div id="content">'
		+ '<form id="login_form" name="login_form">'
		+ 	'<img id="login_img" src="'+img+'/img_main.jpg" alt="" /><br>'
		+ 	'<span id="login_id_txt">ID</span>'
		+ 	'<input type="text" id="login_id" name="id"/><br />'
		+ 	'<span id="login_pass">PASSWORD</span>'
		+ 	'<input type="text" id="login_pw" name="pass"/><br>'
		+ 	'<div id="login_btn_box">'
		+ 	'</div>'
		+ 	'<input type="hidden" name="page" value="main"/>'
		+ 	'<input type="hidden" name="action" value="login"/>'
		+ '</form>'
		+  '</div>';
	},
	navbar : ()=>{
		return 	'<nav class="navbar navbar-inverse">'
		+'		  <div class="container-fluid">'
		+'		    <div class="navbar-header">'
		+'		      <a class="navbar-brand" href="#">GMS</a>'
		+'		    </div>'
		+'		    <ul class="nav navbar-nav">'
		+'		      <li class="active"><a id="go-home"><span class="glyphicon +glyphicon-home"></span>&nbsp;Home</a></li>'
		+'		      <li class="dropdown">'
		+'		      	<a href="#" class="dropdown-toggle"'
		+'		      	data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">회원관리 <span +class="caret"></span></a>'
		+'			   	<ul id="nav_ul_stu" class="dropdown-menu">'
		+'		            <li><a>학생 추가</a></li>'
		+'		            <li><a>학생 목록</a></li>'
		+'		            <li><a>학생 조회</a></li>'
		+'		            <li></li>'
		+'		            <li><a>학생 삭제</a></li>'
		+'		         </ul>'
		+'		     </li>'
		+'		      <li class="dropdown">'
		+'		      	<a href="#" class="dropdown-toggle"'
		+'		      	data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">성적관리 <span +class="caret"></span></a>'
		+'		     	<ul id="nav_ul_grade" class="dropdown-menu">'
		+'		     		<li><a>성적 추가</a></li>'
		+'		            <li><a>성적 목록</a></li>'
		+'		            <li><a>성적 조회</a></li>'
		+'		            <li></li>'
		+'		            <li><a>성적 삭제</a></li>'
		+'		     	</ul> '
		+'		     </li>'
		+'		      <li class="dropdown">'
		+'		      	<a href="#" class="dropdown-toggle"'
		+'		      	data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">게시물관리 <span +class="caret"></span></a>'
		+'		     	<ul id="nav_ul_board" class="dropdown-menu">'
		+'			     	<li><a>게시판 추가</a></li>'
		+'		            <li><a>게시판 목록</a></li>'
		+'		            <li><a>게시판 조회</a></li>'
		+'		            <li></li>'
		+'		            <li><a>게시판 삭제</a></li>'
		+'		     	</ul> '
		+'		     </li>'
		+'		      <li class="dropdown">'
		+'		      	<a href="#" class="dropdown-toggle"'
		+'		      	data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">수 열 <span +class="caret"></span></a>'
		+'		     	<ul id="nav_ul_board" class="dropdown-menu">'
		+'			     	<li><a id="arithBtn">등차수열</a></li>'
		+'		            <li><a id="switchBtn">스위치수열</a></li>'
		+'		            <li><a id="geoBtn">등비수열</a></li>'
		+'		            <li><a id="facBtn">팩토리얼</a></li>'
		+'		            <li><a id="fiboBtn">피보나치</a></li>'
		+'		     	</ul>'
		+'		     </li>'
		+'			<li class="dropdown">'
		+'		      	<a href="#" class="dropdown-toggle"'
		+'		      	data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">배 열 <span +class="caret"></span></a>'
		+'		     	<ul id="nav_ul_board" class="dropdown-menu">'
		+'			     	<li><a id="selBtn">선택정렬</a></li>'
		+'		            <li><a id="bubbleBtn">버블정렬</a></li>'
		+'		            <li><a id="insertBtn">삽입정렬</a></li>'
		+'		            <li><a id="rankBtn">석차구하기</a></li>'
		+'		            <li><a id="binSearchBtn">이분검색</a></li>'
		+'		            <li><a id="mergeBtn">병합</a></li>'
		+'		            <li><a id="stackBtn">스택</a></li>'
		+'		     	</ul>'
		+'		     </li>'
		+'		    </ul>'
		+'		    <span class="login-member">${user.name}&nbsp;<a id="logout")+>로그아웃</a></span>'
		+'		  </div>'
		+'		</nav>'
	}
};

var compUI={
		br    :()=>{return $('<br/>');},
		div   : x=>{return $('<div/>',{id:x});},
		h1    : x=>{return $('<h1/>',{id:x});},
		span  : x=>{return $('<span/>',{id:x});},
		iTxt  : x=>{return $('<input/>',{id:x,type:'text'});},
		aBtn  : x=>{return $('<a/>',{href:'#', role: 'button', id:x});},
		iBtn  : x=>{return $('<input/>',{id:x,type:'button'});},
		image : (x,y)=>{return $('<img/>',{id:x,src:y});},
		input : (x,y)=>{return $('<input/>',{id:x,type:y});},
		table : x=>{return $('<table/>',{id:x , class:'table'});},
		thead : x=>{return $('<thead/>',{id:x})},
		tbody : x=>{return $('<tbody/>',{id:x})},
		tr : x=>{return $('<tr/>',{id:x})},
		th : ()=>{return $('<th/>')},
		td : ()=>{return $('<td/>')},
		nav: x=>{return $('<nav/>',{id: x});},
		ul : x=>{return $('<ul/>',{id:x})},
		li : ()=>{return $('<li/>')},
		a : ()=>{return $('<a/>',{href:'#'})}
};
var algoUI={
	series : ()=>{
		return '<div id ="content">'
		+'<h1>등차수열의 합</h1>'
		+'<span id="startV">시작값: &nbsp;&nbsp;</span>'
		+'<br>'
		+'<span id="endV">끝값: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>'
		+'<br>'
		+'<h3 id="result"></h3>'
		+'</div>';
	},
	sort :()=>{
		return '<div id ="content">'
		+'<h1>선택정렬</h1>'
		+'<span id="startV">입력값: &nbsp;&nbsp;</span>'
		+'<br>'
		+'<h3 id="result"></h3>'
		+'</div>';
	}
};

var bbsUI={	
		tbl : ()=>{
			var tbl ='<table id="tbl" border=1 style="border-collapse:collapse; margin: 0 auto">'
				+'<thead><tr style="height:25px;">';
			var a = [
				{width:'5%', txt:'NO'},
				{width:'20%', txt:'제 목'},
				{width:'36%', txt:'내 용'},
				{width:'15%', txt:'글쓴이'},
				{width:'15%', txt:'작성일'},
				{width:'9%', txt:'조회수'}
			];
			$.each(a,(i,j)=>{
				tbl+='<th style="width: ' + j.width
				+'; text-align: center;">' + j.txt+'</th>'
			});
			tbl+='</tr></thead><tbody id="tbody">';
			tbl+= '</tbody></table></div>';
			return tbl;
		},
		search :()=>{
			return '<div style="width:100%; margin: 30px auto;">'
            +'<div id="board" style="width:80%;margin:0 auto;">'
            +'<div id="search-box" style="width:100%;margin:0 auto;text-align:center;">'
            +'<select id="search-opt" name="searchOpt" class="form-control" style="width:15%; display:inline-block; margin-right:20px">'
            +'<option value="writer">작성자</option>'
            +'<option value="title">제목</option>'
            +'</select>'
            +'<input id="search-txt" type="text" class="form-control" style="width:60%; display:inline-block;  margin-right:20px;" name="searchTxt" placeholder="작성자 또는 제목을  검색 ++">'
            +'<input class="btn btn-primary" style="width:15%" name="search" type="submit"  value="검색!"/>'
            +'<input type="hidden" name="action" value="search"/>'
            +'<input type="hidden" name="pageName" value="list" />'
            +'<input type="hidden" name="pageNumber" value="1" />'
            +'</div>'
            +'<div style="width: 90%; margin: 50px auto 20px auto;">'
            +'<span id="total" style="font-size: 20px;"> 총 게시글 수: </span>'
            +'<input class="btn btn-warning" style="float:right" name="search" type="submit"  value="글쓰기!"/>'
            +'</div>'
		},
		pagination:()=>{
			return '<nav aria-label="Page navigation" style="text-align:center">'
					  +'<ul class="pagination">'
						+'<li><a href="#"><span class="glyphicon glyphicon-step-backward"></span></a></li>'
					    +'<li>'
					      +'<a href="#" aria-label="Previous">'
					        +'<span aria-hidden="true">&laquo;</span>'
					      +'</a>'
					    +'</li>'
					    +'<li><a href="#">1</a></li>'
					    +'<li><a href="#">2</a></li>'
					    +'<li><a href="#">3</a></li>'
					    +'<li><a href="#">4</a></li>'
					    +'<li><a href="#">5</a></li>'
					    +'<li>'
					      +'<a href="#" aria-label="Next">'
					        +'<span aria-hidden="true">&raquo;</span>'
					      +'</a>'
					    +'</li>'
					    +'<li><a><span class="glyphicon glyphicon-step-forward"></span></a></li>'
					  +'</ul>'
					+'</nav>'
		}
}

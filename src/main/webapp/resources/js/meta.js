/**
 * Meta JavaScript
 */
var meta = meta ||{};
meta.common=(function(){
	var init = function(ctx){
		onCreate();
		meta.session.init(ctx);
		meta.index.init();
	};
	var onCreate = function(){
		setContentView();
	};
	var setContentView = function(){};
	return {
		init:init
	};
})();
meta.index =(function(){
	var $wrapper,$navbar,$container,js,css,img,ctx;
	var init=function(){
		onCreate();
		};
	var onCreate=function(){
			setContentView();
		   $('#btn').on('click',function(){
	            $container.empty();
	            meta.ui.navbar();
	            meta.navbar.init();
	            meta.ui.arithmetic();
	            $('#resultBtn').click(()=>{
		            	$('#result').text('결과:'
		            			+ meta.algo.arithmetic($('#startNo').val(),$('#endNo').val()));
		        });
	         });
		};
	var setContentView=function(){
		 $container=$('#container');
		 img=$$('i');
		 ctx=$$('x');
		var $image = $('<img/>',
				{
					id:'loading',
					src: img + '/loading.gif'
				}
		);
		$container.append($image);
		var $button = $('<input/>',
		{		
				id:'btn',
				type : 'button',
				value: '버튼'
		});
		$container.append($button);
	};
	return{init:init};
})();
meta.algo={
		arithmetic : (s,e)=>{
	        var sum =0;
	        var start =s*1 ;
	        var end =e*1;
		        for(var i=start;i<=end;i++){
	        	   sum += i;
		        }
		       return sum;
		},
		switchSeries : ()=>{
			var sum = 0;
			var start = 1;
			var end = 100;
			var opcode = 1;
			for(var i=start;i<=end;i++){
				sum = sum + (opcode * i);
				opcode = opcode * -1;
			}
			return sum;
		},
		geoSeries : x=> {
			var current = 1;
			var sum =0;
			for (var i=0;i<=x-1;i++){
				current += i;
				sum += current;
			}
			return sum;
		},
		fac : x =>{},
		fibo : x => {

		}
};
meta.auth=(function(){
	var $wrapper,img,css,ctx,js; 
	var init=function(){onCreate();};
	var onCreate = function(){setContentView();};
	var setContentView = function(){
		$wrapper= $('#wrapper');
		img=$$('i');
		loginView();
	};
	var loginView = function(){
		var content=
		'<div id="content">'
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
		$wrapper.append(content);
		$('#login_btn_box').append(meta.comp.input({
				id:'loginBtn',
				type: 'button',
				value: 'LOGIN'
		})); 
		$('#login_btn_box').append(meta.comp.input({
			id:'cancelBtn',
			type: 'button',
			value: 'CANCEL'
		})); 
		
	}
	var joinView = function(){
	};
	return {init:init};
})();
meta.navbar = (function(){
	var init = function(){
		onCreate();
	};
	var onCreate = function(){
		setContentView();
		$('#go-home').click(()=>{
			app.controller.moveTo('common','main');
		});
		$('.dropdown-menu a').eq(0).click(()=>{
			alert('0');
			app.controller.moveTo('member','member_add');
		});
		$('.dropdown-menu a').eq(1).click(()=>{
			alert('###');
			app.member.list(1);
		});
		$('.dropdown-menu a').eq(2).click(()=>{
			alert('2');
			app.controller.moveTo('member','member_search');
		});
		$('.dropdown-menu a').eq(3).click(()=>{
			alert('3');
			app.controller.moveTo('member','member_list');
		});
		$('.dropdown-menu a').eq(3).click(()=>{
			alert('3');
			app.controller.moveTo('member','member_list');
		});
		$('.dropdown-menu a').eq(4).click(()=>{
			alert('4');
			app.controller.deleteTarget('member');
		});
	    $('#arithBtn').click(()=>{
	    	$('#container').empty();
	    	meta.ui.arithmetic();
	    	$('#resultBtn').click(()=>{
	            	$('#result').text('결과:'
	            			+ meta.algo.arithmetic($('#startNo').val(),$('#endNo').val()));
	        });
	    });
	    $('#switchBtn').click(()=>{
	    	$('#container').empty();
	        meta.ui.arithmetic();
	        $('h1').text('1부터 100까지 스위치 수열의 합');
	        $('#startNo').val('1').attr('readonly',true);
	        $('#endNo').val('100').attr('readonly',true);
	    	$('#resultBtn').click(()=>{
            	$('#result').text('결과:'
            			+ meta.algo.switchSeries());
	    	});
	    });
	    $('#geoBtn').click(()=>{
	    	$('#container').empty();
	    	alert('등비수열 클릭 ');
	    	meta.ui.arithmetic();
	        $('h1').text('1부터 N번째항까지 등비수열의 합');
	        $('#startNo').val('1').attr('readonly',true);
	        $('#endV').text('몇 번째 항까지?');
	        $('#endNo').attr('placeholder','몇 번째 항까지?');
	        $('#resultBtn').click(()=>{
            	$('#result').text('결과:'
            			+ meta.algo.geoSeries($('#endNo').val()));
	    	});
	        
	    });
	    $('#facBtn').click(()=>{
	    	$('#container').empty();
	    	alert('팩토리얼 클릭 ');
	    });
	    $('#fiboBtn').click(()=>{
	    	$('#container').empty();
	    	alert('피보나치 클릭 ');
	    	meta.ui.arithmetic();
	        $('h1').text('1부터 N번째까지 피보나치 수열의 합');
	        $('#startNo').val('1').attr('readonly',true);
	        $('#endV').text('몇 번째 항까지?');
	        $('#endNo').attr('placeholder','몇 번째 항까지?');
	    	$('#resultBtn').click(()=>{
	    		alert('야 먹긴 먹냐');
            	$('#result').text('결과:'
            			+ meta.algo.fibo($('#endNo').val()));
	    	});
	    });
		
	};
	var setContentView = function(){
		var $u1=$("#nav_ul_stu");
		var $u2=$("#nav_ul_grade");
		var $u3=$("#nav_ul_board");
		$u1.addClass("dropdown-menu");
		$u2.addClass("dropdown-menu");
		$u3.addClass("dropdown-menu");
	};
	return{init, init};
})();
meta.ui = (function(){
	var $wrapper,$navbar, $container, img, js, css, ctx;
	var init = function(){
		$wrapper= $('#wrapper');
		$navbar= $('#navbar');
		$container= $('#container');
		img=$$('i');
		js=$$('j');
		css=$$('c');
		ctx=$$('x');
	};
	var navbar = function(){
		$('#navbar').html(
		'<nav class="navbar navbar-inverse">'
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
		+'		    </ul>'
		+'		    <span class="login-member">${user.name}&nbsp;<a id="logout")+>로그아웃</a></span>'
		+'		  </div>'
		+'		</nav>');
	};
	var arithmetic = function(){
		var content = '<div id ="content">'
			+'<h1>등차수열의 합</h1>'
			+'<span id="startV">시작값: &nbsp;&nbsp;</span>'
			+'<br>'
			+'<span id="endV">끝값: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>'
			+'<br>'
			+'<h3 id="result"></h3>'
			+'</div>';
		$('#container').append(content);
		$('#startV').after(meta.comp.input({
        	id : 'startNo',
			type : 'text',
			placeholder : '시작값'
		}));
        $('#endV').after(meta.comp.input({
        	id: 'endNo',
        	type : 'text',
			placeholder : '끝값'
        }));
        $('#result').before(meta.comp.input({
			id: 'resultBtn',
        	type : 'button',
			value:'결과보기'
		}));
	};
	return {init:init,arithmetic : arithmetic,navbar:navbar};
})();
meta.comp={ 
			input:function(json){
				return $('<input/>',json);
			}
};
meta.session={
	      init : function(ctx){
		      sessionStorage.setItem('x',ctx);
		      sessionStorage.setItem('j', ctx + '/resources/js');
		      sessionStorage.setItem('i',ctx + '/resources/img');
		      sessionStorage.setItem('c',ctx + '/resources/css');
		   },
	      getPath : function(x){
		      return sessionStorage.getItem(x);
		   }
	   };
var $$ = function(x){return meta.session.getPath(x);};
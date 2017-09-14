/**
 * App JavaScript
 */
var app=app||{};
app.path=(function(){
	var init=function(ctx){
		alert('ctx???' + ctx);
		app.session.init(ctx);
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		location.href=ctx()+"/auth/login_view";		
	};
	var setContentView=function(){
	};
	var ctx=function(){
		return app.session.getPath('ctx');
	};
	var js =function(){
		return app.session.getPath('js');
	};
	var img =function(){
		return app.session.getPath('img');
	};
	var css =function(){
		return app.session.getPath('css');
	};
	return {
		init:init,
		ctx: ctx,
		js : js,
		img: img,
		css: css,
		onCreate:onCreate
	};
})();
app.session=(function(){
	var init=function(ctx){
		sessionStorage.setItem('ctx', ctx);
		sessionStorage.setItem('js',ctx+ '/resources/js')
		sessionStorage.setItem('img',ctx+ '/resources/img')
		sessionStorage.setItem('css',ctx+ '/resources/css')
	};
	var getPath=function(x){
		return sessionStorage.getItem(x);
	};
	return {
		init : init,
		getPath : getPath
	};
})();
app.main=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate = function(){
		setContentView();
		$('.list-group li').eq(0).on('click',function(){
			app.controller.moveTo('member','member_add');
		});
		$('.list-group li').eq(1).on('click',function(){
			alert('####memlist');
			app.member.list(1);
		});
		$('.list-group li').eq(2).on('click',function(){
			app.controller.detailStudent(prompt('당신은 현석씨입니까?'));
		});
		$('.list-group li').eq(3).on('click',function(){
			app.controller.moveTo('member','member_search');
		});
		$('.list-group li').eq(4).on('click',function(){
			app.controller.deleteTarget('member');
		});
		$('.list-group li').eq(5).on('click',function(){
			app.controller.moveTo('grade','grade_add');
		});
		$('.list-group li').eq(6).on('click',function(){
			app.controller.moveTo('grade','grade_list');
		});
		$('.list-group li').eq(7).on('click',function(){
			app.controller.moveTo('grade','grade_detail');
		});
		$('.list-group li').eq(8).on('click',function(){
			app.controller.moveTo('grade','grade_update');
		});
		$('.list-group li').eq(9).on('click',function(){
			app.controller.deleteTarget('grade');
		});
		$('.list-group li').eq(10).on('click',function(){
			app.controller.moveTo('board','add');
		});
		$('.list-group li').eq(11).on('click',function(){
			app.controller.moveTo('board','board_list');
		});
		$('.list-group li').eq(12).on('click',function(){
			app.controller.moveTo('board','board_detail');
		});
		$('.list-group li').eq(13).on('click',function(){
			app.controller.moveTo('board','board_update');
		});
		$('.list-group li').eq(14).on('click',function(){
			app.controller.deleteTarget('board');
		});
	};
	var setContentView=function(){
		var $u1=$("#main_ul_stu");
		var $u2=$("#main_ul_grade");
		var $u3=$("#main_ul_board");
		$u1.addClass("list-group");
		$u2.addClass("list-group");
		$u3.addClass("list-group");
		$('.list-group').children().addClass("list-group-item");
	}
	return{
		init : init
	};
})();
app.auth=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		$('#loginBtn').on('click',function(){
			alert('로그인버튼 click');
			if($('#login_id').val() === ""){
				alert('ID구다사이');
				return false;
			}
			if($('#login_pw').val() === ""){
				alert('password구다사이');
				return false;
			}
			$('#login_form').attr('action',app.path.ctx()+"/auth/login");
			$('#login_form').attr('method','post');
			return true;
		});
	}
	var setContentView=function(){
		
	};
	return {
		init:init
	};
})();
app.navbar=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate = function(){
		setContentView();
		$('#go-home').on('click',function(){
			app.controller.moveTo('common','main');
		});
		$('.dropdown-menu a').eq(0).on('click',function(){
			alert('0');
			app.controller.moveTo('member','member_add');
		});
		$('.dropdown-menu a').eq(1).on('click',function(){
			alert('###');
			app.member.list(1);
		});
		$('.dropdown-menu a').eq(2).on('click',function(){
			alert('2');
			app.controller.moveTo('member','member_search');
		});
		$('.dropdown-menu a').eq(3).on('click',function(){
			alert('3');
			app.controller.moveTo('member','member_list');
		});
		$('.dropdown-menu a').eq(3).on('click',function(){
			alert('3');
			app.controller.moveTo('member','member_list');
		});
		$('.dropdown-menu a').eq(4).on('click',function(){
			alert('4');
			app.controller.deleteTarget('member');
		});
	};
	var setContentView=function(){
		var $u1=$("#nav_ul_stu");
		var $u2=$("#nav_ul_grade");
		var $u3=$("#nav_ul_board");
		$u1.addClass("dropdown-menu");
		$u2.addClass("dropdown-menu");
		$u3.addClass("dropdown-menu");
	}
	return{init : init};
})();
app.member=(function(){
	var init = function(){
		onCreate();
		add();
	};
	var onCreate = function(){
		setContentView();
			$('#updateBtn').on('click',function(){
				alert('정보수정 클릭됐어');
			/*	sessionStorage.setItem('id', $('#stu_id').val());
				sessionStorage.setItem('name', $('#stu_name').text());
				sessionStorage.setItem('phone',$('#stu_phone').text());
				sessionStorage.setItem('email',$('#stu_email').text());
				sessionStorage.setItem('title',$('#stu_title').text());*/
				alert(sessionStorage.getItem('phone'));
				controller.moveTo('member','member_update');
			});
	};
	var setContentView = function(){
	};
	var list=function(pageNumber){
		location.href=app.path.ctx()+'/member/list/'+pageNumber;
	}
	var add=function(){
		$('#join_yes_btn').on('click', function() {
			$('#join_form').attr('action',app.path.ctx()+"/member/add");
			$('#join_form').attr('method','post');
		});
	}
	return {
		init : init, list : list, add:add
	};
})();
app.grade=(function(){
	var init = function(){
		onCreate();
	}
	var onCreate = function(){
		setContentView();
	}
	var setContentView = function(){
		
	}
	return {
		init:init
	};
})();
app.board=(function(){
	var init = function(){
		onCreate();
	}
	var onCreate = function(){
		setContentView();
	}
	var setContentView = function(){
		
	}
	return {
		init:init
	};
})();

app.controller=(function(){
	var init=function(){
		updateStudent();
	};
	var moveTo = function(dir,page){
		location.href=app.path.ctx()+'/common/path'+'/'+dir+'/' +page;
	};
	var logout = function(dir, page){
		location.href=app.path.ctx()+"/"+dir+".do?action=logout&page="+page;
	}
	var deleteTarget=function(dir){
		prompt(dir +'의 ID는?');
	}
	var list =function (dir,page,pageNumber){
		location.href=app.path.ctx()+"/"+dir+".do?action=list&page="+page;
	};
	var updateStudent= function(){
		$('#confirmBtn').on('click',function(){
			alert('수정하기!!');
			$('#update_form').attr('action',app.path.ctx()+"/student/update");
			$('#update_form').attr('method','post');
			return true;
		});
	};
	var deleteStudent=function(id){
		alert('삭제할 ID는 ' + id);
		location.href=app.path.ctx()+"/member/delete/" +id ;
	};
	var detailStudent=function(id){
		alert('상세보기:: ' + id);
		location.href=app.path.ctx()+"/member/detail/" + id;
	};
	var searchStudent= function (){
		alert('검색버튼 클릭');
		var search=$('search').value;
		if(search === ""){
			alert('검색어를 입력하세요');
			return false;
		};
		alert('입력한 검색어:::::   ' + search);
		location.href=app.path.ctx()+"/member.do?action=search&page=member_list&search="+search;
	};
	return{
		init : init,
		moveTo : moveTo,
		logout:logout,
		list:list,
		deleteTarget:deleteTarget,
		detailStudent:detailStudent,
		deleteStudent:deleteStudent,
		updateStudent:updateStudent,
		searchStudent:searchStudent
	};
})();

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
	var $wrapper,img,ctx;
	var init=function(){
		onCreate();};
	var onCreate=function(){
			setContentView();
		   $('#btn').on('click',function(){
	            $wrapper.empty();
	            meta.auth.init();
	         });
		};
	var setContentView=function(){
		 $wrapper=$('#wrapper');
		 img=$$('i');
		 ctx=$$('x');
		var $image = $('<img/>',
				{
					id:'loading',
					src: img + '/loading.gif'
				}
		);
		$wrapper.append($image);
		var $button = $('<input/>',
		{		
				id:'btn',
				type : 'button',
				value: '버튼'
		});
		$wrapper.append($button);
	};
	return{init:init};
})();
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
		var $ui=
		'<div id="container">'
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
		$wrapper.append($ui);
		$('#login_btn_box').append(meta.comp.button({
				id:'loginBtn',
				type: 'button',
				value: 'LOGIN'
		})); 
		$('#login_btn_box').append(meta.comp.button({
			id:'cancelBtn',
			type: 'button',
			value: 'CANCEL'
		})); 
		
	}
	var joinView = function(){
	};
	return {init:init};
})();
meta.comp={ 
			button:function(json){
				return $('<input/>',json);
			}
};

meta.session=(function(){
	   var init=function(ctx){
	      sessionStorage.setItem('x',ctx);
	      sessionStorage.setItem('j', ctx + '/resources/js');
	      sessionStorage.setItem('i',ctx + '/resources/img');
	      sessionStorage.setItem('c',ctx + '/resources/css');
	   };
	   var getPath=function(x){
	      return sessionStorage.getItem(x);
	   };
	   return {
	      init : init,
	      getPath : getPath
	   };
})();
var $$ = function(x){return meta.session.getPath(x);};
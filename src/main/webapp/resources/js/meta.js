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
	return {init:init};
})();
meta.index =(function(){
	var $wrapper,$navbar,$container,js,css,img,ctx,algo,temp;
	var init=function(){
			ctx=$$('x');
			js=$$('j');
			img=$$('i');
			algo=js+'/algo.js';
			temp=js+'/template.js';
			$navbar=$('#navbar');
			$container=$('#container');
			onCreate();
		};
	var onCreate=function(){
		 $.getScript(temp,()=>{
			 	compUI.div('content').css({'width': '50%', 'margin': '0 auto', 'text-align':'center'}).appendTo($container).css({'width': '100%'});
			 	$content = $('#content');
			 	$content.html('<h1> 테슷흐!!!!!!!!</h1>')
			 	compUI.image('loading',img+'/loading.gif').css({'display' : 'inline-block','margin' : '0 auto'}).appendTo($content);
			 	compUI.h1('h-btn').attr('display','inline').appendTo($content);
			 	$hBtn=$('#h-btn');
				compUI.span('btn').html('알고리즘').addClass('label label-default').css({'margin-left':'10px'}).appendTo($hBtn).click(()=>{
					$container.empty();
					//meta.auth.init();
					meta.navbar.init();
					$container.html(algoUI.series());
				});
				compUI.span('btn2').html('회원관리').addClass('label label-primary').css({'margin-left':'10px'}).appendTo($hBtn).click(()=>{
					alert('회원관리 가기');
					//meta.auth.init();
					meta.navbar.init();
				});
				compUI.span('bbsBtn').html('게시판관리').addClass('label label-danger').css({'margin-left':'10px'}).appendTo($hBtn).click(()=>{
					meta.board.list();
				});
		 	});
		};

	return{init:init};
})();
meta.board=(()=>{
	var temp,$container,$content,ctx,js;
	var init =()=>{
		ctx=$$('x');
		js=$$('j');
		$container=$('#container');
		$navbar=$('#navbar');
		temp=js+'/template.js';
	}
	var list =()=>{
		init();
		$.getJSON(ctx + '/get/board/list',data=>{
			$container.empty();
			compUI.div('content').appendTo($container);
			$content = $('#content');
			$content.html(bbsUI.search());
			var tbl=bbsUI.tbl();
			var tr ='';
			alert('결과:  ' + data.result);
			$.each(data.list,(i,j)=>{
				tr+= '<tr style="height: 25px;">'
					+'<td>'+j.articleSeq+'</td>' 
					+'<td><a onclick="meta.board.detail('+j.articleSeq+')">'+j.title+'</a></td>' 
					+'<td>'+j.content+'</td>' 
					+'<td>'+j.id+'</td>' 
					+'<td>'+j.regdate+'</td>' 
					+'<td>'+j.hitcount+'</td>' 
					+'</tr>'
			});
			console.log('tr : ' +tr);
			$content.append(tbl);
			$content.append(bbsUI.pagination());
			$('#tbody').html(tr);
			$('#total').html("총게시글 수:  "+data.total.count);
			$('#writeBtn').click(()=>{
				meta.board.write();
			});
		});
		
	}
	var detail=x=>{
		init();
		alert('선택한 시퀀스:    ' + x);
		$.getJSON(ctx + '/get/board/'+x,data=>{
			var pass='';
			$.getScript(temp,()=>{
				$container.empty();
				compUI.div('content').appendTo($container);
				$content = $('#content');
				$content.html(bbsUI.detail());
				$('legend').text('게시글 보기');
				$('#title').val(data.article.title).attr('readonly','true');
				$('#writer').val(data.article.id).attr('readonly','true');
				$('#regdate').val(data.article.regdate).attr('readonly','true');
				$('#message').text(data.article.content).attr('readonly','true');
				alert('아이디가 보이니:  ' + data.article.id);
				var _seq = data.article.articleSeq;
				var _title = $('#title').val();
				var _writer = $('#writer').val();
				var _message = $('#message').val();
				$('#confirmBtn').text('수정').click(e=>{
					e.preventDefault();
					$('legend').text('게시글 수정하기');
					$('#title').val(data.article.title).removeAttr('readonly');
					$('#regdate').val(data.article.regdate).removeAttr('readonly');
					$('#message').text(data.article.content).removeAttr('readonly');
					$('#confirmBtn').text('확인').attr('id','updateBtn').click(e=>{
						e.preventDefault();
						$.ajax({
							url: ctx+'/put/articles',
							method: 'post',
							data: JSON.stringify({
							'articleSeq' : _seq,
							'title': _title,
							'id' : _writer,
							'content':_message
							}),
							contentType : 'application/json',
							success: data=>{
								alert('ajax통신성공'+ data.msg);
								detail(data.articleSeq);
							},
							error : (x,s,m)=>{
								alert('글 수정시 에러발생' + m);
							}
						});
					});
					$('#cancelBtn').text('취소').attr('id','resetBtn').attr('type','reset').removeAttr('data-toggle').removeAttr('data-target');
				});
				$('#cancelBtn').attr('data-toggle','modal').attr('data-target','#modal').addClass('btn btn-primary').text('삭제').click(e=>{
					e.preventDefault();
					deleteArticle(x+','+pass);
				});
			});
			
		});
	}
	var update =x=>{
		alert('수정클릭했어용');
		$.getJSON(ctx + '/get/board/'+x,data=>{
			$.getScript(temp,()=>{
				$container.empty();
				compUI.div('content').appendTo($container);
				$content = $('#content');
				$content.html(bbsUI.detail());
				$('#confirmBtn').click(e=>{
					e.preventDefault();
					alert('리스트로 돌아가고 싶어');
					list();
				});
			});
		});
		
	}
	var write=()=>{
		init();
		$.getScript(temp,()=>{
			$container.empty();
			compUI.div('content').appendTo($container);
			$content = $('#content');
			$content.html(bbsUI.detail());
		});
	}
	var deleteArticle= x=>{
		alert('삭제클릭했어용 헤헤');
		list();
	}

	return {init:init,detail:detail,write:write,update:update,list:list};
})();
meta.auth=(function(){
	var $wrapper,img,css,ctx,js,temp; 
	var init=function(){
		$wrapper=$('#wrapper');
		img = $$('i');
		js=$('j');
		temp = js +'/template.js';
		onCreate();
	};
	var onCreate = function(){setContentView();};
	var setContentView = function(){
		$.getScript(temp,(i)=>{
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
		});
		
	};
	var joinView = function(){
	};
	return {init:init};
})();
meta.navbar = (function(){
	var algo,js,temp,$container;
	var init = function(){
		js=$$('j');
		$container = $('#container');
		algo = js + '/algo.js';
		temp=js + '/template.js';
		onCreate();
	};
	var onCreate = function(){
		$.getScript(temp,function(){
			var $u1=$("#nav_ul_stu");
			var $u2=$("#nav_ul_grade");
			var $u3=$("#nav_ul_board");
			$u1.addClass("dropdown-menu");
			$u2.addClass("dropdown-menu");
			$u3.addClass("dropdown-menu");
			$('#navbar').html(introUI.navbar());
			$('#container').html(algoUI.series());
			$('#startV').after(compUI.input('startNo','text'));
			$('#startNo').attr('placeholder','시작값');
			$('#endV').after(compUI.input('endNo','text'));
			$('#endNo').attr('placeholder','끝값');
	        $('#result').before(compUI.input('resultBtn','button'));
	        $('#resultBtn').val('결과보기');
            $('#resultBtn').click(()=>{
         		$.getScript(algo,(x1,x2)=>{
	    			$('#result').text('결과:'
	            			+ 	series.arithmetic($('#startNo').val(),$('#endNo').val()));
    			});
	        });
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
		    	$('#container').html(algoUI.series());
				$('#startV').after(compUI.input('startNo','text'));
				$('#startNo').attr('placeholder','시작값');
				$('#endV').after(compUI.input('endNo','text'));
				$('#endNo').attr('placeholder','끝값');
		        $('#result').before(compUI.input('resultBtn','button'));
		        $('#resultBtn').val('결과보기');
		        $('h1').html('등차수열의 합');
	            $('#resultBtn').click(()=>{
	         		$.getScript(algo,(x1,x2)=>{
		    			$('#result').text('결과:'
		            			+ 	series.arithmetic($('#startNo').val(),$('#endNo').val()));
	    			});
		        });
		    });
		    $('#switchBtn').click(()=>{
		    	$container.html(algoUI.series());
		    	$('#startV').after(compUI.input('startNo','text'));
				$('#startNo').attr('placeholder','시작값');
				$('#endV').after(compUI.input('endNo','text'));
				$('#endNo').attr('placeholder','끝값');
		        $('#result').before(compUI.input('resultBtn','button'));
		        $('#resultBtn').val('결과보기');
		        $('h1').html('스위치 수열의 합');
		        $('#startNo').val('1').attr('readonly',true);
		        $('#endNo').val('100').attr('readonly',true);
		    	$('#resultBtn').click(()=>{
		    		$.getScript(algo,()=>{
		    			$('#result').text('결과:'
		    					+ series.switchSeries());
		    		});
		    	});
		    });
		    $('#geoBtn').click(()=>{
		    	$container.html(algoUI.series());
		    	$('#startV').after(compUI.input('startNo','text'));
		    	$('#startNo').val('1').attr('readonly','true');
		    	$('#endV').after(compUI.input('endNo','text'));
		    	$('#endNo').attr('placeholder','몇 번째 항까지?');
		    	$('#result').before(compUI.input('resultBtn','button'));
		    	$('#resultBtn').val('결과보기');
		        $('h1').html('1부터 N번째항까지 등비수열의 합');
		        $('#resultBtn').click(()=>{
		        	$.getScript(algo,(x)=>{
		            	$('#result').text('결과:'
		            			+series.geoSeries($('#endNo').val()));	        		
		        	});
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
		        $.getScript(algo,()=>{
		        	series.fibonacci('헬로우피보');
		        });
	/*	    	$('#resultBtn').click(()=>{
	            	$('#result').text('결과:'
	            			+ meta.algo.fibo($('#endNo').val()));
		    	});*/
		    });
		    $('#selBtn').click(()=>{
		    	alert('선택정렬 눌렀슝');
		    	$container.append(compUI.div('content')).css({'width': '100%'});
		    	$('#content').html(algoUI.sort());
		    	$('#startV').after(compUI.input('startNo','text'));
		    	$('#result').before(compUI.input('resultBtn','button'));
		    	$('#resultBtn').val('입력하기');
		    	var sortList = new Array(5);
		    	var i = 0;
		        $('#resultBtn').click(()=>{
		        	console.log('시작 i 야 ::::' + i);
		        	sortList[i] = $('#startNo').val();
		        	console.log('sortList야::::' + sortList[i]);
		    		$('#startNo').val('');
		    		i++;
		    		console.log('i 야 ::::' + i);
		    		if(i==5){
		    			$('#startNo, #startV').remove();
		    			$('#resultBtn').val('결과보기');
		    			$('#resultBtn').after(compUI.h1('result'));
		    			$('#resultBtn').click(()=>{
		    				console.log('버튼클릭후i 야 ::::' + i);
		    				$.getScript(algo,(x)=>{
			    	      		$('#result').text(sort.selection(sortList));
				        	});
		    				i=0;
		    			});
		    		}
		    	});
		    });
		    
		});
	};
	return{init, init};
})();
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
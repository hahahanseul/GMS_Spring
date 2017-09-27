<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
<meta http-equiv="Content-Type" content="text/html; charset=utl-8;" pageEncoding="utf-8" />
<title>GMS</title>
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
   <link rel="stylesheet" href="${path.css}/skyscanner.css" />
   <script src="${path.js}/meta.js"></script>
</head>
<body>
<div id="content">

   <div id="header_root" style="padding: 12px 250px 12px 250px; margin: 0 auto;">
      <div id="skylogo">
         <img alt="" src="${path.img}/skylogo.png" onclick="">
      </div>      
      <div id="navbar_screen" style="float: right;">
         <nav id="navbar1">
            <a href="">도움말</a>
            <a href="">
               <button type="button">
                  <img src="${path.img}/kr.png" alt="" style="width: 20%; height: 20%"/>ko-KR ₩ KRW
               </button>
            </a> 
            <a href=""><button type="button">로그인</button></a>   
         </nav>
      </div>
   </div>
   
   <div id="navbar_search" style="padding: 30px 250px 30px 250px; margin: 0 auto;">
      <nav id="navbar2">
         <ul>
            <li style="float: left; margin: 10px"><a href="#">항공권</a></li>
            <li style="float: left; margin: 10px"><a href="#">호텔</a></li>
            <li style="float: left; margin: 10px"><a href="#">렌터카</a></li>
         </ul>
      </nav>
   </div>
      
   <div id="box" style="width: 100%; height: 100%; ">
      <div id="imgbox" style="background-image: url('${path.img}/skysearchimg.jpg'); width: 100%; height:800px; backgroud-size: cover; background-repeat: no-repeat; object-fit: scale-down;">
         <div id="headcontent"> 
            <div id="search_div" style="">
               <div id="choose_round" class="">
                  <section class="choose-round-radio">
                     <input type="radio"><label>왕복</label>
                     <input type="radio"><label>편도</label>
                     <input type="radio"><label>다구간</label>
                  </section>
                  <a style="float: right;"><span>지도로 검색하기</span></a>
               </div>
                  <br />   <br />
               
               <div id="where_to">
               		<div id="dept">
	               		 <label class="place-lable">출발지</label>
	                     <input type="text" placeholder="국가, 도시 또는 공항" style="position: relative; vertical-align: top;">
	                     <div>버튼</div>
                         <label><input type="checkbox"><span>주변 공항 추가</span></label>
               		</div>
               		<div id="arriv">
	                     <label class="place-lable">도착지</label>
	                     <input type="text" placeholder="국가, 도시 또는 공항" style="position: relative; vertical-align: top;"><br />
                         <label><input type="checkbox"><span>주변 공항 추가</span></label>
               		</div>
                	<div class="depart-date">
                    	<label class="place-lable">가는날</label>
                        <input type="text" id="js-depart-input" value="2017. 9. 26." data-date="2017-09-26" tabindex="1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" readonly="">
                    </div>
                  	<div class="return-date">
                    	<label class="place-lable">오는날</label>
                        <input type="text" id="js-return-input" value="2017. 9. 27." data-date="2017-09-27" tabindex="1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" readonly="">
                    </div>
               </div>
               <div id="direct-flight">
                  <label><input type="checkbox" ><span>직항만</span> </label>
               </div>
               <button class="js-search-button" tabindex="1" type="button">
                  <span>항공권 검색&nbsp;</span>
               </button>
            </div>
         </div>      
      </div>
   </div>
</div>
</body>
<script>
</script>
</html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">	
<head>
	<meta charset="UTF-8" />
	<title>GMS</title>
	<link rel="stylesheet" href="${path.css}/meta.css" />
	<link rel="stylesheet" href="${path.css}/common.css" />
	<link rel="stylesheet" href="${path.css}/meta.css" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script src="${path.js}/meta.js"></script>
</head>
<body>
<div id="wrapper">
<div id="navbar"></div>
<div id="container"></div>
</div>

<div class="modal fade alert" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<button type="button" class="close" data-dismiss="modal">
	<span aria-hidden="true">x</span>
	<span class="sr-only">Close</span>
</button>
<h3 class="modal-title" id="modalLabel">정말 삭제하시겠습니까?</h3>
</div>
<div class="modal-body">
<form>
<div class="form-group">
<label for="inputPass">Password</label>
<input type="password" class="form-control" id="user-email2" placeholder="Enter Password"/>
</div>
<button type="submit" style="width: 200px"></button>
</form>
</div>
</div>
</div>

</div>


</body>
<script>
meta.common.init('${path.ctx}');
</script>
</html>
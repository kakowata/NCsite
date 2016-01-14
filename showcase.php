<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>導入事例｜株式会社Signite（シグナイト）</title>
<meta name="keywords" content="府中,導入事例、活用事例,データベース構築,Google Maps,システム構築, クラウド, Google Cloud Platform, App Engine, Compute Engine">
<meta name="description" content="株式会社Signite（シグナイト）ではGoogle Mapsとデータベースを連携させた情報管理システムを構築しています。">
<meta name="format-detection" content="telephone=no">
<!-- facebook OGP -->
<!--<meta property="og:title" content="" />
<meta property="og:type" content="website" />
<meta property="og:description" content="" />
<meta property="og:url" content="" />
<meta property="og:image" content=""/>
<meta property="og:site_name" content="" />
<meta property="og:locale" content="ja" />
--><!-- END facebook OGP -->
<!-- style -->
<link href="css/reset.min.css" rel="stylesheet" type="text/css">
<link href="css/bootstrap.min.css" rel="stylesheet">

<link rel="stylesheet" type="text/css" href="css/common.css">
<link rel="stylesheet" type="text/css" href="css/material.min.css">
<link rel="stylesheet" href="css/liquid-slider.css">
<link href="css/jquery.fs.boxer.min.css" type="text/css" rel="stylesheet">
<link rel="icon" type="image/x-icon" href="favicon.ico">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="http://fonts.googleapis.com/css?family=Roboto:400,300,100" rel="stylesheet" type="text/css">
<link href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.min.css" rel="stylesheet"  type="text/css">
<!--link href="css/material-design-iconic-font.min.css" rel="stylesheet" type="text/css"-->
<link href="css/industry.css?v=3.2.4" rel="stylesheet" type="text/css">
</head>
<body style="display:none;">
<!-- Google Tag Manager -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-5VJ4Z8"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5VJ4Z8');</script>
<!-- End Google Tag Manager -->
<!-- ヘッダーナビゲーションバー　ここから -->
<?php include("header.php"); ?>
<!-- ヘッダーナビゲーションバー　ここまで --> 
<div class="h128">
<!-- .header-action-button-wrapper -->
<div class="header-action-button-wrapper">
<a class="header-action-button action-button md md-add" href="javascript:void(0);"></a> 
</div>
<!-- main-header ここまで -->
<div class="container main-nav">
<div class="navbar navbar-default">
<div class="container-fluid">
<div class="navbar-collapse collapse">
<ul class="nav navbar-nav"></ul>
</div>
</div>
<!--/.container-fluid -->
</div>
</div>
<!-- /container main-nav -->
<div class="btn-menu">
<div class="btn-menu-item clearfix"></div>
</div>
</div>
<!-- Sections -->
<div class="sections">
<div class="sectionWindow">
<div class="sections-wrapper clearfix"></div>
</div>
</div>
<!-- Section Navigation -->
<div class="section-nav right" style="display:none;">
<a class="rightnav" href="javascript:void(0);">
<img src="showcase/images/right.png">
</a>
</div>
<div class="section-nav left" style="display:none;">
<a class="leftnav" href="javascript:void(0);">
<img src="showcase/images/left.png">
</a>
</div>
<div class="section-nav top" style="display:none;">
<a class="topnav" href="javascript:void(0);">
<img src="showcase/images/top.png">
</a>
</div>
<div class="section-nav bottom" style="display:none;">
<a class="bottomnav" href="javascript:void(0);">
<img src="showcase/images/bottom.png">
</a>
</div>
<!-- end .section-nav -->
<!-- fullscreen-overlay -->
<div class="fullscreen-overlay">
<header class="slide-out-header clearfix fullscreen-header">
<div class="clearfix">
<a class="fullscreen-close md-close" href="javascript:void(0);">
</a>
<div class="fullscreen-title">
<span class="small-title">
</span>
<span class="small-comment">
</span>
</div>
</div>
</header>
</div>
<!-- end .fullscreen-overlay -->
</body>
<script id="section-wrapper" type="text/template">
		<div id="<%= id %>" style="margin-bottom:<%= margin %>px">
				<div id="<%= id %>-nav"></div>
				<div class="clear"></div>
		</div>
</script>
<script id="section-data" type="text/template">
		<section id="<%= section %>" class="<%= right %> <%= bottom %>" style="margin-right:<%= margin %>px;">
				<div class="row left" style="padding-left:<%= padding_left %>px">
						<div class="col-sm-12 content">
								<div class="imgBox">
										<iframe src="<%= url %>" width="<%= width %>px" height="<%= height %>px" class="<%= industry %>" onload="g.existNextQueue(this);" style="display:none;" scrolling="no">
										</iframe>
										<div class="attribute" style="display:none;">
												<span class="url"><%= url %></span>
												<span class="name"><%= name %></span>
												<span class="comment"><%= comment %></span>
										</div>
								</div>
						</div>
						<div class="overlay-wrap" style="height:<%= height %>px">
						</div>
				</div>
		</section>
</script>
<script id="section-dummy" type="text/template">
		<section id="<%= section %>" class="<%= right %> <%= bottom %>" style="margin-right:<%= margin %>px;">
				<div class="row left" style="padding-left:<%= padding_left %>px">
						<div class="col-sm-12 content">
								<div class="imgBox">
										<div style="width:<%= width %>px;height:<%= height %>px;">
										</div>
								</div>
						</div>
				</div>
		</section>
</script>
<script id="industry-data" type="text/template">
		<li class="<%= lower_style %> opa-07">
				<a href="#" data-row="<%= no %>">
						<%= name %>
				</a>
		</li>
</script>
<script src="js/jquery.min.js" type="text/javascript">
</script>
<script src="js/jquery-ui.min.js" type="text/javascript">
</script>
<script src="js/jquery.scrollTo.min.js" type="text/javascript">
</script>
<script src="js/jquery.touchSwipe.min.js" type="text/javascript">
</script>
<script src="js/underscore-min.js" type="text/javascript">
</script>
<script src="js/material.min.js" type="text/javascript"></script> 
<script src="js/index.js" type="text/javascript">
</script>
<!-- Just for debugging purposes. Don"t actually copy these 2 lines! -->
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
<script src="//oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js" type="text/javascript">
</script>
<script src="//oss.maxcdn.com/respond/1.4.2/respond.min.js" type="text/javascript">
</script>
<![endif]-->
<!--[if lt IE 9]>
<script src="//html5shim.googlecode.com/svn/trunk/html5.js" type="text/javascript">
</script>
<![endif]-->  
</html>
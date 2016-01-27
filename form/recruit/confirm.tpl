<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>新しい仲間を募集しています。｜採用情報｜株式会社Signite（シグナイト）</title>
<meta name="keywords" content="府中,データベース構築,Google Maps,システム開発,プログラマー,販促,営業,webディレクター,募集">
<meta name="description" content="新しいことにチャレンジしたい人、興味のある人は一緒に長靴倶楽部で働きませんか？">
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
<link href="../../css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="../../css/common.css">
<link rel="stylesheet" type="text/css" href="../../css/material.min.css">
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->
</head>
<body>
<!-- Google Tag Manager -->
<noscript>
<iframe src="//www.googletagmanager.com/ns.html?id=GTM-5VJ4Z8"
height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5VJ4Z8');</script> 
<!-- End Google Tag Manager -->
<div id="allContent"> 
		<!-- ヘッダーナビゲーションバー -->
		<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
				<?php include("../../header.php"); ?>
				<div class="row grey ">
						<div class="col-sm-12 col-xs-12">
								<div id="contact"> 
										<!-- topcongainer ここから　-->
										<div class="topContent">
												<div class="container mainBox"> 
														<!--PCのみ表示-->
														<div class="hidden-xs">
																<div class="pan"><a href="../../index.php">HOME</a>&nbsp;&#62;&nbsp;採用情報</div>
														</div>
														<div class="row">
																<div class="col-sm-6 col-xs-12 topText">
																		<h1>採用情報</h1>
																</div>
																<div class="col-sm-6 col-xs-12 iconBox"> <img class="icon" src="../../images/recruit/ric-img01.png" width="80%" height="80%" alt="採用情報"> </div>
														</div>
														<div class="row">
																<div class="col-sm-12 col-xs-12 topText">
																		<p>株式会社Signite（シグナイト）では、新しい仲間を募集しています。<br>
																				当社は、創業当初よりインターネットを活用したビジネスをトータル的にサポートしている会社です。<br>
																				Webシステム開発を中心にWebサイトの企画立案、制作、公開まで、Webに関わる業務全般をプロデュースしています。 </p>
																</div>
														</div>
												</div>
										</div>
										<!-- topContent ここまで　--> 
										<!--PC表示-->
										<div class="visible-xs"> <img class="icon" src="../../images/contact/con-img03s.png" width="100%" height="100%" alt="採用情報"> </div>
										<div class="hidden-xs">
												<div class="bottom-tease">
														<p class="pagedown"><a href="#page2"></a></p>
														<!--input type="button" class="pagedown" href="#page2" value="Scroll"--> 
												</div>
												<img class="mgB-50" src="../../images/recruit/ric-img02.png" width="100%" height="100%" alt="採用情報"> </div>
										<div class="container mainBox">
												<div id="page2">
														<p class="contactForm">以下のフォームに必要事項をご入力の上、お問い合わせ下さい。後ほど担当者より折り返しご連絡いたします。</p>
														<form id="form1" name="form1" method="post" action="<?= $_SERVER['SCRIPT_NAME'] ?>">
																<input type="hidden" name="confirm" value="<?= $confirm_word ?>">
																<input type="hidden" name="frm_init" value="1">
																<?= $hidden_fields ?>
																<div class="mdl-shadow--2dp col-xs-12 mgB-50" style="background: #fff;">
																		<div class="mdl-card__title">
																				<h2 class="mdl-card__title-text">登録情報</h2>
																		</div>
																		<div class="mdl-card__actions mdl-card--border">
																				<div id="form_box">
																						<div class="col-sm-12 col-xs-12">
																								<div class="col-sm-2 col-xs-12 th">職種&nbsp;<span class="red">※</span></div>
																								<div class="col-sm-10 col-xs-12 td">
																										<div class="mdl-textfield mdl-js-textfield">
																												<?= $frm['job']['value'] ?>
																										</div>
																								</div>
																						</div>
																						<div class="col-sm-6 col-xs-12">
																								<div class="col-sm-4 col-xs-12 th">お名前&nbsp;<span class="red">※</span></div>
																								<div class="col-sm-8 col-xs-12 td">
																										<div class="mdl-textfield mdl-js-textfield">
																												<?= $frm['username']['value'] ?>
																										</div>
																								</div>
																						</div>
																						<div class="col-sm-6 col-xs-12">
																								<div class="col-sm-4 col-xs-12 th">ふりがな&nbsp;<span class="red">※</span></div>
																								<div class="col-sm-8 col-xs-12 td">
																										<div class="mdl-textfield mdl-js-textfield">
																												<?= $frm['furigana']['value'] ?>
																										</div>
																								</div>
																						</div>
																						<div class="col-sm-6 col-xs-12">
																								<div class="col-sm-4 col-xs-12 th">電話番号&nbsp;<span class="red">※</span></div>
																								<div class="col-sm-8 col-xs-12 td">
																										<div class="mdl-textfield mdl-js-textfield">
																												<?= $frm['telephone']['value'] ?>
																										</div>
																								</div>
																						</div>
																						<div class="col-sm-6 col-xs-12">
																								<div class="col-sm-4 col-xs-12 th">メールアドレス&nbsp;<span class="red">※</span></div>
																								<div class="col-sm-8 col-xs-12 td">
																										<div class="mdl-textfield mdl-js-textfield">
																												<?= $frm['email2']['value'] ?>
																										</div>
																								</div>
																						</div>
																						<div class="col-sm-6 col-xs-12">
																								<div class="col-sm-4 col-xs-12 th">郵便番号</div>
																								<div class="col-sm-8 col-xs-12 td">
																										<div class="mdl-textfield mdl-js-textfield">
																												<?= $frm['postal']['value'] ?>
																												<span style="color:#FFFFFF">郵便番号</span> </div>
																								</div>
																						</div>
																						<div class="col-sm-6 col-xs-12">
																								<div class="col-sm-4 col-xs-12 th">生年月日&nbsp;<span class="red">※</span></div>
																								<div class="col-sm-8 col-xs-12 td">
																										<div class="mdl-textfield mdl-js-textfield">
																												<?= $frm['birth']['value'] ?>
																										</div>
																								</div>
																						</div>
																						<div class="col-xs-12">
																								<div class="col-sm-2 col-xs-12 th">住所</div>
																								<div class="col-sm-10 col-xs-12 td">
																										<div class="mdl-textfield mdl-js-textfield">
																												<?= $frm['address']['value'] ?>
																										</div>
																								</div>
																						</div>
																						<div class="col-xs-12">
																								<div class="col-sm-2 col-xs-12 th">性別&nbsp;<span class="red">※</span></div>
																								<div class="col-sm-10 col-xs-12 td">
																										<div class="mdl-textfield mdl-js-textfield">
																												<?= $frm['sex']['value'] ?>
																										</div>
																								</div>
																						</div>
																						<div class="col-xs-12">
																								<div class="col-sm-2 col-xs-12 th">自己PR&nbsp;<span class="red">※</span></div>
																								<div class="col-sm-10 col-xs-12 td">
																										<div class="mdl-textfield mdl-js-textfield">
																												<?= $frm['comment']['value'] ?>
																										</div>
																								</div>
																						</div>
																						<div class="col-xs-12">
																								<div class="col-sm-2 col-xs-12 th">質問、確認事項</div>
																								<div class="col-sm-10 col-xs-12 td">
																										<div class="mdl-textfield mdl-js-textfield">
																												<?= $frm['question']['value'] ?>
																										</div>
																								</div>
																						</div>
																				</div>
																		</div>
																		<div class="col-xs-12">
																				<div style="text-align: center; margin: 0 auto; padding: 10px">
																						<input type="button" class="mdl-button mdl-js-button mdl-button--raised" id="return" value="内容を修正する" onclick="history.back()" />
																						<input type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" id="submit" value="送信" />
																				</div>
																		</div>
																</div>
														</form>
												</div>
												<?php include("../../contact_box.php"); ?>
										</div>
										<!-- Topへ戻る -->
										<p id="page-top"><a href="#allContent"></a></p>
										<!-- footer -->
										<?php include("../../footer.php"); ?>
								</div>
								<!--container mainBox end --> 
						</div>
				</div>
		</div>
</div>
<!--allContent end -->
<link rel="stylesheet" href="../../css/liquid-slider.css">
<link href="../../css/jquery.fs.boxer.min.css" type="text/css" rel="stylesheet">
<link rel="icon" type="image/x-icon" href="favicon.ico">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="http://fonts.googleapis.com/css?family=Roboto:400,300,100" rel="stylesheet" type="text/css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script> 
<script src="../../js/bootstrap.min.js"></script> 
<script src="../../js/jquery.fs.boxer.js"></script> 
<script src="../../js/common.js"></script> 
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> 
<script src="/js/jquery.easing.min.js"></script> 
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.4/jquery.touchSwipe.min.js"></script> 
<script src="../../js/jquery.liquid-slider.min.js"></script> 
<script src="../../js/material.min.js" type="text/javascript"></script> 
<script src="../../js/common.js" type="text/javascript"></script>
</body>
</html>

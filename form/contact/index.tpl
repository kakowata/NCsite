<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>システム構築のお見積もり・ご相談承ります！｜お問い合わせ｜株式会社Signite（シグナイト）</title>
<meta name="keywords" content="府中,データベース構築,Google Maps,お問い合わせ,見積もり,おみつもり,デモ環境,お申し込み">
<meta name="description" content="Google Mapsを活用したシステム構築のお問い合わせ・お見積もりはお気軽にご連絡下さい。">
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
																<div class="pan"><a href="../../index.php">HOME</a>&nbsp;&#62;&nbsp;お問い合わせ</div>
														</div>
														<div class="row">
																<div class="col-sm-6 col-xs-12 topText">
																		<h1>お問い合わせ</h1>
																</div>
																<div class="col-sm-6 col-xs-12 iconBox"> <img class="icon" src="../../images/contact/con-img01-1.png" width="300" height="100%" alt="採用情報"> </div>
														</div>
														<div class="row">
																<div class="col-sm-12 col-xs-12 topText">
																		<p>今すぐご連絡下さい。ご相談、お見積りは無料です。<br>
																				Web、または各種アプリケーションに関すること、まずはなんでもお聞き下さい。<br>
																				弊社担当者が最適なご提案をさせていただきます。ご相談、お見積りは無料です。<br>
																				お急ぎの案件、複雑な案件に関してもまずはご相談下さい。</p>
																</div>
														</div>
												</div>
										</div>
										<!-- topContent ここまで　--> 
										<!--PC表示-->
										<div class="hidden-xs">
												<div class="bottom-tease">
														<p class="pagedown"><a href="#page2"></a></p>
														<!--input type="button" class="pagedown" href="#page2" value="Scroll"--> 
												</div>
												<img class="mgB-50" src="../../images/contact/con-img03.png" width="100%" height="100%" alt="company"> </div>
										<div class="container mainBox">
												<div id="page2">
														<p class="left">以下のフォームに必要事項をご入力の上、お問い合わせ下さい。後ほど担当者より折り返しご連絡いたします。</p>
														<p class="left"><span class="red">※</span>個人情報に関する内容をご確認後、同意いただける場合のみお問い合わせ下さい。<br>
																<span class="red">※</span>の項目は必須項目となります。</p>
														<form id="form1" name="form1" method="post" action="<?php echo $_SERVER['SCRIPT_NAME'] ?>">
																<input type="hidden" name="frm_init" value="1">
																<div class="mdl-shadow--2dp col-xs-12 mgB-50" style="background: #fff;">
																		<div class="mdl-card__title">
																				<p class="mdl-card__title-text">お問い合わせ</p>
																		</div>
																		<div class="mdl-card__supporting-text"><?php echo $error_html; ?></div>
																		<div class="mdl-card__actions mdl-card--border">
																				<div id="form_box">
																						<div class="col-sm-6 col-xs-12">
																								<div class="col-sm-4 col-xs-12 th">お名前/貴社名&nbsp;<span class="red">※</span></div>
																								<div class="col-sm-8 col-xs-12 td">
																										<div class="mdl-textfield mdl-js-textfield">
																												<input class="mdl-textfield__input" name="username" type="text" id="textfield" value="<?php echo $frm['username']['value']; ?>" />
																												<label class="mdl-textfield__label" for="textfield">府中　太郎</label>
																										</div>
																								</div>
																						</div>
																						<div class="col-sm-6 col-xs-12">
																								<div class="col-sm-4 col-xs-12 th">ふりがな&nbsp;<span class="red">※</span></div>
																								<div class="col-sm-8 col-xs-12 td">
																										<div class="mdl-textfield mdl-js-textfield">
																												<input class="mdl-textfield__input" name="furigana" type="text" id="textfield2" value="<?php echo $frm['furigana']['value']; ?>" />
																												<label class="mdl-textfield__label" for="textfield2">ふちゅう　たろう</label>
																										</div>
																								</div>
																						</div>
																						<div class="col-sm-6 col-xs-12">
																								<div class="col-sm-4 col-xs-12 th">所属名</div>
																								<div class="col-sm-8 col-xs-12 td">
																										<div class="mdl-textfield mdl-js-textfield">
																												<input class="mdl-textfield__input" name="shozoku" type="text" id="textfield3" value="<?php echo $frm['shozoku']['value']; ?>" />
																												<label class="mdl-textfield__label" for="textfield3">所属名</label>
																										</div>
																								</div>
																						</div>
																						<div class="col-sm-6 col-xs-12">
																								<div class="col-sm-4 col-xs-12 th">担当者名</div>
																								<div class="col-sm-8 col-xs-12 td">
																										<div class="mdl-textfield mdl-js-textfield">
																												<input class="mdl-textfield__input" name="tantou" type="text" id="textfield4" value="<?php echo $frm['tantou']['value']; ?>" />
																												<label class="mdl-textfield__label" for="textfield4">担当者名</label>
																										</div>
																								</div>
																						</div>
																						<div class="col-sm-12 col-xs-12">
																								<div class="col-sm-2 col-xs-12 th">メールアドレス&nbsp;<span class="red">※</span></div>
																								<div class="col-sm-10 col-xs-12 td">
																										<div class="mdl-textfield mdl-js-textfield">
																												<input class="mdl-textfield__input" name="email2" type="text" id="textfield5" maxlength="250" value="<?php echo $frm['email2']['value']; ?>" />
																												<label class="mdl-textfield__label" for="textfield5">taro***@signite.ne.jp</label>
																										</div>
																								</div>
																						</div>
																						<div class="col-xs-12">
																								<div class="col-sm-2 col-xs-12 th">お問い合わせ種別</div>
																								<div class="col-sm-10 col-xs-12 td">
																										<div class="mdl-textfield mdl-js-textfield">
																												<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="CheckboxGroup1_0">
																														<input type="checkbox" name="toiawase[]" id="CheckboxGroup1_0" class="mdl-checkbox__input" value="SmartGarageシリーズについて" <?php echo $chk['toiawase']['SmartGarageシリーズについて']; ?> />
																														<span class="mdl-checkbox__label">SmartGarageシリーズについて</span> </label>
																												<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="CheckboxGroup1_1">
																														<input type="checkbox" name="toiawase[]" id="CheckboxGroup1_1" class="mdl-checkbox__input" value="デモ環境について" <?php echo $chk['toiawase']['デモ環境について']; ?> />
																														<span class="mdl-checkbox__label">デモ環境について</span> </label>
																												<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="CheckboxGroup1_2">
																														<input type="checkbox" name="toiawase[]" id="CheckboxGroup1_2" class="mdl-checkbox__input" value="その他のお問い合わせ" <?php echo $chk['toiawase']['その他のお問い合わせ']; ?> />
																														<span class="mdl-checkbox__label">その他のお問い合わせ</span> </label>
																										</div>
																								</div>
																						</div>
																						<div class="col-xs-12">
																								<div class="col-sm-2 col-xs-12 th">お問い合わせ内容&nbsp;<span class="red">※</span></div>
																								<div class="col-sm-10 col-xs-12 td">
																										<div class="mdl-textfield mdl-js-textfield">
																												<textarea class="mdl-textfield__input" name="comment" rows= "3" id="textarea" tabindex="6" ><?php echo $frm['comment']['value']; ?></textarea>
																												<label class="mdl-textfield__label" for="textarea">お問い合わせ内容</label>
																										</div>
																								</div>
																						</div>
																				</div>
																		</div>
																		<div class="col-xs-12">
																				<div class="kiyaku col-sm-10 col-sm-offset-1">
																						<h2>【個人情報の収集と利用】</h2>
																						<p>■ご入力頂いた個人情報は以下の目的で利用します。</p>
																						<ul>
																								<li>弊社がユーザーにとって有益だと判断するサービスにおける、郵送による送付、並びにメール・電話・FAXでの連絡。</li>
																								<li>希望されたお問い合わせ内容に関するパンフレットなどの郵送物の送付、並びにメール・電話・FAXでの連絡。</li>
																								<li>本サービスの品質向上のためのアンケート調査・分析。</li>
																								<li>本サービスの運営上、著しくユーザーに影響が有ると思われる場合の郵便物の送付、並びにメール・電話・FAXでの連絡。</li>
																						</ul>
																						<p>■ご入力頂いた個人情報は、弊社が定める個人情報保護コンプライアンス・プログラムに従い、弊社が管理、保有するものとします。</p>
																						<p>■ご入力されたすべての情報に対し、お客様からの要望があった場合速やかに変更・削除を行います。</p>
																						<p>■ご入力いただいた個人情報はご本人の同意がある場合を除き、第三者に公開、提供は致しません。ただし、個人を特定できないよう統計的に処理したデータとしては第三者に開示する場合があります。<br>
																								※　例外として以下に該当する場合は、ご本人の事前の同意を得ることなく、個人情報を第三者に提供することがあります。</p>
																						<ul>
																								<li>法令の定めに基づく場合</li>
																								<li>人の生命、身体または財産の保護のために必要であってご本人の同意を得ることが困難な場合</li>
																								<li>司法手続き上必要不可欠である場合</li>
																						</ul>
																				</div>
																				<div id="consent">
																						<ul>
																								<li>
																										<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="suru">
																												<input type="radio" name="agree" value="1" id="suru" style="border:none;" class="mdl-radio__button" />
																												<span class="mdl-radio__label">同意する</span> </label>
																								</li>
																								<li>
																										<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="shinai">
																												<input type="radio" name="agree" value="2" id="shinai" style="border:none;" class="mdl-radio__button" checked />
																												<span class="mdl-radio__label">同意しない</span> </label>
																								</li>
																						</ul>
																				</div>
																				<p class="submit">
																						<input type="submit" id="confirm" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" value="確認画面へ" />
																				</p>
																		</div>
																</div>
														</form>
												</div>
												<?php include("../../contact_box.php"); ?>
										</div>
								</div>
								<!-- Topへ戻る -->
								<p id="page-top"><a href="#allContent"></a></p>
						</div>
						<!-- footer -->
						<?php include("../../footer.php"); ?>
				</div>
				<!-- contact end --> 
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

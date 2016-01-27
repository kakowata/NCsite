<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Google Appsとの連携でデータの可視化｜SmartGarageシリーズ｜株式会社Signite（シグナイト）</title>
<meta name="keywords" content="府中,SmartGarage,Google Maps,業務効率化,残業削減,地図上操作,GIS,見える化,一元管理,ポリゴン登録,Google Apps連携">
<meta name="description" content="Google Mapsを利用したSmart Garageシリーズで情報の「見える化」と業務の効率化を実現！">
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
<link href="css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="css/common.css">
<link rel="stylesheet" type="text/css" href="css/material.min.css">
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
				<?php include("header.php"); ?>
				<div class="row">
						<div class="col-sm-12 col-xs-12">
								<div id="sg"> 
										<!-- topcongainer ここから　-->
										<div class="topContent">
												<div class="container mainBox"> 
														<!--PCのみ表示-->
														<div class="hidden-xs">
																<div class="pan"><a href="index.php">HOME</a>&nbsp;&gt;&nbsp;SmartGarage</div>
														</div>
														<div class="row">
																<div class="col-sm-6 col-xs-12 topText">
																		<p class="sub_title">「Google Maps」×「システム開発」</p>
																		<h1>SmartGarage<br>
																				series</h1>
																</div>
																<div class="col-sm-6 col-xs-12 iconBox"> <img class="icon" src="images/smartgarage/sgs-img01.png" width="80%" height="100%" alt="Google Appsとの連携でデータの可視化を実現"> </div>
														</div>
														<div class="row">
																<div class="col-sm-12 col-xs-12 topText">
																		<p>直感的な画面、UIによるデータベースへのデータ登録と、登録したデータを最大限活用できるシンプルなデータベースシステムモデル「SmartGarage」シリーズのご紹介です。<br>
																				大きな特長は、データベースに登録する項目を管理画面で自由に設定できる点、Webサイトをあまり利用したことがないユーザーでも直感的に操作できるUI（ユーザインターフェース）です。<br>
																				もちろん、スマートフォン、タブレット、PC全てのデバイスでご利用いただけます。</p>
																</div>
														</div>
												</div>
										</div>
										<!-- topContent ここまで　--> 
										
										<!--PC表示-->
										<div class="hidden-xs">
												<div class="bottom-tease">
														<p class="pagedown"><a href="#sgMap"></a></p>
														<!--input type="button" class="pagedown" id="sgMap" value="Scroll"--> 
												</div>
												<img class="mgB-50" src="images/smartgarage/sgs-img02.png" width="100%" height="100%" alt="Google Appsとの連携でデータの可視化を実現"> </div>
										<!--スマホ表示-->
										<div class="visible-xs"> <img class="mgB-50" src="images/smartgarage/sgs-img02s.png" width="100%" height="100%" alt=""> </div>
										<div class="container mainBox" id="sg_content">
												<div class="col-md-12">
														<h2 class="mgBoth h2_title" style="margin-bottom: 50px;">SmartGarageとは？</h2>
														<div class="col-sm-7 col-xs-12">
																<p class="left">Google Maps を活用したデータベースシステム構築を業務ごとに使いやすくパッケージ化した業務ツールのことです。<br>
																		様々な機能が用意されたSmartGarageは、機能をどんどん追加できる汎用性の高いデータベースシステム構築パッケージです。<br>
																		予め用意されているユニット（機能）を組み合わせて開発を行うため、従来のシステム構築に比べ大幅な工数削減とスピード化を実現します。 </p>
														</div>
														<div class="col-sm-4 col-sm-offset-1 col-xs-10 col-xs-offset-1"><img class="mgB-20" src="images/smartgarage/sgs-img01.png" width="100%" height="100%" alt="Maps"> </div>
												</div>
												<!-- SmartGarage特長　ここから　-->
												<div class="col-sm-12 col-xs-12">
														<div class="col-sm-6 pa-15 mgB-20">
																<h3>最短1週間で導入可能！</h3>
																<div class="col-xs-12">
																		<div class="col-xs-3"> <img src="images/top/icon_01.png" width="100%" height="100%" alt="最短1週間"> </div>
																		<p class="col-xs-9 left pa-15">お申し込みからサービス利用開始までの期間は、基本的に1週間から3週間程度となります。今すぐに問題を解決したい！<br>
																				そんな方は今すぐお問い合わせ下さい。 </p>
																</div>
														</div>
														<div class="col-sm-6 pa-15 mgB-20">
																<h3>データの見える化を実現</h3>
																<div class="col-xs-12">
																		<div class="col-xs-3"> <img src="images/top/icon_02.png" width="100%" height="100%" alt="データの見える化"> </div>
																		<p class="col-xs-9 left pa-15">Google MapsやGoogle MapsEngineをデータベースシステムに組み込むことで、既にあるビジネスデータに対して位置情報を関連付けることもできます。データ登録の操作性や視覚的な表現が可能となります。 </p>
																</div>
														</div>
												</div>
												<div class="col-sm-12">
														<div class="col-sm-6 pa-15 mgB-20">
																<h3>データのリアルタイム化</h3>
																<div class="col-xs-12">
																		<div class="col-xs-3"> <img src="images/top/icon_03.png" width="100%" height="100%" alt="リアルタイム化"> </div>
																		<p class="col-xs-9 left pa-15">クラウドサーバーを活用し、瞬時にデータを保存。離れた場所からもすぐに保存したデータを閲覧でき時間の有効化につながります。 </p>
																</div>
														</div>
														<div class="col-sm-6 pa-15 mgB-20">
																<h3>どんなデバイスでも利用可能</h3>
																<div class="col-xs-12">
																		<div class="col-xs-3"> <img src="images/top/icon_04.png" width="100%" height="100%" alt="どんなデバイスでも"> </div>
																		<p class="col-xs-9 left pa-15">PC、スマートフォンはもちろん、タブレットなど多数のデバイスに対応しています。オフィス以外に、外出先や自宅からもサービスを利用できます。</p>
																</div>
														</div>
												</div>
												<div class="col-sm-12 pa-15  mgB-50">
														<h3>Google Apps連携でいつでも誰でも操作が可能</h3>
														<p class="left">スプレットシートを利用しExcel感覚でデータの入力や管理ができます。また、GoogleAppならネットに繋がるデバイスがあればいつでも誰でも操作が可能です。 </p>
												</div>
										</div>
								</div>
								<div class="container mainBox" id="smartgarage">
										<h2 class="mgBoth h2_title">SmartGarageシリーズ</h2>
										<!-- SGM -->
										<div class="col-sm-12 col-xs-12 sg_box" id="sgMap">
												<div class="col-sm-3 col-xs-12 center mgB-20">
														<div class="col-sm-12 col-xs-5"><img src="images/smartgarage/sgmap.png" width="70%" height="100%" alt="Google Maps を活用して地図上で情報を見える化"></div>
														<div class="col-sm-12 col-xs-7">
																<h3>SmartGarage<br>
																		<span>Map</span></h3>
																<input type="button" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onClick="location.href='smartgaragemap.php'" value="詳細を見る">
														</div>
												</div>
												<div class="col-sm-9 col-xs-12 pa-15">
														<h2>地図上で必要な情報を<br class="visible-xs">
																自由自在に登録！</h2>
														<p>クラウド型現地調査システム。Google Maps APIを活用し地図上に物件の詳細内容を登録したり地図上に図形を描くことができるのでデータの「見える化」につながります。<br>
																たとえば測量の現場で、土地や建物を写真に収めるなど調査結果を現地で入力し、そのまま帳票へ出力できるので業務の手間を減らせます。 遠隔地でも確認できるので、いつでもどこでも最新のデータを共有できます。</p>
														<p>◆オススメ職種</p>
														<ul>
																<li>建設現場</li>
																<li>不動産関係</li>
																<li>観光協会</li>
														</ul>
												</div>
										</div>
										<!-- SGD -->
										<div class="col-sm-12 col-xs-12 sg_box" id="sgData">
												<div class="col-sm-3 col-md-push-9 center mgB-20">
														<div class="col-sm-12 col-xs-5"><img src="images/smartgarage/sgData.png" width="90%" height="100%" alt="大量のデータと写真をすぐにその場で登録"></div>
														<div class="col-sm-12 col-xs-7">
																<h3>SmartGarage<br>
																		<span>Data</span></h3>
																<input type="button" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onClick="location.href='smartgaragedata.php'" value="詳細を見る">
														</div>
												</div>
												<div class="col-sm-9 col-md-pull-3 pa-15">
														<h2>大量のデータや写真を<br class="visible-xs">
																カンタン管理</h2>
														<p class="text-center">クラウド環境を利用した現地調査のためのシステムです。タブレットで現地からすぐに情報登録。さらに撮影した写真も位置情報と合わせてアップできるので、正確かつ迅速な管理が「見える化」できます。<br>
																現場でデータ入力、登録ができるから事務所に戻ってからの入力作業も必要がありません。
																残業時間もなくなり時間と業務の効率化を実現します！<br>
																オプションでGoogle MapsやGoogle Appsとの連携も。</p>
														<p>◆オススメ職種</p>
														<ul>
																<li>建設現場</li>
																<li>測技現場</li>
																<li>不動産関係</li>
														</ul>
												</div>
										</div>
										<!-- SGMi -->
										<div class="col-sm-12 col-xs-12 sg_box" id="sgMieruka">
												<div class="col-sm-3 col-xs-12 center mgB-20">
														<div class="col-sm-12 col-xs-5"><img src="images/smartgarage/sgMieru.png" width="100%" height="100%" alt="進捗率や販売率などの比較を見える化"></div>
														<div class="col-sm-12 col-xs-7">
																<h3>SmartGarage<br>
																		<span>Mieruka</span></h3>
																<input type="button" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" value="準備中" disabled style="background-color:#ddd; border: none">
														</div>
												</div>
												<div class="col-sm-9 col-xs-12 pa-15">
														<h2>進捗率や販売率などの<br class="visible-xs">
																比較を見える化</h2>
														<p>クラウド環境を利用したデータの「見える化」システムです。Google Maps上に「売上目標」「売上」「進捗率」などのポイント情報を配置。競合店の販売エリアなどをピンとポリゴンで可視化し、現在の状況把握や販売分析に役立ちます。<br>
																また、時系列で月ごとの売上結果などをグラフ化できる機能も搭載。さらなる「見える化」が可能となります。 </p>
														<p>◆オススメ職種</p>
														<ul>
																<li>飲食店</li>
																<li>販売系</li>
																<li>営業マン</li>
														</ul>
												</div>
										</div>
										<!-- SGI -->
										<div class="col-sm-12 col-xs-12 sg_box" id="sgIgnite">
												<div class="col-sm-3 col-md-push-9 center mgB-20">
														<div class="col-sm-12 col-xs-5"><img src="images/smartgarage/sgIgn.png" width="90%" height="100%" alt="現在地と移動経路を一元管理で効率化"> </div>
														<div class="col-sm-12 col-xs-7">
																<h3>SmartGarage<br>
																		<span>IGNITE</span></h3>
																<input type="button" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" value="準備中" disabled style="background-color:#ddd; border: none">
														</div>
												</div>
												<div class="col-sm-9 col-md-pull-3 pa-15">
														<h2>現在地と移動経路を<br class="visible-xs">
																一元管理で効率化</h2>
														<p>クラウド環境を利用した動態管理システムです。Google Maps上に管理するユーザを配置し現在地の取得、移動情報を取得。リアルタイムでユーザーの動きを把握（見える化）できるので、ユーザの位置から一番近い「必要な情報」までの誘導や指示も出すことができます。それにより時間の短縮と業務効率につながります。</p>
														<p>◆オススメ職種</p>
														<ul>
																<li>飲食店</li>
																<li>タクシー会社</li>
																<li>運送業者</li>
														</ul>
												</div>
										</div>
										<!-- SGL -->
										<div class="col-sm-12 col-xs-12 sg_box" id="sgLocator">
												<div class="col-sm-3 col-xs-12 center mgB-20">
														<div class="col-sm-12 col-xs-5"><img src="images/smartgarage/sgLoca.png" width="90%" height="100%" alt="ユーザーの必要な情報をMAP上に表示"></div>
														<div class="col-sm-12 col-xs-7">
																<h3>SmartGarage<br>
																		<span>Locator</span></h3>
																<input type="button" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" value="準備中" disabled style="background-color:#ddd; border: none">
														</div>
												</div>
												<div class="col-sm-9 col-xs-12 pa-15">
														<h2>ユーザーの必要な<br class="visible-xs">
																データをMAP上に表示</h2>
														<p>クラウド環境を利用した情報連動交流ツールです。<br>
																Google Maps上にお店のデータをプロットし、現在地からのルート案内や周辺の様子もストリートビューで確認可能。載せる内容も自由に登録。ターゲットを絞ったオリジナルマップを作成・提供することができます。
																PC以外にもスマートフォンやタブレットでも操作。</p>
														<p>◆オススメ職種</p>
														<ul>
																<li>飲食店</li>
																<li>販売系</li>
																<li>営業マン</li>
														</ul>
												</div>
										</div>
								</div>
						</div>
						<!-- Topへ戻る -->
						<p id="page-top"><a href="body"></a></p>
						<!-- footer -->
						<?php include("footer.php"); ?>
				</div>
		</div>
		<!-- mdl-layout mdl-js-layout mdl-layout-fixed-header end--> 
</div>
<!--allContent end -->
<link rel="stylesheet" href="css/liquid-slider.css">
<link href="css/jquery.fs.boxer.min.css" type="text/css" rel="stylesheet">
<link rel="icon" type="image/x-icon" href="favicon.ico">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="http://fonts.googleapis.com/css?family=Roboto:400,300,100" rel="stylesheet" type="text/css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script> 
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> 
<script src="js/bootstrap.min.js"></script> 
<script src="js/jquery.easing.min.js"></script> 
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.4/jquery.touchSwipe.min.js"></script> 
<script src="js/jquery.liquid-slider.min.js"></script> 
<script src="js/material.min.js" type="text/javascript"></script> 
<script src="js/common.js" type="text/javascript"></script>
</body>
</html>

<?php // -*- coding: utf-8-dos; -*-

/*
 *
 * index.php : 資料請求、お問い合わせ
 * $Id: conf.php 347 2012-06-03 19:49:19Z debizoh $
 *
 */


//templates の定義 thanks のみ運用環境で変更必要
$templates = array(
	'index' => './index.tpl',
	'check' => './confirm.tpl',
	'error' => './index.tpl',
	'mail_admin' => 'mailtemplate_admin.tpl',
	'mail_user' => 'mailtemplate_user.tpl',
	//http://から絶対URLで記載
	'thanks' => 'http://www.nagagutsu-club.co.jp/form/recruit/thanks.php',
	//戻るボタンのvalue htmlと合わせる
	'backbtn_value' => '内容を修正する',
);


$mailset = array(
	/* ユーザ宛メール */
	'user' => array(
		'subject' => '応募いただきありがとうございます。【有限会社長靴倶楽部】',	//メールsubject
		'mailfrom' => 'info@nagagutsu-club.co.jp'	//mail from
		),

	'admin' => array(
		'subject' => 'リクルートページから申込みがありました。',	//メールsubject
		// mailto 複数指定する場合は、arrayの中に追加する
		// 'mailaddress', という形で行を追加していくことで複数アドレスに送信できる
		'mailto' => array(
			//'business@nagagutsu-club.co.jp',
			'k-watanabe@nagagutsu-club.co.jp',
		),
		'mailfrom' => 'info@nagagutsu-club.co.jp',
	),
);

?>

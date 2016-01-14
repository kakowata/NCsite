<?php
	/*
		Admin 向け MailTemplate
		$Id: mailtemplate_admin.tpl 347 2012-06-03 19:49:19Z debizoh $
	*/
	$mailtemplate_admin = <<<MAIL_TEMPLATE
日時：{$nowdate}

職種：{$maildatas['job']['value']}

お名前：{$maildatas['username']['value']}

ふりがな：{$maildatas['furigana']['value']}

電話番号：{$maildatas['telephone']['value']}

メールアドレス：{$maildatas['email2']['value']}

生年月日：{$maildatas['birth']['value']}

郵便番号：{$maildatas['postal']['value']}

住所：{$maildatas['address']['value']}

性別：{$maildatas['sex']['value']}

自己PR：
{$maildatas['comment']['value']}

質問、確認事項：
{$maildatas['question']['value']}


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
株式会社S:GN:TE（シグナイト）
------------------------------------------------------
〒183-0023
東京都府中市宮町2-15-13 第15三ツ木ビル6F
Tel：042-354-1860　Fax：042-354-1803

◇電話でのお問い合わせ
平日（月-金）10:00～19:00

お急ぎの場合は、「総合お問い合わせ」をご利用下さい。

------------------------------------------------------
★汎用型データベースシステム構築パッケージ『Smart Garage』
　機能をどんどん追加できる汎用性の高いデータベースシステム

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MAIL_TEMPLATE;
?>
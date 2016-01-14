<?php
	/*
		Admin 向け MailTemplate
		$Id: mailtemplate_admin.tpl 347 2012-06-03 19:49:19Z debizoh $
	*/
	$mailtemplate_admin = <<<MAIL_TEMPLATE
日時：{$nowdate}

お名前/貴社名：{$maildatas['username']['value']}

ふりがな：{$maildatas['furigana']['value']}

所属名：{$maildatas['shozoku']['value']}

担当者名：{$maildatas['tantou']['value']}

メールアドレス：{$maildatas['email2']['value']}

お問い合わせ種別：{$maildatas['toiawase']['value']}

お問い合わせ内容：
{$maildatas['comment']['value']}


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
株式会社Signite（シグナイト）
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
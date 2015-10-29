<?php
	/*
		User 向け MailTemplate
		$Id: mailtemplate_user.tpl 347 2012-06-03 19:49:19Z debizoh $
	*/
	$mailtemplate_user = <<<MAIL_TEMPLATE
このたびはお申込みいただきありがとうございました。
追って弊社担当よりご連絡させていただきます。

=========================================================
送信内容
=========================================================

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

=========================================================

ご不明な点やご質問などがございましたらお気軽に下記まで
お問い合わせ下さい。

※注意事項※
このメールは送信専用メールアドレスから配信されています。
このままご返信いただいてもお答えできませんのでご了承下さい。

本メールにお心当たりのない方は business@nagagutsu-club.co.jp まで
ご連絡下さい。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
有限会社 長靴倶楽部
------------------------------------------------------
〒183-0023
東京都府中市宮町2-15-13 第15三ツ木ビル6F
Tel：042-354-1860　Fax：042-354-1803

◇電話でのお問い合わせ
平日（月-金）10:00～19:00

お急ぎの場合は、「総合お問い合わせ」をご利用下さい。
https://www.nagagutsu-club.co.jp/form/contact/
------------------------------------------------------
★汎用型データベースシステム構築パッケージ『Smart Garage』
　機能をどんどん追加できる汎用性の高いデータベースシステム
URL: http://www.nagagutsu-club.co.jp/smartgarage.php
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MAIL_TEMPLATE;
?>
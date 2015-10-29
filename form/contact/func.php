<?php // -*- coding: utf-8-dos; -*-

/*
 *
 * func.php : 共通関数・変数
 * $Id: func.php 347 2012-06-03 19:49:19Z debizoh $
 */


/*
 * フォームからの入力で、すべてのフィールドで許可しない文字列の PCRE
 */
if (preg_match('/ \p{C} /msxu', "\n") === FALSE) {
  $GLOBALS['forbidden_form_value_pcre'] = '/[\a\e\f\t\x00]/msux';
}
else {
  /*
   * Unicode character properties
   * Since PHP 4.4.0 and 5.1.0, three additional escape sequences to match
   * generic character types are available when UTF-8 mode is selected.
   * PCRE による Unicode プロパティサポートも必要。
   */
  $GLOBALS['forbidden_form_value_pcre'] = '/[\a\e\f\t\x00\p{Cf}\p{Cn}]/msux';
}


/*
 * 曜日
 */
$GLOBALS['day_of_week_short_str'] = array(
  'Mon' => '月',
  'Tue' => '火',
  'Wed' => '水',
  'Thu' => '木',
  'Fri' => '金',
  'Sat' => '土',
  'Sun' => '日'
);

$GLOBALS['error'] = '';

$DEF_pref = array(
	//JIS X 0401 と合致
	'1'		=>	'北海道',
	'2'		=>	'青森県',
	'3'		=>	'岩手県',
	'4'		=>	'宮城県',
	'5'		=>	'秋田県',
	'6'		=>	'山形県',
	'7'		=>	'福島県',
	'8'		=>	'茨城県',
	'9'		=>	'栃木県',
	'10'	=>	'群馬県',
	'11'	=>	'埼玉県',
	'12'	=>	'千葉県',
	'13'	=>	'東京都',
	'14'	=>	'神奈川県',
	'15'	=>	'新潟県',
	'16'	=>	'富山県',
	'17'	=>	'石川県',
	'18'	=>	'福井県',
	'19'	=>	'山梨県',
	'20'	=>	'長野県',
	'21'	=>	'岐阜県',
	'22'	=>	'静岡県',
	'23'	=>	'愛知県',
	'24'	=>	'三重県',
	'25'	=>	'滋賀県',
	'26'	=>	'京都府',
	'27'	=>	'大阪府',
	'28'	=>	'兵庫県',
	'29'	=>	'奈良県',
	'30'	=>	'和歌山県',
	'31'	=>	'鳥取県',
	'32'	=>	'島根県',
	'33'	=>	'岡山県',
	'34'	=>	'広島県',
	'35'	=>	'山口県',
	'36'	=>	'徳島県',
	'37'	=>	'香川県',
	'38'	=>	'愛媛県',
	'39'	=>	'高知県',
	'40'	=>	'福岡県',
	'41'	=>	'佐賀県',
	'42'	=>	'長崎県',
	'43'	=>	'熊本県',
	'44'	=>	'大分県',
	'45'	=>	'宮崎県',
	'46'	=>	'鹿児島県',
	'47'	=>	'沖縄県',
);



/*
 * refresh によるリダイレクト
 */
function redirect_local_and_exit($path, $delay_sec = 1, $text = 'redirecting...') {
  $content = "$delay_sec;url=$path";
?>
<html>
<head><meta http-equiv="refresh" content="<?php echo $content; ?>"><script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-1176888-2']);
  _gaq.push(['_setDomainName', '.nagagutsu-club.co.jp']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
</head>
<body>
<p>
<!--
<?php echo htmlspecialchars($text, ENT_QUOTES, 'UTF-8'); ?>
-->
</p>
</body></html>
<?php
  exit();
}

function redirect_http($url)
{
	header("Location: $url");
	exit();
}

/*
 * メールを UTF-8 (CTE: base64) で送信する
 */
function send_mail($from, $to, $subject, $body,$userfrom) {
  $headers = array(
    'MIME-Version: 1.0',
    'Content-Type: Text/Plain; charset=ISO-2022-JP',
    'Content-Transfer-Encoding: 7bit',
    'From: ' . $userfrom
  );

	mb_internal_encoding('UTF-8');  

	//PHP >= 5 param added. 
	//$subject = mb_encode_mimeheader($subject, 'ISO-2022-JP','B',"\n",1);

	$subject = mb_encode_mimeheader($subject, 'ISO-2022-JP','B',"\n");


	$body = mb_convert_encoding($body, 'ISO-2022-JP', 'UTF-8');

    //SafeModeの場合は 第5パラメータは入れられない
	if(@ini_get('safe_mode') )
	{
		  $result = mail($to, $subject,
		                 $body,
		                 join("\n", $headers)
		                 );
    }
    else
    {
		  $result = mail($to, $subject,
		                 $body,
		                 join("\n", $headers),
		                 '-f ' . $from);
	}

  return $result;
}


function is_valid_encoding( $str, $encoding )
{
    switch ( $encoding ) {
    case 'ASCII' :
        $regex = '/(?:'
            . '[\x00-\x7f]'                                             // ASCII (mb_check_encoding)
//          . '[\x00\x09\x0a\x0d\x20-\x7f]'                             // ASCII (mb_detect_encoding)
            . ')/';
        break;

    case 'SJIS' :
        $regex = '/(?:'
            . '[\x00-\x7f]|'                                            // ASCII
            . '[\xa1-\xdf]|'                                            // いわゆる半角カナ
            . '[\x81-\x9f\xe0-\xef][\x40-\x7e\x80-\xfc]'
            . ')/';
        break;

    case 'SJIS-win' :
        $regex = '/(?:'
            . '[\x00-\x7f]|'                                            // ASCII
            . '[\xa1-\xdf]|'                                            // いわゆる半角カナ
            . '[\x81-\x9f\xe0-\xfc][\x40-\x7e\x80-\xfc]'
            . ')/';
        break;

    case 'EUC-JP' :
        $regex = '/(?:'
            . '[\x00-\x7f]|'                                            // ASCII
            . '[\xa1-\xfe][\xa1-\xfe]|'
            . '\x8e[\xa1-\xfe]|'                                        // いわゆる半角カナ
            . '\x8f[\xa1-\xfe][\xa1-\xfe]'
            . ')/';
        break;

    case 'eucJP-win' :
        $regex = '/(?:'
            . '[\x00-\x7f]|'                                            // ASCII
            . '[\xa1-\xfe][\xa1-\xfe]|'
            . '\x8e[\xa1-\xfe]|'                                        // いわゆる半角カナ
            . '\x8f[\xa1-\xfe][\xa1-\xfe]'
            . ')/';
        break;

    case 'CP51932' :
        $regex = '/(?:'
            . '[\x00-\x7f]|'                                            // ASCII
            . '[\xa1-\xfe][\xa1-\xfe]|'
            . '\x8e[\xa1-\xfe]'                                         // いわゆる半角カナ
            . ')/';
        break;

    case 'UTF-8' :                                                      // 参照: http://tools.ietf.org/html/rfc3629
        $regex = '/(?:'
            . '[\x00-\x7f]|'                                            // U+0000   - U+007F
            . '[\xc2-\xdf][\x80-\xbf]|'                                 // U+0080   - U+07FF
            . '\xe0[\xa0-\xbf][\x80-\xbf]|'                             // U+0800   - U+0FFF
            . '[\xe1-\xec][\x80-\xbf][\x80-\xbf]|'                      // U+1000   - U+CFFF
            . '\xed[\x80-\x9f][\x80-\xbf]|'                             // U+D000   - U+D7FF
            . '[\xee-\xef][\x80-\xbf][\x80-\xbf]|'                      // U+E000   - U+FFFF
            . '\xf0[\x90-\xbf][\x80-\xbf][\x80-\xbf]|'                  // U+10000  - U+3FFFF
            . '[\xf1-\xf3][\x80-\xbf][\x80-\xbf][\x80-\xbf]|'           // U+40000  - U+FFFFF
            . '\xf4[\x80-\x8f][\x80-\xbf][\x80-\xbf]|'                  // U+100000 - U+10FFFF
            . ')/';
        break;

    case 'ISO-2022-JP' :
        $regex = '/(?:'
            . '[\x00-\x7f]|'                                            // ASCII
            . '\x1b\x24[\x40\x42](?:[\x21-\x7e][\x21-\x7e])+|'          // ESC $ @,B
            . '\x1b\x24\x28[\x40\x42\x44](?:[\x21-\x7e][\x21-\x7e])+|'  // ESC $ ( @,B,D
            . '\x1b\x28\x42'                                            // ESC ( B
            . ')/';
        break;

    case 'ISO-2022-JP-MS' :
        $regex = '/(?:'
            . '[\x00-\x7f]|'                                            // ASCII
            . '\x1b\x24[\x40\x42](?:[\x21-\x7e][\x21-\x7e])+|'          // ESC $ @,B
            . '\x1b\x24\x28[\x40\x42\x44](?:[\x21-\x7e][\x21-\x7e])+|'  // ESC $ ( @,B,D
            . '\x1b\x28\x42|'                                           // ESC ( B
            . '\x1b\x28\x4a[\x00-\x1a\x1c-\x7f]+|'                      // ESC ( J
            . '\x1b\x28\x49[\x00-\x1a\x1c-\x7f]+'                       // ESC ( I
            . ')/';
        break;

    case 'UTF-16' :
        if ( (bool)preg_match( '/\A\xff\xfe/', $str ) ) {               // BOM(Little Endian)
            $regex = '/(?:'
                . '[\x00-\xff][\x00-\xd7\xe0-\xff]|'                    // U+0000-U+D7FF, U+E000-U+FFFF
                . '[\x00-\xff][\xd8-\xdb][\x00-\xff][\xdc-\xdf]'        // サロゲートペア(U+D800-U+DBFF)
                . ')/';
        }
        else {                                                          // BOM(Big Endian) BOMがない場合は Big Endian
            $regex = '/(?:'
                . '[\x00-\xd7\xe0-\xff][\x00-\xff]|'                    // U+0000-U+D7FF, U+E000-U+FFFF
                . '[\xd8-\xdb][\x00-\xff][\xdc-\xdf][\x00-\xff]'        // サロゲートペア(U+D800-U+DBFF)
                . ')/';
        }
        break;

    case 'UTF-16BE' :                                                   // BOMは不可
        $regex = '/(?:'
            . '[\x00-\xd7\xe0-\xff][\x00-\xff]|'                        // U+0000-U+D7FF, U+E000-U+FFFF
            . '[\xd8-\xdb][\x00-\xff][\xdc-\xdf][\x00-\xff]'            // サロゲートペア(U+D800-U+DBFF)
            . ')/';
        break;

    case 'UTF-16LE' :                                                   // BOMは不可
        $regex = '/(?:'
            . '[\x00-\xff][\x00-\xd7\xe0-\xff]|'                        // U+0000-U+D7FF, U+E000-U+FFFF
            . '[\x00-\xff][\xd8-\xdb][\x00-\xff][\xdc-\xdf]'            // サロゲートペア(U+D800-U+DBFF)
            . ')/';
        break;

    default :
        return FALSE;
    }

    $result = preg_replace( $regex, '', $str );
    if ( $result !== '' ) {
        return FALSE;
    }
    return TRUE;
}

function checkDoubleChar( $item )
{
	if (!preg_match("/(?:\xEF\xBD[\xA1-\xBF]|\xEF\xBE[\x80-\x9F])|[\x20-\x7E]/", $item))
	{
		return true;
	}
	return false;
}

?>

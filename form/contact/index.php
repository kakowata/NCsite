<?php // -*- coding: utf-8-dos; -*-

/*
 *
 * index.php : 資料請求、お問い合わせ
 * $Id: index.php 347 2012-06-03 19:49:19Z debizoh $
 *
 */

error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);
mb_internal_encoding('UTF-8');
mb_http_output('UTF-8');
mb_regex_encoding('UTF-8');


// フォームで吐き出される項目
$frm = array();


$flag_frmok = 0;
$hidden_fields = "";
$error_data = array();

// フォームInputが分割されているものの定義
$frm_separated = array(
//	'郵便番号1' => '郵便番号',
//	'郵便番号2' => '郵便番号',
//	'電話番号1' => '電話番号',
//	'電話番号2' => '電話番号',
//	'電話番号3' => '電話番号',
);

/*
 * フォームフィールドの定義
 */
$fields = array(
  'お名前'  => array('name'      => 'username',
                                    'initial'   => '',
                                    'required'  => TRUE,
                                    'match'     => '/\A.{1,255}\z/msux',
                                    'multiline' => FALSE,
                                    'value'     => ''),
  'ふりがな'                 => array('name'      => 'furigana',
                                    'initial'   => '',
                                    'required'  => TRUE,
                                    'match'     => '/\A.{1,255}\z/msux',
                                    'multiline' => FALSE,
                                    'value'     => ''),
  '所属名'                 => array('name'      => 'shozoku',
                                    'initial'   => '',
                                    'required'  => FALSE,
                                    'match'     => '/\A.{1,255}\z/msux',
                                    'multiline' => FALSE,
                                    'value'     => ''),
  '担当者名'                 => array('name'      => 'tantou',
                                    'initial'   => '',
                                    'required'  => FALSE,
                                    'match'     => '/\A.{1,255}\z/msux',
                                    'multiline' => FALSE,
                                    'value'     => ''),
  'メールアドレス'         => array('name'      => 'email2',
                                    'initial'   => '',
                                    'required'  => TRUE,
                                    'match'     => '/\A.{1,255}\z/msux',
                                    'multiline' => FALSE,
                                    'value'     => ''),
  'お問い合わせ種別'         => array('name'      => 'toiawase',
                                    'initial'   => '',
                                    'required'  => FALSE,
                                    'match'     => '/\A.{1,200}\z/msux',
                                    'multiline' => FALSE,
                                    'value'     => ''),
  'お問い合わせ内容'   => array('name'      => 'comment',
                                    'initial'   => '',
                                    'required'  => TRUE,
                                    'match'     => '/\A.{1,2000}\z/msux',
                                    'multiline' => TRUE,
                                    'value'     => ''),
  'frm_init'   => array('name'      => 'frm_init',
                                    'initial'   => '',
                                    'required'  => TRUE,
                                    'match'     => '/\A.{1,2}\z/msux',
                                    'multiline' => FALSE,
                                    'value'     => ''),
  'confirm'           => array('name'      => 'confirm',
                               'initial'   => '',
                               'required'  => FALSE,
                               'match'     => '/\A[a-zA-Z0-9+\/=]{1,20}\z/msux',
                               'multiline' => FALSE,
                               'value'     => ''),
  'agree'                   => array('name'      => 'agree',
                                    'initial'   => '',
                                    'required'  => FALSE,
                                    'match'     => '/1/msux',
                                    'multiline' => FALSE,
                                    'value'     => '')
);


require('./func.php');
require('./conf.php');



// magic word
$confirm_word = base64_encode($_SERVER['REMOTE_ADDR']);

/*
 * フォームフィールド値の検査
 */
// 入力が必要なフィールド名称(name 属性ではない)
$error_field_names = array();
// フィールドごとに検査
foreach ($fields as $key => $field)
{
  $type_ary = 0;

  $value = isset($_POST[ $field['name'] ]) ? $_POST[ $field['name'] ] : '';

  if ( isset($_POST[ $field['name'] ]) )
  {
	if ( is_array( $_POST[ $field['name'] ] ) )
    {
		$type_ary = 1;
		$value = '';
		foreach ($_POST[ $field['name'] ] as $ary_val )
		{
			if ( $value != '') { $value .= ", ";}
			$value .= $ary_val;
		}
	}
  }

  // フォーム表示用フィールドを初期化するため、2重にセット 
  $special_value = htmlspecialchars($value, ENT_QUOTES);
  $frm[ $fields[$key]['name'] ]['value'] = $special_value;
  $maildatas[ $fields[$key]['name'] ]['value'] = $value;

  // UTF-8?
  if (!is_valid_encoding($value, 'UTF-8')) {
    // ignore invalid encoding
    $error_field_names[] = $key;
    $error_data[] = $key . 'に不正なデータが入力されています。';
    continue;
  }
  // 必須？
  if ($field['required']) {
    // 初期値と一緒？
    if ($value == $field['initial'] || $value == '') {
      $error_field_names[] = $key;

	  if (isset($frm_separated[$key]) )
	  {
			if (! isset($frm_separated_err[ $frm_separated[$key] ]) )
			{
				$frm_separated_err[ $frm_separated[$key] ] = 1;
				$error_data[] = $frm_separated[$key] . 'を入力してください。';
			}
	  }
	  else
	  {
		  $error_data[] = $key . 'を入力してください。';
	  }
      continue;
    }
  }
  elseif ($value == $field['initial'] || $value == '') {
    $fields[$key]['value'] = '';
    continue;
  }
  // 不正リクエストかも
  if ( 0 < preg_match($forbidden_form_value_pcre, $value) ) {
      $error_field_names[] = $key;
      continue;
  }
  // 複数行を許可するかどうか
  if (!$field['multiline']) {
    $value = preg_replace('/\r\n/msux', ' ', $value);
    $value = preg_replace('/\n/msux',   ' ', $value);
    $value = preg_replace('/\r/msux',   ' ', $value);
  }
  else {
    $value = preg_replace('/\r\n/msux', "\n", $value);
    $value = preg_replace('/\r/msux',   "\n", $value);
  }
  // magic quotes が有効ならごにょる
  if (get_magic_quotes_gpc()) {
    $value = preg_replace('/[\\\\]+[\']/msux', "'", $value);
    $value = preg_replace('/[\\\\]+[\"]/msux', '"', $value);
    $value = preg_replace('/[\\\\]+/msux',   '\\', $value);
  }
  // match してる？
  if ( preg_match($field['match'], $value) == 0) {
      // not match
      $error_field_names[] = $key;
      continue;
  }
  $fields[$key]['value'] = $value;
  $special_value = htmlspecialchars($value, ENT_QUOTES);

  $frm_name = $fields[$key]['name'];
  $maildatas[ $fields[$key]['name'] ]['value'] = $value;


  if ($type_ary == 1)
  {
	foreach ($_POST[ $fields[$key]['name'] ] as $ary_val)
	{
		$spec_value = htmlspecialchars($ary_val, ENT_QUOTES);
		$hidden_fields .=  <<<HTML
<input type="hidden" name="{$frm_name}[]" value="{$spec_value}">\n
HTML;
	}
  }
  else
  {
	$hidden_fields .=  <<<HTML
<input type="hidden" name="{$frm_name}" value="{$special_value}">\n
HTML;
  }


  $frm[ $fields[$key]['name'] ]['value'] = $special_value;

}

// その他細かい制御はここでする
/*
if (isset($frm['contact']['value']))
{
	$match = 0;
	foreach ($select_subjects as $key => $ary_val)
	{
		if ($select_subjects[$key]['name'] == $frm['contact']['value'])
		{
			$match = 1;
			$select_subjects[$key]['checked'] = 'checked';
			$subject = $select_subjects[$key]['subject'];
			$mailto = $select_subjects[$key]['mailto'];
			$mailfrom = $select_subjects[$key]['mailfrom'];
		}
		else
		{
			$select_subjects[$key]['checked'] = '';
		}
	}

	if ($match == 0 && $frm['contact']['value'] != '')
	{
		$error_data[] = '質問の種類が不正です。';
	}
}
*/


$val_toiawase = array(
	'SmartGarageシリーズについて',
	'デモ環境について',
	'その他のお問い合わせ',
);

foreach ($val_toiawase as $value)
{
	$chk['toiawase'][$value] = '';

	if ( isset($_POST['toiawase']) )
	{
		foreach ($_POST['toiawase'] as $v2)
		{
			if ($v2 == $value)
			{
				$chk['toiawase'][$value] = ' checked';
				break;
			}
		}
	}
}



if (count($error_data) == 0)
{
	if ( $frm['agree']['value'] != 1)
	{
		$error_data[] = '個人情報保護方針へ同意されなければ、お問い合わせはできません';
	}

	if ( preg_match('/\A [\#\$\%\&\'\*\+\-\/\=\?\^\_\`\{\|\}\~\.a-z0-9]{1,100} @ [\-\_\.a-z0-9]{2,100}? \. [a-z]{2,100} \z/msuxi', $frm['email2']['value']) == 0)
	{
		$error_data[] = 'メールアドレスを正しく入力してください。';
	}

	$kana = $frm['furigana']['value'];
	$kana = mb_convert_kana($kana, 'cs','UTF-8');

	if (!(mb_ereg('^[ あ-んー]+$', $kana)))
	{
		$error_data[] = 'ふりがなは全角ひらがなでご入力ください。';
	}
	else
	{
		if (!(preg_match('/^[　あ-んー]+$/u', $frm['furigana']['value'])))
		{
		//if (!(mb_ereg('^[　ァ-ヶー]+$', $frm['furigana']['value'])))
		//{
			$error_data[] = 'ふりがなは全角ひらがなでご入力ください。';
		}
	}



}

$submit_btn_value = '';
if (isset($_POST['submit']) )
{
	$submit_btn_value = $_POST['submit'];
}

/*
 * 入力エラーが無く、確認が済んだら、メール送信
 */

if (! $error_field_names
    && isset($_POST['confirm'])
    && $fields['confirm']['value'] == $confirm_word
    && $submit_btn_value != '内容を修正する')
{

  // Subject
  //$subject = '[お問い合わせ] ';

  // メール本文
  $body = '';
  $table = array();
  $table[] = array('th' => '接続 IP アドレス',
                   'td' => $_SERVER['REMOTE_ADDR']);

  // 文章内の余計な改行を削除する
	$mailtemplate_admin = str_replace('\r\n', '\n', $mailtemplate_admin);
	$mailtemplate_user = str_replace('\r\n', '\n', $mailtemplate_user);
									 

  $nowdate = date('Y/m/d'); 

  require_once($templates['mail_admin']);

  if (is_array($mailset['admin']['mailto']) )
  {
      foreach ($mailset['admin']['mailto'] as $mailto)
      {
		  // 送信
		  $result = send_mail($mailset['admin']['mailfrom'], $mailto, $mailset['admin']['subject'], $mailtemplate_admin,$frm['email2']['value']);
	      if (!$result)
	      {
	            redirect_local_and_exit($templates['error'], 3600, 'メールを送信できませんでした。');
	      }
	  }
  }
  else
  {
	  // 送信
	  $result = send_mail($mailset['admin']['mailfrom'], $mailset['admin']['mailto'], $mailset['admin']['subject'], $mailtemplate_admin,$frm['email2']['value']);
      if (!$result)
      {
            redirect_local_and_exit($templates['error'], 3600, 'メールを送信できませんでした。');
      }
  }

  require_once($templates['mail_user']);

  // 送信
  $result = send_mail($mailset['user']['mailfrom'], $frm['email2']['value'], $mailset['user']['subject'], $mailtemplate_user,$mailset['user']['mailfrom']);
  if (!$result)
  {
      redirect_local_and_exit($templates['error'], 3600, 'メールを送信できませんでした。');
  }

  redirect_http($templates['thanks']);



}

	$error_html = '';
	$err_insert = '';
	$JsOnloadEvent = '';


if ( (! isset($_POST['frm_init']) )
   || ($submit_btn_value == $templates['backbtn_value'] ) )
{
	// フォームイニシャル表示
	require_once($templates['index']);
	exit;
}

	if ( count($error_data) == 0)
	{
		$flag_frmok = 1;
		foreach ($fields as $key => $field)
		{
			if ($field['multiline'])
			{
				$value =  $frm[ $fields[$key]['name'] ]['value'];
				$frm[ $fields[$key]['name'] ]['value'] = preg_replace("/\n/","<br>",$value);
			}
		}
	}
	else
	{
		foreach ($error_data as $errmsg)
		{
			$err_insert .= '<span class="font_red">※</span>' . $errmsg . "<br />\n";
		}

		// エラー出力用のHTML
		$error_html = <<<HEAR_HTML
              <div id="form_error">
                  <p class="font_red">入力いただいた内容にエラーがあります。<br>以下の項目をもう一度ご確認の上、再入力をお願いします。</p>
                  <div class="error_text">$err_insert</div>
                </div>
HEAR_HTML;

	}

	if ($flag_frmok == 0)
	{
		$JsOnloadEvent = ' FncScrollError(); ';
		// 入力画面
		require_once($templates['index']);
	}
	else
	{
		require_once($templates['check']);
	}


?>

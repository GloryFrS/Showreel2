<?php
$config = include_once('config.php');

switch($_GET['api']) {
	case 'getOrderId':
		$id = $_GET['user_id'];
		$amount = 1;
		$order_id = time();
		$transaction_id = "NikF-".$order_id;
		$response = array(
			"amount" => $amount,
			"order_id" => $transaction_id
		);
	break;
	case 'getVKpaySign':
		$merchant_data = $_GET['data'];
		$merchant_private_key = $config['merchant_private_key'];
		$merchant_sign = sha1($merchant_data.$merchant_private_key);
		$merchant_id = 908310;
		$description = 'На корм Персику';
		$response = array(
			"merchant_data" => $merchant_data,
			"merchant_sign" => $merchant_sign,
			"merchant_id" => $merchant_id,
			"description" => $description
		);
	break;
	case 'getVKpayAppSign':
		$app_data = $_GET['data'];
		$app_key = $config["secret_key"];
		$app_sign = md5($app_data.$app_key);
		$response = array("app_sign" => $app_sign);
	break;
}

echo json_encode($response);
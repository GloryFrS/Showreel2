<?php
$public_key = file_get_contents("public_key");
$data = json_decode(base64_decode($_POST["data"]));
$verify_res = openssl_verify($_POST['data'], base64_decode($_POST['signature']), $public_key);

$answer = array();
$answer["body"] = array(
	"transaction_id" => $data->body->transaction_id,
	"notify_type" => "TRANSACTION_STATUS",
);
$answer["header"] = array(
	"status" => "OK",
	"ts" => $data->header->ts,
	"client_id" => 908310,
);

$id_showreel = $data->body->issuer_id;
$order_id = str_replace('NikF-', '', $id_showreel);

echo json_encode($answer);
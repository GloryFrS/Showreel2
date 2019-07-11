<?php
$userId = $_POST[userId];
$message = $_POST[message];
$serviceToken = '5387fd095387fd095387fd09d353ed3e6a553875387fd090e9a2c168ac5b92e8c44e2cd';

function sendPush($user_ids, $message, $access_token) {
	$request_params = array(
		'user_ids' => $user_ids,
		'message' => $message,
		'v' => 5.95,
		'access_token' => $access_token
	);
	$get_params = http_build_query($request_params);

	return json_decode(file_get_contents('https://api.vk.com/method/notifications.sendMessage?'.$get_params)
	)->response;
}

sendPush($userId, $message, $serviceToken);
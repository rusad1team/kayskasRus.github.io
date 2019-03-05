<?php

$to = 'mihaivalentin373@gmail.com';
$subject = 'Запись на экскурсию в Shantel';
$name = $_POST['name'];
$phoneNumber = $_POST['phone'];
$messageText = $_POST['message'];

$message  = "----------------<br/>\n";
$message .= "Имя: {$name}<br/>\n";
$message .= "Телефон: {$phoneNumber}<br/>\n";
$message .= "Сообщение: {$messageText}<br/>\n";
$message .= "----------------";




if (mail($to, $subject, $message)) {
    header('Location: http://shantel#feed-back-form');
}

<?php 
$email = $_GET['email'];
$message = $_GET['wiadomosc'];
$formcontent="Od: $name \n Wiadomość: $message";
$recipient = "malisz654321@gmail.com";
$subject = "Informacja z formularza kontaktowego";
$mailheader = "Od: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Dziękuję!";
?>
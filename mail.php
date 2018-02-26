<?php 
$email = $_POST['email'];
$message = $_POST['wiadomosc'];
$formcontent="Od: $name \n Wiadomość: $message";
$recipient = "malisz654321@gmail.com";
$subject = "Informacja z formularza kontaktowego";
$mailheader = "Od: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Dziękuję!";
?>
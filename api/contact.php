<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email = $_POST['email'];
  $message = $_POST['message'];


  echo "Message sent!";
}
?>

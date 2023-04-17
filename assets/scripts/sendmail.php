<?php
if(isset($_POST['submit'])){
	$to = "parasyuta.anna@gmail.com"; // Your email address
	$name = $_POST['name'];
	$from = $_POST['email'];
	$tel = $_POST['tel'];
	$comment = $_POST['comment'];
	$subject = "Contact Form Details";
	$headers = "From:" . $from;
	$result = mail($to,$subject,$comment,$headers);

	if ($result) {
		echo '<script type="text/javascript">alert("Your Message was sent Successfully!");</script>';
		echo '<script type="text/javascript">window.location.href = window.location.href;</script>';

	}else{
		echo '<script type="text/javascript">alert("Sorry! Message was not sent, Try again Later.");</script>';
		echo '<script type="text/javascript">window.location.href = window.location.href;</script>';
	}
}
?>
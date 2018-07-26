<?php
	function died($error) {
		$error_message  =  
			"Sorry, but there were error(s) found with the form you submitted.<br><br>" . 
			"These errors appear below.<br><br>" . 
			$error."<br><br><hr><br>" . 
			"Please go back and fix these errors.<br><br>";
	}

	$email_to = "rounds.bradley@gmail.com";
	$email_subject = "New contact form has been submitted";
	$error_message = "I\'m sorry, but there appears to be a problem with the form you submitted."; 

	$name = !empty($_POST['name'])?$_POST['name']:'';            // required
	$email = !empty($_POST['email'])?$_POST['email']:'';         // required
	$subject = !empty($_POST['subject'])?$_POST['subject']:'';   // required
	$message = !empty($_POST['message'])?$_POST['message']:'';   // required

	$string_exp = "/^[A-Za-z .'-]+$/";
	if(!preg_match($string_exp,$name)) {
		$error_message .= "The Name you entered does not appear to be valid.<br />";
	}
	$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
	if(!preg_match($email_exp,$email)) {
		$error_message .= "The Email Address you entered does not appear to be valid.<br />";
	}
	$string_exp = "/^[A-Za-z .'-]+$/";
	if(!preg_match($string_exp,$subject)) {
		$error_message .= "The Subject you entered does not appear to be valid.<br />";
	}
	if(strlen($message) < 10) {
		$error_message .= "The Message you entered do not appear to be valid.<br />";
	}
	// validation expected data exists
	if(!isset($name) ||	!isset($email) ||	!isset($subject) || !isset($message)) {
		died($error_message);
	}

	$email_message = "
		<h1>Contact request details</h1>
		<p><strong>Name: </strong>".$name."</p>
		<p><strong>Email: </strong>".$email."</p>
		<p><strong>Subject: </strong>".$subject."</p>
		<p><strong>Message: </strong>".$message."</p>
	";

	$headers  = "MIME-Version: 1.0".PHP_EOL;
	$headers .= "Content-type: text/html; charset=UTF-8".PHP_EOL;
	$headers .= "From:".$name." <".$email.">".PHP_EOL;


	$sent = mail($email_to, $email_subject, $email_message, $headers);

	if(!$sent) {
		$error_message = "Server could not send the email";
		throw New Exception($error_message);
	} else {
		$error_message = "Message Sent! Thanks for contacting me.<br/>I will be in touch with you very soon.";
	}
?>

<!doctype html>
<html lang="en">
<head>
	<link rel="icon" href="images/favicon.ico" type="image/x-icon">
  <link rel="stylesheet" href="_css/styles.css">
  <link href="https://fonts.googleapis.com/css?family=Orbitron|Titillium+Web|Raleway" rel="stylesheet">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	
	<!--Recommended Meta Tags-->
	<meta charset="utf-8">
	<meta name="language" content="english"> 
	<meta http-equiv="content-type" content="text/html">
	<meta name="author" content="Bradley Rounds">
	<meta name="designer" content="Bradley Rounds">
	<meta name="publisher" content="Bradley Rounds">

	<!--Search Engine Optimization Meta Tags-->
	<title>About Me | Bradley's Portfolio</title>
	<meta name="description" content="Bradley Rounds, his projects, interests and experience.">
	<meta name="keywords" content="">
	<meta name="robots" content="index,follow">
	<meta name="revisit-after" content="7 days">
	<meta name="distribution" content="web">
	<meta name="robots" content="noodp">

	<!--Optional Meta Tags-->
	<meta name="distribution" content="web">
	<meta name="web_author" content="Bradley Rounds">
	<meta name="rating" content="general">
	<meta name="subject" content="Personal">
	<meta name="title" content="Bradley Rounds - Official Portfolio.">
	<meta name="copyright" content="Copyright 2017">
	<meta name="reply-to" content="rounds.bradley@gmail.com">
	<meta name="abstract" content="">
	<meta name="city" content="Boulder">
	<meta name="country" content="USA">
	<meta name="distribution" content="global">
	<meta name="classification" content="">

	<!--Meta Tags for HTML pages on Mobile-->
	<meta name="format-detection" content="telephone=yes"/>
	<meta name="HandheldFriendly" content="true"/> 
	<meta name="viewport" content="width=device-width"/>

	<!--http-equiv Tags-->
	<meta http-equiv="Content-Style-Type" content="text/css">
	<meta http-equiv="Content-Script-Type" content="text/javascript">
</head>
	
<body style="height: 250vw; overflow: hidden;">
<header>
	<img id="logoImg" src="images/logo.png" alt="My Logo, A Handmade BR Tag" onclick="window.location.assign('index.html')">
  <nav>
    <ul>
      <li class="nav-item">
				<a href="index.html"><div class="nav-link"><i class="fa fa-home fa-lg"></i></div></a>
			</li>
      <li class="nav-item">
				<a href="portfolio.html"><div class="nav-link"><i class="fa fa-book fa-lg"></i></div></a>
			</li>
      <li class="nav-item">
        <div id="dropdown">
				<a id="dropdownButton" href="#"><div class="nav-link"><i class="fa fa-gear fa-lg"></i></div></a>
          <div id="dropdownContent">
            <a href="coding/psudocode.html"><i class="fa fa-code fa-lg"></i></a>
            <a href="coding/javascript.html"><i class="fa fa-coffee fa-lg"></i></a>
            <a href="coding/php.html"><i class="fa fa-server fa-lg"></i></a>
						<a href="coding/python.html"><i class="icon-python fa-lg"></i></a>
          </div>
        </div>
      </li>
      <li class="nav-item">
				<a href="#"><div class="nav-link"><i class="fa fa-envelope fa-lg"></i></div></a>
			</li>
    </ul>
  </nav>
</header>
<article>
	<div class="contact-button">
		<p id="error_message"><?php echo $error_message ?></p>
	</div>
</article>
<script src="scripts/dropdown-nav.js"></script>
</body>
</html>




<!--  Form with reCaptcha http://www.codexworld.com/new-google-recaptcha-with-php/-->
<?php
if(isset($_POST['submit'])) {
  $to = "kthornetdcp@yahoo.com"; // your email address
  $from = $_POST['email']; // the email address of the form submitter
  $name = $_POST['name'];
  $subject = "Form Submission";
  $subject2 = "Copy of your form submission";
  $message = $name . " wrote the following:" . "\n\n" . $_POST['message'];
  $message2 = "Here is a copy of your message " . $name . "\n\n" . $_POST['message'];

  $headers = "From:" . $from;
  $headers2 = "From:" . $to;
  mail($to,$subject,$message,$headers);
  mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
  echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
  }
?>

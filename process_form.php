<?php

// PHP form process for kitty's website

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $subject = $_POST["subject"];
    $newsletter = $_POST["newsletter"];
     
    // Send the email (you may use a library like PHPMailer or a built-in function like mail())
    // For example:
    mail("kitty_writer@kittymail.com", $subject, $message, "From:" . $email);
     
    echo "Thank you for contacting me, $name!";
} else {
    header("Location: contact.html"); // Redirect to the contact form if accessed directly
}
?>

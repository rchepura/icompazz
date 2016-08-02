<?php
header('Content-Type: application/json');
function doSend($email) 
{
    $headers   = array(
        "MIME-Version: 1.0\nContent-type: text/plain; charset=iso-8859-1",
        "From: <support@icompazz.com>"
    );
    $res = mail(
        'yiply@me.com',
        "info request", // Subject
        "Below person want to be notified for future updates.\n"
            . "\nRequestor email address: " . $email
            . "\n\nThank you", // Message Body
        implode("\r\n", $headers)// Headers
    );
    
    if ( $res )
    {
        return json_encode(array('success' => $res));
    }
    else
    {
        return json_encode(array('success' => false, 'error' => 'failed or missed email'));
    }
}


if ( isset($_POST['email']) && '' !== $_POST['email'] && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) )
{
    echo doSend($_POST['email']);
}
else
{
    echo json_encode(array('success' => false, 'error' => 'failed or missed email'));
}


<?php

// Variable caching
$fullname = isset($_REQUEST['fullname']) ? $_REQUEST['fullname'] : NULL;
$email = isset($_REQUEST['email']) ? $_REQUEST['email'] : NULL;
$adress = isset($_REQUEST['adress']) ? $_REQUEST['adress'] : NULL;
$chamber = isset($_REQUEST['chamber']) ? $_REQUEST['chamber'] : NULL;
$phone = isset($_REQUEST['phone']) ? $_REQUEST['phone'] : NULL;
$creneau = isset($_REQUEST['creneau']) ? $_REQUEST['creneau'] : NULL;
$menu = isset($_REQUEST['menu']) ? $_REQUEST['menu'] : NULL;
$boisson = isset($_REQUEST['boisson']) ? $_REQUEST['boisson'] : NULL;
$halal = isset($_REQUEST['halal']) ? 1 : 0;
$vegetarien = isset($_REQUEST['vegetarien']) ? 1 : 0;
$details = isset($_REQUEST['details']) ? $_REQUEST['details'] : NULL;

// Weird stuff
$token = bin2hex(random_bytes(50));

// SQLI stuff
$conn = new mysqli("localhost", "u807625049_nagarajaaa", "UnPetitChatASommeil!3", "u807625049_bddNagaaa");
/* check connection */
if ($conn->connect_errno) {
    printf("Connect failed: %s\n", $conn->connect_error);
    exit();
}
// Does the email already exist? Useless?
/*$query = "SELECT verified FROM ptitdejs WHERE email=? LIMIT 1";
$stmt = $conn->prepare($query);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if(mysqli_num_rows($result) > 0)
{
    $row = $result->fetch_assoc();
    if($row["verified"] == 1)
    {
        die("1: Cet email a déjà été validé");
    }
}*/

// Insert new ptitdej
$query = "INSERT INTO ptitdejs SET fullname=?, email=?, adress=?, chamber=?, phone=?,
creneau=?, menu=?, boisson=?, halal=?, vegetarien=?, details=?, token=?";
$stmt = $conn->prepare($query);
if($stmt)
{
    $stmt->bind_param('ssssisssiiss', $fullname, $email, $adress, $chamber, $phone, $creneau, $menu, $boisson, $halal, $vegetarien, $details, $token);
}
else
{
    die("prepare return NULL");
}
$result = $stmt->execute();

if($result)
{
    // Email stuff
    $to = $email;
    $subject = "Vérification commande petit dej Naga";
    $headers = "From: thomas.bessieres@telecom-sudparis.eu\r\n";
    $headers .= "Reply-To: thomas.bessieres@telecom-sudparis.eu\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $message = '
    <!DOCTYPE html>
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-type" content="text/html; charset=UTF-8">
    </head>
    <body>
        <p>Nous avons reçu votre commande, ' . $fullname . ' !</p>
        <p>Veuillez confirmer votre commande en cliquant sur le lien ci-dessous :</p>
        <a href="https://naga2021.fr/ptitdej/verify.php?token=' . $token . '" target="blank">Confirmez votre commande !</a>
    </body>
    ';

    if(mail($to, $subject, $message, $headers)) echo("yes");
    else echo("ERROR");
}
else
{
    die("1: La sauvegarde dans la base de donnée a échoué");
}

?>
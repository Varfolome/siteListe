<?php

// SQLI stuff
$conn = new mysqli("localhost", "u807625049_nagarajaaa", "UnPetitChatASommeil!3", "u807625049_bddNagaaa");
/* check connection */
if ($conn->connect_errno) {
    printf("Connect failed: %s\n", $conn->connect_error);
    exit();
}

if(isset($_GET['token']))
{
    $token = $_GET['token'];

    $query = "SELECT verified FROM ptitdejs WHERE token=? LIMIT 1";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $token);
    $stmt->execute();
    $result = $stmt->get_result();

    if(mysqli_num_rows($result) > 0)
    {
        $query = "UPDATE ptitdejs SET verified=1 WHERE token=?";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("s", $token);
        if($stmt->execute())
        {
            echo("Verification effectuée !");
        }
        else
        {
            die("3: Vérification échouée !");
        }
    }
    else
    {
        die("2: User not found!");
    }
}
else
{
    die("1: No token provided!");
}

?>
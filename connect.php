<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $FirstName = $_POST['FirstName'] ?? '';
    $MiddleName = $_POST['MiddleName'] ?? '';
    $LastName = $_POST['LastName'] ?? '';
    $EmailId = $_POST['EmailId'] ?? '';
    $ContactNumber = $_POST['ContactNumber'] ?? '';
    $SetPassword = $_POST['SetPassword'] ?? '';
    $DoB = $_POST['DoB'] ?? '';
    $FavouriteMIPlayer = $_POST['FavouriteMIPlayer'] ?? '';
    $Pincode = $_POST['Pincode'] ?? '';

   

    // Database connection
    $conn = new mysqli('localhost', 'root', '', 'test');

    // Check connection
    if ($conn->connect_error) {
        die('Connection Failed: ' . $conn->connect_error);
    }

    // Prepare and execute SQL statement
    $stmt = $conn->prepare("INSERT INTO registration(FirstName, MiddleName, LastName, EmailId, ContactNumber, SetPassword, DoB, FavouriteMIPlayer, Pincode) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssisssi", $FirstName, $MiddleName, $LastName, $EmailId, $ContactNumber, $SetPassword, $DoB, $FavouriteMIPlayer, $Pincode);

    if ($stmt->execute()) {
        echo '<meta http-equiv="refresh" content="0;url=thank_you.html">';
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
} else {
    echo "Form submission method not allowed.";
}
?>
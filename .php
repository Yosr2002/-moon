<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "moon";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$fullname = $_POST['fullname'];
$email = $_POST['email'];
$number = $_POST['number'];
$message = $_POST['message'];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (!empty($fullname) && !empty($email) && !empty($number) && !empty($message)) {
        $query = "INSERT INTO customers (fullname, email, number, message) VALUES ('$fullname', '$email', '$number', '$message')";
        $result = mysqli_query($conn, $query);
        if ($result) {
            header("Location: login.php");
            exit;
        } else {
            echo "Error: " . $query . "<br>" . mysqli_error($conn);
        }
    } else {
        echo "Please enter valid data!";
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    if (!empty($fullname) && !empty($email)) {
        $query = "SELECT * FROM customers WHERE fullname='$fullname' LIMIT 1";
        $result = mysqli_query($conn, $query);

        if ($result && mysqli_num_rows($result) > 0) {
            $user_data = mysqli_fetch_assoc($result);

            if ($user_data['email'] === $email) {
                session_start();
                $_SESSION['fullname'] = $user_data['fullname'];
                header("Location: your_page.php");
                exit;
            }
        } else {
            echo "Please enter your data!";
        }
    }
}

$conn->close();
?>

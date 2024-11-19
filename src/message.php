<?php 
$name = $_POST['fullName'];
$email = $_POST['email'];
$state = $_POST['state'];
$city = $_POST['city'];
$areaCode = $_POST['areaCode'];
$fullAddress = $_POST['fullAddress'];

if(!empty($name) && !empty($email)){
    echo "Hi $name";
}else{
    echo "Try Again!!";
}

?>
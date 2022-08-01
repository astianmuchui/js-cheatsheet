<?php
$conn = mysqli_connect("localhost","root","","test");

echo 'Processing ...   ';

if(isset($_GET['name'])){
    echo 'GET: Your name is '.$_GET['name'];
}

if(isset($_POST['name'])){
    $name = mysqli_real_escape_string($conn,$_POST['name']);
    
    echo 'POST: Your name is '.$_POST['name'];
    
    $query = "INSERT INTO users (name) VALUES('$name')";
    $exec = mysqli_query($conn,$query);
    if($exec){
        echo "User added";
        
    }else{
        echo "User not added";
    }
    mysqli_close($conn);
    
}



?>
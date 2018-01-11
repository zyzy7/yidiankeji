<?php
header('Content-Type:application/json;charset=utf-8');
$uname=$_REQUEST['uname'];
$company=$_REQUEST['company'];
$phone=$_REQUEST['phone'];
$message=$_REQUEST['message'];

$conn=mysqli_connect('127.0.0.1','root','root','contact1',3306);
$sql='SET NAMES UTF8';
mysqli_query($conn,$sql);
$sql="insert into users value(NULL,'$uname','$company','$phone','$message')";
$res=mysqli_query($conn,$sql);
if($res){
    echo "1";
}else{
    echo 'err'.$sql;
}
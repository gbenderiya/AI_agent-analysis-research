<?php
// API misuse: using deprecated mysql_* functions and not using prepared statements
$conn = mysql_connect('localhost','root','');
mysql_select_db('test');
$user = $_GET['user'];
$q = "SELECT * FROM users WHERE username='".$user."'";
$res = mysql_query($q);
while($r = mysql_fetch_assoc($res)){
    var_dump($r);
}
?>
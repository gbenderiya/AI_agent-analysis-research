<?php
// Concurrency bug: session not locked causing race when multiple requests update same session key
session_start();
if (!isset($_SESSION['counter'])) $_SESSION['counter'] = 0;
$tmp = $_SESSION['counter'];
usleep(10000); // simulate delay
$_SESSION['counter'] = $tmp + 1;
echo $_SESSION['counter'];
?>
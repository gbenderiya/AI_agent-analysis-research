<?php
// API misuse: including file based on user input leads to RFI/LFI risk
$tpl = $_GET['tpl'] ?? 'home';
include __DIR__.'/templates/'.$tpl.'.php'; // dangerous without validation
?>
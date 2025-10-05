<?php
// Performance antipattern: N+1 queries inside loop
$users = [['id'=>1],['id'=>2],['id'=>3]];
foreach ($users as $u) {
    // imagine fetchPosts hits DB per user - simulated by sleep
    usleep(5000);
    echo "User {$u['id']} posts\n";
}
?>
<?php
// Off-by-one: loop condition allows one extra iteration accessing undefined index
$arr = [1,2,3];
for ($i = 0; $i <= count($arr); $i++) {
    echo $arr[$i]; // notice: undefined offset on last iteration
}
?>
<?php
// Logic bug: integer division behavior changed between PHP versions; using / expecting integer
function average($a, $b) {
    return ($a + $b) / 2; // with ints might produce float unexpectedly in some contexts
}
echo average(1,2);
?>
<?php
// Logic bug: using == instead of === leads to surprising true results with '0' and 0
function is_admin($val) {
    if ($val == '0') {
        return true; // incorrect compare leads to granting access
    }
    return false;
}

var_dump(is_admin(0)); // prints true unexpectedly
?>
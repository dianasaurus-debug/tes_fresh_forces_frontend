<?php

function oddFunction($num){
	$arr_of_odds = [];
    for($i=1;$i<$num;$i++){
    	if($i%2!=0) array_push($arr_of_odds,$i);
    }
    return $arr_of_odds;
}
print_r(oddFunction(7));
print_r(oddFunction(15));
?>

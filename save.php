<?php

$rawData = $_POST['imageData'];
//$rawData = 'data:image/png;base64,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"';
$filteredData = explode(',', $rawData);

$unencoded = base64_decode($filteredData[1]);

$fp = fopen('sigs/test1.png', 'w');
fwrite($fp, $unencoded);
fclose($fp);
?>

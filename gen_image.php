<?php
//hex to rgb

function hex2rgb($hex) {
   $hex = str_replace("#", "", $hex);

   if(strlen($hex) == 3) {
      $r = hexdec(substr($hex,0,1).substr($hex,0,1));
      $g = hexdec(substr($hex,1,1).substr($hex,1,1));
      $b = hexdec(substr($hex,2,1).substr($hex,2,1));
   } else {
      $r = hexdec(substr($hex,0,2));
      $g = hexdec(substr($hex,2,2));
      $b = hexdec(substr($hex,4,2));
   }
   $rgb = array($r, $g, $b);
   //return implode(",", $rgb); // returns the rgb values separated by commas
   return $rgb; // returns an array with the rgb values
}
//rgb to hex
function rgb2hex($rgb) {
   $hex = "#";
   $hex .= str_pad(dechex($rgb[0]), 2, "0", STR_PAD_LEFT);
   $hex .= str_pad(dechex($rgb[1]), 2, "0", STR_PAD_LEFT);
   $hex .= str_pad(dechex($rgb[2]), 2, "0", STR_PAD_LEFT);

   return $hex; // returns the hex value including the number sign (#)
}
//create image from transparent image with fill of colors
function imagetranstocolor($trans,$color="FFFF00") {
    // Create a new true color image with the same size
    $w = imagesx($trans);
    $h = imagesy($trans);
    $white = imagecreatetruecolor($w, $h);
 
    // Fill the new image with white background
    $colorarr=hex2rgb("#".$color);
  /*  echo "<pre>";
    print_r($colorarr);
    echo "</pre>";*/
    
    $bg = imagecolorallocate($white, $colorarr[0], $colorarr[1], $colorarr[2]);
    imagefill($white, 0, 0, $bg);
 
    // Copy original transparent image onto the new image
    imagecopy($white, $trans, 0, 0, 0, 0, $w, $h);
    return $white;
}
$chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
$length = 5;
$filename['outerCircle'] = 'first.jpeg';
$filename['middelCircle'] = 'second.jpeg';
$filename['innerCircle'] = 'third.jpeg';
//$filename['centercircle'] = 'fourth.jpeg';

$color[0] = '#00EE00';
$color[1] = '#fe0000';
$color[2] = '#F1F1F1';
//$color[3] = '#C9C9C9';

/*for($i = 0; $i < $length; $i++)
{
   $filename .= $chars[mt_rand(0, 36)];
}*/

//echo $filename;

// Open original PNG image
$i=0;
foreach($filename as $key=>$file)
{
	echo $file;
	if($key=="outerCircle")
	{
		$png = imagecreatefrompng("images/6.png");
		// Transform to white-background JPEG
		$jpg = imagetranstocolor($png,$color[$i]);
		
	}
	elseif($key=="middelCircle")
	{
		$png = imagecreatefrompng("images/3.png");
		$jpg = imagetranstocolor($png,$color[$i]);
	}
	elseif($key=="innerCircle")
	{
		$png = imagecreatefrompng("images/2.png");
		$jpg = imagetranstocolor($png,$color[$i]);
	}
	/*
	else 
	{
		$jpg = "live_images/naamloos.png";
	}
	
	*/
		// Save new image
	imagejpeg($jpg, "edited/$file",100);
	//echo "tempimage/$filename.jpeg";
	$i++;
}

?>
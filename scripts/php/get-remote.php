<?php
$url = $_GET['url'];

$ch = curl_init();
$fetcher = $url;
//Set the URL that you want to GET by using the CURLOPT_URL option.
curl_setopt($ch, CURLOPT_URL, $fetcher);

//Set CURLOPT_RETURNTRANSFER so that the content is returned as a variable.
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

//Set CURLOPT_FOLLOWLOCATION to true to follow redirects.
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);

//Execute the request.
$data = curl_exec($ch);

//Close the cURL handle.
curl_close($ch);

if (!$data || strlen(trim($data)) == 0){
    $data = "NO DATA. $url";
}

//Print the data out onto the page.
echo $data;


    ?>

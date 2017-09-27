<?php
$url = $_POST['url'];
$query = array();
$query['url'] = $url;

$ch = curl_init();
$fetcher = "http://loganchristensen.com/youpick/scripts/php/get-remote.php?" . http_build_query($query);
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

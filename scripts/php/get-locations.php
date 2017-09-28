<?php
$apikey = "AIzaSyCPmbCGNsLcVogJBfLN8XUM3ndmTiO5tC8";

$radius = $_GET['radius'];
$price = $_GET['maxPrice'];
$lat = $_GET['lat'];
$lng = $_GET['lng'];

$url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=$lat,$lng&radius=$radius&type=restaurant&key=$apikey";

$query = array();
$query['url'] = $url;

$newURL = "http://loganchristensen.com/youpick/scripts/php/get-remote.php?" . http_build_query($query);
$data = curlURL($newURL);

$results = json_decode($data);
if ($results->status != "OK"){
    echo $results->status;
    echo $results;
    echo "ERROR Status not OK";
    return;
}
$restaurants = array();
$restaurants = $results->results;

while(array_key_exists("next_page_token", $results)){
    if ($results->status != "OK"){
        echo "ERROR Status not OK";
        return;
    }
    $token = $results->next_page_token;
    $url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=$lat,$lng&pagetoken=$token&key=$apikey";
    sleep(2);
    $data = curlURL($url);
    $results = json_decode($data);
    if ($results != null && array_key_exists("results", $results)){
        //echo var_dump($results);
        array_merge($restaurants, $results->results);
    } else {
        break;
    }
}

echo json_encode($restaurants);
return;

function curlURL($url){
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
    //echo "\nDATA for URL: $url\n" ;
    if (curl_errno($ch)) {
   print curl_error($ch);
}
    //echo $data;
    //echo "\nEND DATA\n";

    //Close the cURL handle.
    curl_close($ch);
    return $data;
}

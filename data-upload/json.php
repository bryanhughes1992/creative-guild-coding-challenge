<?php
// Store an object that represents the database connection
$connect = mysqli_connect("167.114.6.96", "bryanhug_bryanhughes", 'v.JuV;kTDYmf%nMY', "bryanhug_creativeguild");

// Store the desired file to read
$file_name = "landscapes.json";

// Store the contents of the JSON file
$data = file_get_contents($file_name);

// Decode the JSON data into a PHP associative array
$array = json_decode($data, true);

// Capture the subarray of albums
$album_arr = $array["album"];

// Store a prepared MySQL statement that will insert the artists data
$query = "INSERT INTO artists(name, phone, email, bio, profile_pic) VALUES('".$array["name"]."', '".$array["phone"]."', '".$array["email"]."', '".$array["bio"]."', '".$array["profile_picture"]."')";

//Execute the SQL command
mysqli_query($connect, $query);

// Loop through the array of albums
foreach($album_arr as $row)
{
  // Store a MySQL statement that will insert each albums data
  $query = "INSERT INTO albums(title, album_desc, image, date_created, featured, artist_id) VALUES('".$row["title"]."', '".$row["description"]."', '".$row["img"]."', '".$row["date"]."', '".$row["featured"]."', 1)";

  // Execute the SQL command
  mysqli_query($connect, $query);
}

?>
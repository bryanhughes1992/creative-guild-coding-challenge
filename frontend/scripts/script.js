window.addEventListener("DOMContentLoaded", () => {
  fetch("https://creativeguild.bryanhughes.net/api/artists")
    .then(response => response.json())
    .then(data => handleArtists(data));
});



function handleArtists(data) {
  let name = "";
  let phone = "";
  let email = "";
  let bio = "";
  let profilePic = "";

  for (let i = 0; i < data.length; i++) {
    name = data[i]["name"];
    phone = data[i]["phone"];
    email = data[i]["email"];
    bio = data[i]["bio"];
    profilePic = data[i]["profile_pic"];
  }

  console.log(name, phone, email, bio, profilePic);
}

function formatArtists(name, phone, email, bio, profilePic) {
  let artistContainer = document.createElement("div");
  artistContainer.className = "artist-container";
  let artistName = name;
  let artistPhone = phone;
  let artistEmail = email;
  let artistBio = bio;
  let artistPic = profilePic;

  let nameElement = document.createElement("h1");
  nameElement.innerText = artistName;
  nameElement.classList.add("artist-name");

  let phoneElement = document.createElement("p");
  phoneElement.innerText = artistPhone;
  phoneElement.classList.add("artist-phone");

  let emailElement = document.createElement("p");
  emailElement.innerText = artistEmail;
  emailElement.classList.add("artist-email");

  let bioElement = document.createElement("p");
  bioElement.innerText = artistBio;
  bioElement.classList.add("artist-bio");

  let picElement = document.createElement("img");
  picElement.src = artistPic;
  picElement.alt = "Artist Profile Picture";

}
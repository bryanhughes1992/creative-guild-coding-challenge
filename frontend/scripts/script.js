window.addEventListener("DOMContentLoaded", () => {
  fetch("https://creative-backend.bryanhughes.net/api/artists")
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

  let app = document.getElementById("app");
  let appContent = formatArtists(name, phone, email, bio, profilePic);
  app.append(appContent);
}

function formatArtists(name, phone, email, bio, profilePic) {
  let artistContainer = document.createElement("div");
  artistContainer.classList.add("artist-container");

  let artistName = name;
  let artistPhone = phone;
  let artistEmail = email;
  let artistBio = bio;
  let artistPic = profilePic;

  let nameElement = document.createElement("h1");
  nameElement.innerText = artistName;
  nameElement.classList.add("artist-name");
  let nameContainer = document.createElement("div");
  nameContainer.classList.add("artist-name-container");
  nameContainer.append(nameElement);
  artistContainer.append(nameContainer);

  let phoneElement = document.createElement("p");
  phoneElement.innerText = artistPhone;
  phoneElement.classList.add("artist-phone");
  let phoneContainer = document.createElement("div");
  phoneContainer.classList.add("artist-phone-container");
  phoneContainer.append(phoneElement);
  artistContainer.append(phoneContainer);

  let emailElement = document.createElement("p");
  emailElement.innerText = artistEmail;
  emailElement.classList.add("artist-email");
  let emailContainer = document.createElement("div");
  emailContainer.classList.add("artist-email-container");
  emailContainer.append(emailElement);
  artistContainer.append(emailContainer);

  let bioElement = document.createElement("p");
  bioElement.innerText = artistBio;
  bioElement.classList.add("artist-bio");
  let bioContainer = document.createElement("div");
  bioContainer.classList.add("artist-bio-container");
  bioContainer.append(bioElement);
  artistContainer.append(bioContainer);

  let picElement = document.createElement("img");
  picElement.src = artistPic;
  picElement.alt = "Artist Profile Picture";
  let picContainer = document.createElement("div");
  picContainer.classList.add("artist-pic-container");
  picContainer.append(picElement);
  artistContainer.append(picContainer);

  return artistContainer;
}
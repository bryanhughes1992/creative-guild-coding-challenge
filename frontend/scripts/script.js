window.addEventListener("DOMContentLoaded", () => {
  fetch("https://creative-backend.bryanhughes.net/api/artists")
    .then(response => response.json())
    .then(data => handleArtists(data));

  fetch("https://creative-backend.bryanhughes.net/api/albums")
    .then(response => response.json())
    .then(data => handleAlbums(data));
});


/**
 * Accepts an object, which contains the artist data.
 * Loops through the object's members, and saves their
 * values to variables. Passes these variables to a
 * function that will format their values into HTML.
 * Finally, this function appends the formatted HTML to
 * the HTML DOM.
 * @param {object} data
 */
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

/**
 * Takes all of the Artist's details, provides them
 * with HTML markup, wraps them in div containers, and
 * appends them to the HTML DOM.
 * @param {string} name
 * @param {string} phone
 * @param {string} email
 * @param {string} bio
 * @param {string} profilePic
 * @returns {HTMLDivElement}
 */
function formatArtists(name, phone, email, bio, profilePic) {
  // Capture HTML main element
  let artistContainer = document.createElement("div");
  artistContainer.classList.add("artist-container");

  // Make variables with a value equal to the ones passed in
  let artistName = name;
  let artistPhone = phone;
  let artistEmail = email;
  let artistBio = bio;
  let artistPic = profilePic;

  /**
   * NAME
   */
  // Format the artist name into an H1
  let nameElement = document.createElement("h1");
  nameElement.innerText = artistName;
  nameElement.classList.add("artist-name");
  // Make an HTML div container for the name
  let nameContainer = document.createElement("div");
  nameContainer.classList.add("artist-name-container");
  nameContainer.append(nameElement);
  artistContainer.append(nameContainer);

  /**
   * PHONE NUMBER
   */
  // Format the artist phone number into a paragraph elem
  let phoneElement = document.createElement("p");
  phoneElement.innerText = artistPhone;
  phoneElement.classList.add("artist-phone");
  // Make a div for the phone number
  let phoneContainer = document.createElement("div");
  phoneContainer.classList.add("artist-phone-container");
  phoneContainer.append(phoneElement);
  artistContainer.append(phoneContainer);

  /**
   * EMAIL
   */
  // Create a paragraph element for the artist email
  let emailElement = document.createElement("p");
  emailElement.innerText = artistEmail;
  emailElement.classList.add("artist-email");
  // Create a container for the email
  let emailContainer = document.createElement("div");
  emailContainer.classList.add("artist-email-container");
  emailContainer.append(emailElement);
  artistContainer.append(emailContainer);

  /**
   * BIOGRAPHY
   */
  // Create a paragraph element for the artist biography
  let bioElement = document.createElement("p");
  bioElement.innerText = artistBio;
  bioElement.classList.add("artist-bio");
  // Create a container for the bio
  let bioContainer = document.createElement("div");
  bioContainer.classList.add("artist-bio-container");
  bioContainer.append(bioElement);
  artistContainer.append(bioContainer);

  /**
   * PIC
   */
  // Modify the img string so it contains the proper img format
  let updatedArtistPic = artistPic.replace('jpg', 'jpeg');
  // Make an img element for the picture
  let picElement = document.createElement("img");
  // Set the img src to represent the file structure
  picElement.src = `../${updatedArtistPic}`;
  picElement.alt = "Artist Profile Picture";
  // Make a container for the pic
  let picContainer = document.createElement("div");
  picContainer.classList.add("artist-pic-container");
  picContainer.append(picElement);
  artistContainer.append(picContainer);


  return artistContainer;
}


function handleAlbums(data) {
  console.log(data);
  let id = 0;
  let title = "";
  let albumDesc = "";
  let img = "";
  let dateCreated = "";
  let featured = false;
  let artistId = 0;

  for (let i = 0; i < data.length; i++) {
    id = data[i].id;
    title = data[i].title;
    albumDesc = data[i].album_desc;
    img = data[i].image;
    dateCreated = data[i].date_created;
    featured = data[i].featured;
    artistId = data[i].artist_id;

    formatAlbums(id, title, albumDesc, img, dateCreated, featured, artistId);
  }
}

function formatAlbums(id, title, albumDesc, img, dateCreated, featured, artistId) {
  let masterAlbumContainer = document.createElement("div");

  let albumContainer = document.createElement("div");
  albumContainer.id = id;

  let albumTitle = document.createElement("h2");
  albumTitle.innerText = title;
  albumTitle.classList.add("album-title");
  let titleContainer = document.createElement("div");
  titleContainer.classList.add("album-title-container");
  titleContainer.append(albumTitle);
  albumContainer.append(titleContainer);

  let albumDescription = document.createElement("p");
  albumDescription.innerText = albumDesc;
  albumDescription.classList.add("album-description");
  let descContainer = document.createElement("div");
  descContainer.classList.add("album-description-container");
  descContainer.append(albumDescription);
  albumContainer.append(descContainer);

  let newSrc = img.replace("jpg", "jpeg");
  let albumImg = document.createElement("img");
  albumImg.classList.add("album-image");
  albumImg.src = `../${newSrc}`;
  albumImg.alt = "Album Landscape Image";
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("album-image-container");
  imgContainer.append(albumImg);
  albumContainer.append(imgContainer);

  let albumDateCreated = document.createElement("p");
  albumDateCreated.innerText = dateCreated;
  albumDateCreated.classList.add("album-date-created");
  let dateContainer = document.createElement("div");
  dateContainer.


}
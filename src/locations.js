function updateMainImage() {
  const mainImage = document.querySelector(".main-image");

  mainImage.setAttribute("src", "https://source.unsplash.com/hhhNjjzUMsI");
  mainImage.setAttribute("alt-text", "Forest Hut");

  const imageCredit = document.querySelector(".main-image-container .image-credit");
  imageCredit.innerText = "unsplash.com/@nelsonbuchanan";
}

function updateHeader() {
  const title = document.querySelector("header h1");
  title.innerText = "Our Hideouts";

  const tagline = document.querySelector("header p");
  tagline.innerText = "Absolute discretion painstakenly ensured";
}

function updateSection() {
  const section = document.querySelector("section");
  // EMPTY SECTION
  section.innerHTML = "";

  // POPULATE SECTION
  const address = document.createElement("p");
  address.innerText = "An oasis awaits close to the following locations:";

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("content-container");

  const image = document.createElement("img");
  image.setAttribute("src", "https://source.unsplash.com/Gw_UOoFk4Wk");
  image.setAttribute("alt-text", "Map");

  const imageCredit = document.createElement("p");
  imageCredit.classList.add("image-credit");
  imageCredit.innerText = "unsplash.com/@britishlibrary";

  imageContainer.append(image, imageCredit)

  // CREATE LOCATION PINS
  for (let i = 0; i < 10; i++) {
    let pin = document.createElement("img");
    pin.classList.add("pin");
    pin.setAttribute("src", "./images/pin.svg");

    imageContainer.append(pin);
  }

  section.append(address, imageContainer);
}


function loadLocations() {
  updateMainImage();
  updateHeader();
  updateSection();
}

export default loadLocations

function updateMainImage() {
  const mainImage = document.querySelector(".main-image");

  mainImage.setAttribute("src", "https://source.unsplash.com/FsyuKH9iFI8");
  mainImage.setAttribute("alt-text", "Moist Raspberry Chocolate Cake");

  const imageCredit = document.querySelector(".main-image-container .image-credit");
  imageCredit.innerText = "unsplash.com/@jasmine_waheed";
}

function updateHeader() {
  const title = document.querySelector("header h1");
  title.innerText = "The Beard Grub";

  const tagline = document.querySelector("header p");
  tagline.innerText = "Beard-Soakingly Good Grub";
}

function updateSection() {
  const section = document.querySelector("section");
  // EMPTY SECTION
  section.innerHTML = "";

  // POPULATE SECTION
  const info1 = document.createElement("p");
  info1.innerText = "Mon - Fri: 7 - 10 AM | 5PM - 11 PM";

  const info2 = document.createElement("p");
  info2.innerText = "Sat / Public Holidays: 5PM - 2 AM";

  const info3 = document.createElement("a");
  info3.setAttribute("href", "#");
  info3.innerText = "Join the waitlist"

  section.append(info1, info2, info3);
}


function loadAbout() {
  updateMainImage();
  updateHeader();
  updateSection();
}

export default loadAbout

function createMainImage() {
  const mainImageContainer = createContentContainer("div");
  mainImageContainer.classList.add("main-image-container");

  const mainImage = document.createElement("img");
  mainImage.classList.add("main-image")
  mainImage.setAttribute("src", "https://source.unsplash.com/FsyuKH9iFI8");
  mainImage.setAttribute("alt-text", "Moist Raspberry Chocolate Cake");

  const imageCredit = document.createElement("p");
  imageCredit.classList.add("image-credit");
  imageCredit.innerText = "Image credit: ";

  const creditLink = document.createElement("a");
  creditLink.classList.add("credit-link");
  creditLink.setAttribute("href", "https://unsplash.com/@jasmine_waheed");
  creditLink.innerText = "@jasmine_waheed";

  imageCredit.append(creditLink);
  mainImageContainer.append(mainImage, imageCredit);

  return mainImageContainer;
}


function createMainContent() {
  const mainContentContainer = createContentContainer("main");
  mainContentContainer.classList.add("main-content-container");

  // MAKE HEADER
  const headerContainer = createContentContainer("header");

  const title = document.createElement("h1");
  title.innerText = "The Beard Grub";

  const tagline = document.createElement("p");
  tagline.innerText = "Beard-Soakingly Good Grub";

  headerContainer.append(title, tagline);

  // MAKE CONTENT
  const infoContainer = createContentContainer("section");

  const info1 = document.createElement("p");
  info1.innerText = "Mon - Fri: 7 - 10 AM | 5 - 11 PM";

  const info2 = document.createElement("p");
  info2.innerText = "Sat / PH: 5 - 2 AM";

  const info3 = document.createElement("a");
  info3.setAttribute("href", "#");
  info3.innerText = "Join the waitlist"

  infoContainer.append(info1, info2, info3);

  mainContentContainer.append(headerContainer, infoContainer);

  return mainContentContainer;
}


function createContentContainer(type) {
  const contentContainer = document.createElement(type);
  contentContainer.classList.add("content-container");

  return contentContainer
}


function initHomepage() {
  const content = document.getElementById("content");
  const mainImage = createMainImage();
  const mainContent = createMainContent();
  content.append(mainImage, mainContent);
}

export default initHomepage

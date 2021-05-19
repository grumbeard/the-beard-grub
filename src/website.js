function createNavBar() {
  const navBarContainer = document.createElement("div");
  navBarContainer.id = "nav-bar-container";

  const tabNames = ["About", "Menu", "Locations"];
  tabNames.forEach(tabName => {
    let tab = document.createElement("div");
    tab.classList.add("tab");
    tab.setAttribute("data-tab", tabName.toLowerCase());
    tab.innerText = tabName;

    // SET FIRST TAB AS ACTIVE TAB
    if (tabName == tabNames[0]) tab.classList.add("active");

    navBarContainer.append(tab);
  });

  return navBarContainer;
}

function createMainImage() {
  const mainImageContainer = createContentContainer("div");
  mainImageContainer.classList.add("image-container", "main-image-container");

  const mainImage = document.createElement("img");
  mainImage.classList.add("image", "main-image")

  const imageCredit = document.createElement("p");
  imageCredit.classList.add("image-credit");

  mainImageContainer.append(mainImage, imageCredit);

  return mainImageContainer;
}

function createMainContent() {
  const mainContentContainer = createContentContainer("main");
  mainContentContainer.classList.add("main-content-container");

  // MAKE HEADER
  const headerContainer = createContentContainer("header");

  const title = document.createElement("h1");

  const tagline = document.createElement("p");

  headerContainer.append(title, tagline);

  // MAKE CONTENT
  const infoContainer = createContentContainer("section");

  mainContentContainer.append(headerContainer, infoContainer);

  return mainContentContainer;
}


function createContentContainer(type) {
  const contentContainer = document.createElement(type);
  contentContainer.classList.add("content-container");

  return contentContainer
}


function initStylesheet() {
  const head = document.querySelector("head");
  const stylesheet = document.createElement("link");
  stylesheet.setAttribute("rel", "stylesheet");
  stylesheet.setAttribute("href", "./styles/main.css");
  stylesheet.setAttribute("type", "text/css");

  head.append(stylesheet);
}


function initWebsite() {
  const content = document.getElementById("content");
  const navBar = createNavBar();
  const mainImage = createMainImage();
  const mainContent = createMainContent();

  content.append(navBar, mainImage, mainContent);

  initStylesheet();
}

export default initWebsite

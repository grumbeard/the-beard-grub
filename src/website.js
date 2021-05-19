function createNavBar() {
  const navBarContainer = document.createElement("div");
  navBarContainer.id = "nav-bar-container";

  const tabNames = ["Menu", "Locations", "About"];
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
  const mainImageContainer = document.createElement("div");
  mainImageContainer.classList.add("image-container", "main-image-container");

  const mainImage = document.createElement("img");
  mainImage.classList.add("image", "main-image")

  const imageCredit = document.createElement("p");
  imageCredit.classList.add("image-credit");

  mainImageContainer.append(mainImage, imageCredit);

  return mainImageContainer;
}


function createMainContent() {
  const mainContentContainer = document.createElement("main");
  mainContentContainer.classList.add("main-content-container");

  // MAKE HEADER
  const headerContainer = document.createElement("header");

  const title = document.createElement("h1");

  const tagline = document.createElement("p");

  headerContainer.append(title, tagline);

  // MAKE CONTENT
  const infoContainer = document.createElement("section");

  mainContentContainer.append(headerContainer, infoContainer);

  return mainContentContainer;
}


function createFooter() {
  const footer = document.createElement("footer");

  const linkWrapper = document.createElement("a");
  linkWrapper.classList.add("link-wrapper");
  linkWrapper.setAttribute("href", "https://github.com/grumbeard/thebeardgrub");

  const githubLogoContainer = document.createElement("div");
  githubLogoContainer.classList.add("image-container", "logo-container");

  const githubLogo = document.createElement("img");
  githubLogo.classList.add("image", "logo");
  githubLogo.setAttribute("src", "./images/github-logo.png");

  githubLogoContainer.append(githubLogo);

  const footerText = document.createElement("p");
  footerText.classList.add("footer-text");
  footerText.innerText = "Visit Repository";

  linkWrapper.append(githubLogoContainer, footerText);
  footer.append(linkWrapper);

  return footer
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
  const footer = createFooter();

  content.append(navBar, mainImage, mainContent, footer);

  initStylesheet();
}

export default initWebsite

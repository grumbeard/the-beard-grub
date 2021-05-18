import loadHomepage from "./homepage"
import loadMenu from "./menu"


function initNavBar() {
  const content = document.getElementById("content");
  const navBarContainer = document.createElement("div");
  navBarContainer.id = "nav-bar-container";

  const tabNames = ["About", "Menu", "Locations"];
  tabNames.forEach(tabName => {
    let tab = document.createElement("div");
    tab.classList.add("tab");
    tab.setAttribute("data-tab", tabName.toLowerCase());
    tab.innerText = tabName;
    tab.addEventListener("click", toggleTab);

    // SET FIRST TAB AS ACTIVE TAB
    if (tabName == tabNames[0]) tab.classList.add("active");

    navBarContainer.append(tab);
  });

  content.append(navBarContainer);
}

function toggleTab(e) {
  // CHECK IF TAB ALREADY ACTIVE
  if (e.target.classList.contains("active")) return;

  // CLEAR CONTENTS
  const content = document.getElementById("content");

  switch(e.target.dataset.tab) {
    case "about":
      loadHomepage();
      break;
    case "menu":
      loadMenu();
      break;
  }
  let active = document.querySelector(".active");
  active.classList.remove("active");

  e.target.classList.add("active");
}


initNavBar();
loadHomepage();

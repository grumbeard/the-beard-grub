import initWebsite from "./website"
import loadMenu from "./menu"
import loadLocations from "./locations"
import loadAbout from "./about"


function initTabs() {
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach(tab => {
    tab.addEventListener("click", toggleTab);
  });
}

function toggleTab(e) {
  // CHECK IF TAB ALREADY ACTIVE
  if (e.target.classList.contains("active")) return;

  // CLEAR CONTENTS
  const content = document.getElementById("content");

  switch(e.target.dataset.tab) {
    case "about":
      loadAbout();
      break;
    case "menu":
      loadMenu();
      break;
    case "locations":
      loadLocations();
      break;
  }
  let active = document.querySelector(".active");
  active.classList.remove("active");

  e.target.classList.add("active");
}

initWebsite();
initTabs();
loadMenu();

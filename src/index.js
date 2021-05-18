import initWebsite from "./website"
import loadHomepage from "./homepage"
import loadMenu from "./menu"


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

initWebsite();
initTabs();
loadHomepage();

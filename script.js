var menu = document.querySelector("#menu");
var ham = document.querySelector("#ham");
var closeIcon = document.querySelector(".closeIcon");
var menuIcon = document.querySelector(".menuIcon");
var menuLinks = document.querySelectorAll(".menuLink");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

ham.addEventListener("click", toggleMenu);
closeIcon.style.display = "none";

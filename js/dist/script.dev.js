"use strict";

var toggleMenu = function toggleMenu() {
  var menu = document.querySelector(".main-nav");

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
};

var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", toggleMenu);
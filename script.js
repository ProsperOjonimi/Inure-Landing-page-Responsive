"use strict";

const menuButton = document.querySelector(".menu");
const closeButton = document.querySelector(".close");
const navMobile = document.querySelector(".nav-mobile");
const openMenu = function () {
  menuButton.classList.add("hidden");
  closeButton.classList.remove("hidden");
  navMobile.classList.remove("hide-mobile-nav");
};

const closeMenu = function () {
  menuButton.classList.remove("hidden");
  closeButton.classList.add("hidden");
  navMobile.classList.add("hide-mobile-nav");
};
menuButton.addEventListener("click", openMenu);

closeButton.addEventListener("click", closeMenu);

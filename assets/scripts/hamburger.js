$(function () {
  $("#hamburger").click(function () {
    $(this).toggleClass("open");
  });
});

let hamburgerBtn = document.querySelector(".hamburger-btn");
let menu = document.querySelector(".hamburger");
let links = document.querySelectorAll(".hamburger__link");

hamburgerBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("active");
    hamburgerBtn.classList.remove("open");
  });
});

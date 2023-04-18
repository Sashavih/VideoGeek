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
  document.body.classList.toggle("stop-scroll");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("active");
    hamburgerBtn.classList.remove("open");
    document.body.classList.remove("stop-scroll");
  });
});

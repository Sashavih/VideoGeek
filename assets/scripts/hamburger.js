$(function () {
  $("#hamburger").click(function () {
    $(this).toggleClass("open");
  });
});

let hamgurgerBtn = document.querySelector(".hamburger-btn");
let menu = document.querySelector(".hamburger");

hamgurgerBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

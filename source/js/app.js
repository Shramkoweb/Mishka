var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var special = document.querySelector(".special");
var modal = document.querySelector(".modal");

navMain.classList.remove("main-nav--no-js");
navMain.classList.add("main-nav--closed");

navToggle.addEventListener("click", function () {
  navMain.classList.toggle("main-nav--closed");
})

special.addEventListener("click", function () {
  modal.classList.add("modal--opened");
})

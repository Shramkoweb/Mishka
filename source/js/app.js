var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

//Открытие меню в мобильно версии.

navMain.classList.remove("main-nav--no-js");
navMain.classList.add("main-nav--closed");

navToggle.addEventListener("click", function () {
  navMain.classList.toggle("main-nav--closed");
})

//Открытие модального окна.

var link = document.querySelectorAll(".js-modal");

if (link.length > 0) {
  var modal = document.querySelector(".modal");
  var overlay = document.querySelector(".modal__fade");

  for (var i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function () {
      modal.classList.add("modal--opened");
    })
  };

  overlay.addEventListener("click", function () {
    modal.classList.remove("modal--opened");
  })
};

// Карта

function initMap() {
  var map = new google.maps.Map(document.querySelector(".contacts__map"), {
    zoom: 16,
    center: { lat: 59.938731, lng: 30.323081 }
  });

  var image = "img/icon-map-pin.svg";
  var beachMarker = new google.maps.Marker({
    position: { lat: 59.938731, lng: 30.323081 },
    map: map,
    icon: image
  });
}

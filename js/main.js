$(function () {
  $("#tabs").tabs();
});

$(function () {
  $("#accordion").accordion({
    collapsible: true,
    active: 0,
    animate: 500
  });
});

var swiper = new Swiper(".mySwiper", {
  // slidesPerView: 2,
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    600: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },

    700: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },

    800: {
      slidesPerView: 1.2,
      spaceBetween: 40,
    },

    1200: {
      slidesPerView: 2,
      spaceBetween: 100,
    },


  },
});

// ymaps.ready(init);
// function init() {
//   var myMap = new ymaps.Map("map", {
//     center: [59.925340, 30.329325],
//     zoom: 15,
//     controls: []
//   });
//   myGeoObject = new ymaps.GeoObject({
//     geometry: {
//       type: "Point",// тип геометрии - точка
//       coordinates: [59.925340, 30.329325], // координаты точки
//       iconCaption: 'Очень длиннный, но невероятно интересный текст'
//     }, 
//       preset: 'islands#redDotIconWithCaption'
//   });
//   var myPlacemark = new ymaps.Placemark([59.925340, 30.329325], {}, {
//     iconImageSize: [28, 40],
//     iconImageOffset: [-3, -42],
//   });
//   myMap.geoObjects.add(myGeoObject, myPlacemark); 
// }


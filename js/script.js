ymaps.ready(function () {
  var myMap = new ymaps.Map(
      "map",
      {
        center: [59.939446, 30.329547],
        zoom: 15.5,
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemark = new ymaps.Placemark(
      [59.938635, 30.323118],
      {
        hintContent: "Собственный значок метки",
        balloonContent: "Это красивая метка",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "./img/decorative/mappin.svg",
        // Размеры метки.
        iconImageSize: [80, 140],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-35, -155],
      }
    );

  myMap.geoObjects.add(myPlacemark);
});

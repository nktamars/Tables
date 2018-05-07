$('.desc__card').click(function () {
    $(".cards__section").show();
    $(".table__section").hide();
  });
  $('.desc__tablet').click(function () {
    $(".cards__section").hide();
    $(".table__section").show();
  });

  $('.header__menu').click(function () {
    $(".header__menu-box").addClass('open');
  });
  $('.header__menu-close').click(function () {
    $(".header__menu-box").removeClass('open');
  });
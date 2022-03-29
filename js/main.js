$(document).ready(function () {

  var mixer = mixitup('.selection__inner', {
    load: {
      filter: '.selection-2000',
    },
  });

  $('.comment-slider').slick({
    dots: true,
    fade: true,
  });

  $('.response__accordeon .response__accordeon-title').on('click', function (e) {
    e.preventDefault();

    // //скрываем все кроме того, что должны открыть
    // $('.response__accordeon .response__accordeon-text').not($(this).next()).slideUp(200);
    // // открываем или скрываем блок под заголовком, по которому кликнули
    // $(this).next().slideToggle(400);


    $('.response__accordeon .response__accordeon-text').removeClass('response__accordeon-text--active');
    $(this).next().addClass('response__accordeon-text--active');
  });

  $('.open-modal').on('click', function (e) {
    e.preventDefault();
    $('.modal').addClass('modal--active');
    $('body').addClass('no-scroll');
  });

  $('.modal__close-btn').on('click', function (e) {
    e.preventDefault();
    $('.modal').removeClass('modal--active');
    $('body').removeClass('no-scroll');
  });

  $('.modal__form-btn').on('click', function (e) {
    e.preventDefault();
    $('.modal').removeClass('modal--active');
    $('.modal-thanks').addClass('modal-thanks--active');
    $('body').addClass('no-scroll');
  });

  $('.form__input-btn').on('click', function (e) {
    e.preventDefault();
    $('.modal-thanks').addClass('modal-thanks--active');
    $('body').addClass('no-scroll');
  });

  $('.modal-thanks__btn').on('click', function (e) {
    e.preventDefault();
    $('.modal-thanks').removeClass('modal-thanks--active');
    $('body').removeClass('no-scroll');
  });

  $('.header-top__question').click(function (e) { // отслеживаем клик по кнопке с классом li-nk
    e.preventDefault();
    var scroll_el = $(this).attr('href'); // берем у него содержимое атрибута href, которое начинается на "#section" или ".section"
    $('html, body').animate({
      scrollTop: $(scroll_el).offset().top - 0 // отступ (пиксели)
    }, 1000); // скорость (миллисекунды)
    return false; // отключаем действие по умолчанию
  })
});

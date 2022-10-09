function tabs(n)
{
  $('.tabs-nav a').removeClass('active');
  $('.tabs-nav a.t'+n).addClass('active');
  $('.tabs-block').fadeOut(0);
  $('.tabs-block.tab_'+n).fadeIn(222);
};

$(document).ready(function() {
  /*======Menu-toggle=============*/
  $(".burger").on("click", function() {
    $(this).toggleClass("active");
    $(".header__menu").toggleClass('active');
  });

  $(".header__menu-close").on("click", function(event) {
    event.preventDefault()
    $(this).toggleClass("active");
    $(".header__menu").removeClass('active');
  });
  /*==========/menu-toggle=========*/

  /*======Selection-box=============*/
  $(".selection-box__select").on("click", function() {
    $(this).toggleClass("active");
    $(".selection-box__dropdown").slideToggle();
  });
  /*==========/selection-box=========*/

   /*======Info=============*/
  $(".service-table__info").hover(function() {
      if ($(window).width() >= 1025){
        $(this).find(".info__dropdown").fadeToggle();   
    };
  });

  $(".service-table__info").on("click", function() {
      if ($(window).width() <= 1024){
        $(this).find(".info__dropdown").fadeToggle();   
    };
  });

  $(document).mouseup(function (e) {
      var dropdown = $(".info__dropdown");
      if (dropdown.has(e.target).length === 0 ){
 
    
              dropdown.fadeOut(111);
      }    
 
  });
  /*==========/info=========*/

   
  /*=================Sliders==========================*/
  /*========Choice-slider========*/
  $('.choice-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.choice .slider-arrow_prev'),
    nextArrow: $('.choice .slider-arrow_next'),
  });
  /*=======/choice-slider========*/

  /*========About-slider========*/
  $('.about-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: $('.about .slider-arrow_prev'),
    nextArrow: $('.about .slider-arrow_next'),
    variableWidth: true,
    centerMode: true,
  });
  /*=======/about-slider========*/

  /*========Team-slider========*/
  $('.team-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: $('.team .slider-arrow_prev'),
    nextArrow: $('.team .slider-arrow_next'),
    responsive: [
     {
       breakpoint: 766,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
      },
    ]
  });
  /*=======/team-slider========*/

  /*========News-slider========*/
  $('.news-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: $('.news .slider-arrow_prev'),
    nextArrow: $('.news .slider-arrow_next'),
    responsive: [
     {
       breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
      },
    ]
  });
  /*=======/news-slider========*/

  /*==selection-slider==*/
  $('.selection-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      slidesPerRow: 4,
      rows: 2,
      prevArrow: $('.selection .slider-arrow_prev'),
      nextArrow: $('.selection .slider-arrow_next'),
      dots: true,
      responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesPerRow: 3,
          rows: 2,
        }
      },
      {
        breakpoint: 766,
        settings: {
          slidesPerRow: 2,
          rows: 2,
        }
      },
      {
        breakpoint: 547,
        settings: {
          fade: true,
          slidesPerRow: 1,
          rows: 2,
          dots: false,
        }
      },
      ]
  });
  /*==/selection-slider==*/
  /*=========/sliders==========*/

});


// slider home
 var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: 'true'
      },
      autoplay: {
	    delay: 5000,
	  },
    });

var swiper_about = new Swiper('#about .swiper-container', {
      slidesPerView: 4,
      spaceBetween: 30,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }, 
      autoplay: {
	    delay: 5000,
	  },
    });
//menumobail
$(document).ready(function() {
  $(document).on('click', '.menu-trigger', function(e) {
  	e.preventDefault();
    $(this).toggleClass('close');
    $('.navbar').slideToggle(500);
  });//end slide toggle
});//end ready

//Animate numbr
$(document).ready(function(){
    var show = true;
	var countbox = "#about";
	$(window).on("scroll load resize", function(){
		if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
		var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
		var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
		var w_height = $(window).height();        // Высота окна браузера
		var d_height = $(document).height();      // Высота всего документа
		var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
		if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
			$(".number").spincrement({
				thousandSeparator: "",
				duration: 1200
			});
			show = false;
		}
	});
});
//heidg
$('.service').equalHeights();
//mask
$(document).ready(function(){
  $('#af_phone').mask('+7(999) 999-9999');
});
//slider viseo
var swiper_equfunci = new Swiper('#equfunci .swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: 'true',
      },
      autoplay: {
	    delay: 3000,
	  },
    });
$(document).ready(function() {
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
});
//slider
var swiper_relations = new Swiper('#relations .swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
	    delay: 3000,
	  },
    });
var swiper_reviews = new Swiper('#reviews .swiper-container', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next-er'
      },
	  autoplay: {
	    delay: 8000,
	  },
    });
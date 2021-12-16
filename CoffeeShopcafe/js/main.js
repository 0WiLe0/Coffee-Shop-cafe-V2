$(function(){

	$('.reviews_slider').slick({
	  infinite: true,
	  dots:true,
	  arrows:false,
	  slidesToShow: 2,
	  slidesToScroll: 2
	})

	$('.cafe_slider').slick({
	  infinite: true,
	  dots:true,
	  arrows:false,
	  slidesToShow: 2,
	  slidesToScroll: 2
	})
	
	$('.slider').slick({
	  infinite: true,
	  dots:true,
	  arrows:false,
	  speed: 1000
	});

	const menuButton = document.querySelector('.menu-button');
	const menu = document.querySelector('.nav');
	menuButton.addEventListener('click', function () {
	  menuButton.classList.toggle('menu-button-active')
	  console.log('Клик по кнопке')
	  menu.classList.toggle('nav-active');
	})

});
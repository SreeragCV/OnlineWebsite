$(window).scroll(function() {
	if ($(document).scrollTop() > 30) {
	  $('.navbar').addClass('color-change');
	} else {
	  $('.navbar').removeClass('color-change');
	}
});

  
$(window).scroll(function() {
	if ($(document).scrollTop() > 15) {
		$('.arrow').addClass('newarrow')
		$('.sWord').addClass('newWord')
	} else {
		$('.arrow').removeClass('newarrow')
		$('.sWord').removeClass('newWord')
	}
});


$(window).scroll(function() {
	if ($(document).scrollTop() > 950) {
	  $('.time').addClass('newTime');
	} else {
	  $('.time').removeClass('newTime');
	}
});


$('body').prepend('<a href="#home" class="back-to-top page-scroll">Back to Top</a>');
const amountScrolled = 700;
$(window).scroll(function() {
	if ($(window).scrollTop() > amountScrolled) {
		$('a.back-to-top').fadeIn('500');
	} else {
		$('a.back-to-top').fadeOut('500');
	}
});
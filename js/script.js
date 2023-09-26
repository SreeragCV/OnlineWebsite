$(window).scroll(function() {
	if ($(document).scrollTop() > 30) {
	  $('.navbar').addClass('color-change');
	} else {
	  $('.navbar').removeClass('color-change');
	}
});

  
$(window).scroll(function() {
	if ($(document).scrollTop() > 10) {
		$('.arrow').addClass('newarrow')
		$('.sWord').addClass('newWord')
	} else {
		$('.arrow').removeClass('newarrow')
		$('.sWord').removeClass('newWord')
	}
});


$(window).scroll(function() {
	if ($(document).scrollTop() > 900) {
	  $('.time').addClass('newTime');
	} else {
	  $('.time').removeClass('newTime');
	}
});


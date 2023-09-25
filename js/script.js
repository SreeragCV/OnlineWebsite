$(window).scroll(function() {
	if ($(document).scrollTop() > 20) {
	  $('.navbar').addClass('color-change');
	  $('.arrow').addClass('newarrow')
	  $('.sWord').addClass('newWord')
	} else {
	  $('.navbar').removeClass('color-change');
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

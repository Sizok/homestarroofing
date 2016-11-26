$(document).ready(function(){
	$(window).scroll(function () {
		var st = $(this).scrollTop();
		if (st<2300) {
			$('#hero-banner').css({
				'transform': 'translate(0%, ' + st / 6 + '%'
			});
			$('.main-text').css({
				'transform': 'translate(0%, -' + st / 1.3 + '%'
			});
		}
	});
	$(function() {
		$('.rslides').responsiveSlides();
	});
});
$(document).ready(function($) {
    /*-- Menu Sticky --*/
			var windows = $(window);
			var sticky = $('.header-sticky')
			windows.on('scroll', function() {
				var scroll = windows.scrollTop();
				if (scroll < 250) {
					sticky.removeClass('stick');
				} else {
					sticky.addClass('stick');
				}
			});
			// mobile menu toggle show and hide
			$(".menu-toggle-btn").click(function(){
				$(".main-menu").toggleClass("open-menu")
			})
			//service-box-show toggle show and hide
			$(".open-search-box").click(function(){
				$(".search-box").toggleClass("service-box-show")
			})
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

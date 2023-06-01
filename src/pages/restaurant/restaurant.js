$(function () {
	$(".restaurant-top__down").click(function () {
		$("html, body").animate(
			{ scrollTop: $(".restaurant-top__img").offset().top + 100 },
			700
		);
	});
	if ($(".rest-photos").length) {
		const restPhotos = new Swiper($(".rest-photos")[0], {
			loop: true,
			spaceBetween: 15,
			preventClicks: false,
			preventClicksPropagation: false,
			centeredSlides: true,
			slidesPerView: "auto",
			loopedSlides: 10,
			navigation: {
				nextEl: $(".rest-photos__gallery-next")[0],
				prevEl: $(".rest-photos__gallery-prev")[0],
			},
		});
	}
	if ($(".restaurant-menu__slider").length) {
		let lngth = $(".restaurant-menu__slider").find(".swiper-slide").length;
		let menu = new Swiper(".restaurant-menu__slider", {
			speed: 400,
			loop: true,
			spaceBetween: 100,
			slidesPerView: 1,
			mousewheel: {
				forceToAxis: true,
			},
			on: {
				init: function (swiper) {
					$(".restaurant-menu__pagi").html(
						`<span>${String(this.realIndex + 1).padStart(
							2,
							"0"
						)}</span><span></span><span>${String(lngth).padStart(
							2,
							"0"
						)}</span>`
					);
				},
				slideChange: function () {
					$(".restaurant-menu__pagi").html(
						`<span>${String(this.realIndex + 1).padStart(
							2,
							"0"
						)}</span><span></span><span>${String(lngth).padStart(
							2,
							"0"
						)}</span>`
					);
				},
			},
			navigation: {
				nextEl: ".restaurant-menu__nav-next",
				prevEl: ".restaurant-menu__nav-prev",
			},
		});
	}
});

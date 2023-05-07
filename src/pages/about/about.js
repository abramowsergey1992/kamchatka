$(function () {
	if ($(".aboutp").length) {
		$(".aboutp__down").click(function () {
			$("html, body").animate(
				{ scrollTop: $(".whitebox").offset().top - 60 },
				700
			);
		});
		const swiper = new Swiper($(".about-full-slider")[0], {
			loop: true,
			spaceBetween: 15,
			effect: "fade",

			centeredSlides: true,
			slidesPerView: "auto",
			loopedSlides: 0,
			navigation: {
				nextEl: $(".about-full-slider__nav-next")[0],
				prevEl: $(".about-full-slider__nav-prev")[0],
			},
			on: {
				init: function (swiper) {
					$(".about-full-slider__pagi").html(
						`<span>${String(this.realIndex + 1).padStart(
							2,
							"0"
						)}</span><span></span><span>${String(
							this.slides.length
						).padStart(2, "0")}</span>`
					);
				},
				slideChange: function () {
					$(".about-full-slider__pagi").html(
						`<span>${String(this.realIndex + 1).padStart(
							2,
							"0"
						)}</span><span></span><span>${String(
							this.slides.length
						).padStart(2, "0")}</span>`
					);
				},
			},
		});

		const aboutPhotos = new Swiper($(".about-photos")[0], {
			loop: true,
			spaceBetween: 15,
			preventClicks: false,
			preventClicksPropagation: false,
			centeredSlides: true,
			slidesPerView: "auto",
			loopedSlides: 10,
			navigation: {
				nextEl: $(".about-photos__gallery-next")[0],
				prevEl: $(".about-photos__gallery-prev")[0],
			},
		});
		// const aboutText1Slider = new Swiper($(".about-text-1__slider")[0], {
		// 	loop: true,
		// 	autoplay: {
		// 		delay: 5000,
		// 	},
		// 	speed: 1000,
		// 	on: {
		// 		init: function (swiper) {
		// 			$(".about-text-1__slider-pagi").html(
		// 				`<span>${String(this.realIndex + 1).padStart(
		// 					2,
		// 					"0"
		// 				)}</span><span></span><span>${String(
		// 					this.slides.length
		// 				).padStart(2, "0")}</span>`
		// 			);
		// 		},
		// 		slideChange: function () {
		// 			$(".about-text-1__slider-pagi").html(
		// 				`<span>${String(this.realIndex + 1).padStart(
		// 					2,
		// 					"0"
		// 				)}</span><span></span><span>${String(
		// 					this.slides.length
		// 				).padStart(2, "0")}</span>`
		// 			);
		// 		},
		// 	},
		// });
	}
});

$(function () {
	let i = 1;
	$(".p-slider-service>.swiper-wrapper>.swiper-slide").each(function () {
		$(this).attr("data-slide", i);
		i++;
	});
	i = 1;
	$(".p-slider-tour>.swiper-wrapper>.swiper-slide").each(function () {
		$(this).attr("data-slide", i);
		i++;
	});
	$(".p-slider-tour__swiper").each(function () {
		const tour = new Swiper(this, {
			speed: 400,
			shortSwipes: false,
			navigation: {
				nextEl: ".p-slider-tour__nav-next",
				prevEl: ".p-slider-tour__nav-prev",
			},
		});
	});
	$(".p-slider-service__swiper").each(function () {
		const service = new Swiper(this, {
			speed: 400,
			shortSwipes: false,
			navigation: {
				nextEl: ".p-slider-service__nav-next",
				prevEl: ".p-slider-service__nav-prev",
			},
		});
	});
	const service = new Swiper(".p-slider-service", {
		speed: 400,
		loop: true,
		allowTouchMove: false,
		shortSwipes: false,
		preventClicks: true,
		preventClicksPropagation: true,
		// navigation: {
		// 	nextEl: ".p-slider-service__nav-next",
		// 	prevEl: ".p-slider-service__nav-prev",
		// },
	});
	// $(".p-slider-service__nav-next").click(function () {
	// 	service.slideNext();
	// });
	// $(".p-slider-service__nav-prev").click(function () {
	// 	service.slidePrev();
	// });
	$("[data-serviceslide]").click(function () {
		let slide = $(this).data("serviceslide");
		service.slideTo(slide);
		$("#popup-service").fadeIn();
		$("html").addClass("_no-scroll");
		setTimeout(function () {
			location.hash = $(
				".p-slider-service>.swiper-wrapper>.swiper-slide.swiper-slide-active"
			).attr("id");
		}, 100);
	});
	const tours = new Swiper(".p-slider-tour", {
		speed: 20,
		loop: true,
		preventClicks: true,
		preventClicksPropagation: true,
		allowTouchMove: false,
		shortSwipes: false,
		// navigation: {
		// 	nextEl: ".p-slider-service__nav-next",
		// 	prevEl: ".p-slider-service__nav-prev",
		// },
	});
	// $(".p-slider-tour__nav-next").click(function () {
	// 	tours.slideNext();
	// });
	// $(".p-slider-tour__nav-prev").click(function () {
	// 	sertoursice.slidePrev();
	// });
	$("[data-tourslide]").click(function () {
		let slide = $(this).data("tourslide");
		tours.slideTo(slide);
		$("#popup-tours").fadeIn();
		$("html").addClass("_no-scroll");
		setTimeout(function () {
			location.hash = $(
				".p-slider-tour>.swiper-wrapper>.swiper-slide.swiper-slide-active"
			).attr("id");
		}, 100);
	});

	$(".popup-sl__close").click(function () {
		$(this).closest(".popup-sl").fadeOut();
		$("html").removeClass("_no-scroll");
		location.hash = "";
	});
	if ($(location.hash).closest(".popup-sl")) {
		if (
			$(location.hash).closest(".popup-sl").attr("id") == "popup-service"
		) {
			let slide = $(location.hash).attr("data-slide");
			console.log("slide", slide);
			service.slideTo(slide);
			$("#popup-service").fadeIn();
			$("html").addClass("_no-scroll");
		}
		if ($(location.hash).closest(".popup-sl").attr("id") == "popup-tours") {
			let slide = $(location.hash).attr("data-slide");
			tours.slideTo(slide);
			$("#popup-tours").fadeIn();
			$("html").addClass("_no-scroll");
		}
	}
});

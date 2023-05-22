$(function () {
	const service = new Swiper(".p-slider-service", {
		speed: 400,
		loop: true,
		shortSwipes: false,
		// navigation: {
		// 	nextEl: ".p-slider-service__nav-next",
		// 	prevEl: ".p-slider-service__nav-prev",
		// },
	});
	$(".p-slider-service__nav-next").click(function () {
		service.slideNext();
	});
	$(".p-slider-service__nav-prev").click(function () {
		service.slidePrev();
	});
	$("[data-serviceslide]").click(function () {
		let slide = $(this).data("serviceslide");
		service.slideTo(slide);
		$("#popup-service").fadeIn();
		$("html").addClass("_no-scroll");
	});
	const tours = new Swiper(".p-slider-tour", {
		speed: 400,
		loop: true,
		shortSwipes: false,
		// navigation: {
		// 	nextEl: ".p-slider-service__nav-next",
		// 	prevEl: ".p-slider-service__nav-prev",
		// },
	});
	$(".p-slider-tour__nav-next").click(function () {
		tours.slideNext();
	});
	$(".p-slider-tour__nav-prev").click(function () {
		sertoursice.slidePrev();
	});
	$("[data-tourslide]").click(function () {
		let slide = $(this).data("tourslide");
		tours.slideTo(slide);
		$("#popup-tours").fadeIn();
		$("html").addClass("_no-scroll");
	});

	$(".popup-sl__close").click(function () {
		$(this).closest(".popup-sl").fadeOut();
		$("html").removeClass("_no-scroll");
	});
});

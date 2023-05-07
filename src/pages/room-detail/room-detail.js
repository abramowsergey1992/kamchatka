Fancybox.bind("[data-fancybox]", {});

$(function () {
	$(".room-detail__top-down").click(function () {
		$("html, body").animate({ scrollTop: window.innerHeight }, 400);
	});
	if ($(".room-detail__gallery").length) {
		const swiper = new Swiper($(".room-detail__gallery")[0], {
			loop: true,
			spaceBetween: 15,
			preventClicks: false,
			preventClicksPropagation: false,
			centeredSlides: true,
			slidesPerView: "auto",
			loopedSlides: 10,
			navigation: {
				nextEl: $(".room-detail__gallery-next")[0],
				prevEl: $(".room-detail__gallery-prev")[0],
			},
		});
	}
});

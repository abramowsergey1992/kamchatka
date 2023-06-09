$(function(){})
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

$(function () {
	ymaps.ready(function () {
		createMap1();
	});
	function filterBg() {
		$(".contact__layers").each(function () {
			let active = $(this).find(".contact__layer-btn._active");
			$(this).find(".contact__layers-bg").css({
				left: active.position().left,
				top: active.position().top,
				width: active.outerWidth(),
				height: active.outerHeight(),
			});
		});
	}

	function createMap1() {
		let img = $(".contact__maps").data("marker");

		if ($(".contact").length) {
			var myMap = new ymaps.Map("map_1", {
				center: [52.953556, 158.252907],
				zoom: 11,
				controls: ["zoomControl"],
				behaviors: [
					"ScrollZoom",
					// 	"drag",
					// 	"dblClickZoom",
					// 	"multiTouch",
					// 	"rightMouseButtonMagnifier",
				],
			});
			var multiRoute = new ymaps.multiRouter.MultiRoute(
				{
					referencePoints: [
						"Петрапаловск-Камчатский",
						"52.953556,158.252907",
					],
					params: {
						// viaIndexes: [1],
						results: 1,
						wayPointFinishIconContent: "sasd",
					},
				},
				{
					wayPointFinishIconContent: "sasd",

					zoomMargin: [60, 0, 50, 0],
					zoomMargin: [60, 0, 50, 0],
					boundsAutoApply: true,
				}
			);

			myMap.geoObjects.add(multiRoute);

			var myMap2 = new ymaps.Map("map_2", {
				center: [52.953556, 158.252907],
				zoom: 11,
				controls: ["zoomControl"],
				behaviors: [
					"ScrollZoom",
					// 	"drag",
					// 	"dblClickZoom",
					// 	"multiTouch",
					// 	"rightMouseButtonMagnifier",
				],
			});
			var multiRoute2 = new ymaps.multiRouter.MultiRoute(
				{
					referencePoints: [
						"Аэропорт «Елизово»",
						"52.953556,158.252907",
					],
					params: {
						// viaIndexes: [1],
						results: 1,
					},
				},
				{
					wayPointFinishIconContent: "sasd",
					wayPointFinishIconLayout: "default#image",
					wayPointFinishIconImageHref: img,
					wayPointFinishIconImageSize: [61, 61],
					wayPointFinishIconImageOffset: [-30, -30],

					zoomMargin: [60, 0, 50, 0],
					boundsAutoApply: true,
				}
			);

			myMap2.geoObjects.add(multiRoute2);
		}
		filterBg();
		$(".contact__layer-btn").click(function () {
			$(".contact__layer-btn").removeClass("_active");
			$(this).addClass("_active");
			$(".contact__map").stop().fadeOut();
			$($(this).data("map")).stop().fadeIn();
			filterBg();
		});
		$(".contact__layer-btn").first().trigger("click");
	}
});

$(function () {});

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

$(function () {
	$(".rooms__filter").click(function () {
		$(".rooms__filter").removeClass("_active");
		$(this).addClass("_active");
		let f = $(this).data("filter");
		if (f == "all") {
			$(".room").stop().slideDown();
		} else {
			$(".room").each(function () {
				if (f == $(this).data("filter")) {
					$(this).stop().slideDown();
				} else {
					$(this).stop().slideUp();
				}
			});
		}
	});
});

$(function(){})
$(function(){})
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

$(function () {
	AOS.init({
		// Global settings:
		disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
		initClassName: "aos-init", // class applied after initialization
		animatedClassName: "aos-animate", // class applied on animation
		useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
		disableMutationObserver: false, // disables automatic mutations' detections (advanced)
		debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
		throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

		// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
		offset: 120, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 1000, // values from 0 to 3000, with step 50ms
		easing: "ease", // default easing for AOS animations
		once: true, // whether animation should happen only once - while scrolling down
		mirror: false, // whether elements should animate out while scrolling past them
		anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
	});
});


class Navigation {
	static nav = document.getElementById("nav");
	static bg = document.getElementsByClassName("nav__bg")[0];
	static menu = document.getElementsByClassName("nav__menu")[0];
	static logo = document.getElementById("nav-logo");
	static burger = document.getElementById("nav-burger");
	// static refs = {
	// 	items: Array.from(document.getElementsByClassName("nav-item")),
	// 	about: document.getElementsByClassName("about")[0],
	// 	habit: document.getElementsByClassName("habit")[0],
	// 	// bering: document.getElementsByClassName("bering")[0],
	// 	// services: document.getElementsByClassName("services")[0],
	// 	// tours: document.getElementsByClassName("tours")[0],
	// 	contacts: document.getElementsByClassName("footer")[0],
	// };

	constructor() {
		// Navigation.logo.onclick = () => {
		// 	this.navOff();
		// 	window.scrollTo({ top: 0, behavior: "smooth" });
		// };

		Navigation.burger.onclick = () => {
			if (Navigation.nav.classList.contains("active")) this.navOff();
			else this.navOn();
		};

		window.addEventListener("scroll", () => {
			if (
				window.scrollY > 20 &&
				!Navigation.nav.classList.contains("down")
			)
				Navigation.nav.classList.add("down");
			if (
				window.scrollY < 20 &&
				Navigation.nav.classList.contains("down")
			)
				Navigation.nav.classList.remove("down");
		});

		// Navigation.refs.items.forEach((navItem, index) => {
		// 	navItem.onclick = () => {
		// 		this.navTo(index);
		// 	};
		// });
	}

	navOff() {
		document.body.style.overflow = "";
		Navigation.nav.classList.remove("active");
		setTimeout(() => {
			Navigation.bg.style.display = "none";
			Navigation.menu.style.display = "none";
		}, 730);
	}

	navOn() {
		document.body.style.overflow = "hidden";
		Navigation.bg.style.display = "";
		Navigation.menu.style.display = "";
		setTimeout(() => {
			Navigation.nav.classList.add("active");
		}, 30);
	}

	navTo(index) {
		this.navOff();
		switch (index % 6) {
			case 0:
				Navigation.refs.about.scrollIntoView({
					block: "center",
					behavior: "smooth",
				});
				break;
			case 1:
				Navigation.refs.habit.scrollIntoView({
					block: "center",
					behavior: "smooth",
				});
				break;
			case 2:
				Navigation.refs.bering.scrollIntoView({
					block: "center",
					behavior: "smooth",
				});
				break;
			case 3:
				Navigation.refs.services.scrollIntoView({
					block: "center",
					behavior: "smooth",
				});
				break;
			case 4:
				Navigation.refs.tours.scrollIntoView({
					block: "start",
					behavior: "smooth",
				});
				break;
			case 5:
				Navigation.refs.contacts.scrollIntoView({
					block: "start",
					behavior: "smooth",
				});
				break;
		}
	}
}

const navigation = new Navigation();
const controller = new ScrollMagic.Controller();

//#region Header
const headerTiming = 4700;
const headerSwiperProgressElems = {
	numCurSlide: document.getElementById("header-cur-slide"),
	numCountSlides: document.getElementById("header-count-slides"),
};

if (document.querySelector(".front-page")) {
	let l = $(".header_bg-slide").length;
	const headerSwiper = new Swiper("#header-bg-swiper", {
		loop: true,
		direction: "vertical",
		watchSlidesProgress: true,
		// autoplay: {
		// 	delay: headerTiming,
		// 	disableOnInteraction: false,
		// 	waitForTransition: true,
		// },
		// effect: "creative",
		// creativeEffect: {
		// 	prev: {
		// 		shadow: false,
		// 		scale: 0.85,
		// 	},
		// 	next: {
		// 		shadow: false,
		// 		scale: 0.85,
		// 	},
		// },
		speed: 1000,

		on: {
			progress: function (swiper, progress) {},
			init: function () {
				$(".header__swiper-progress p").html(
					`<span id="header-cur-slide">${String(
						this.realIndex + 1
					).padStart(
						2,
						"0"
					)}</span> / <span id="header-count-slides">${String(
						l
					).padStart(2, "0")}</span>`
				);
			},

			slideChange: function () {
				$(".header__swiper-progress p").html(
					`<span id="header-cur-slide">${String(
						this.realIndex + 1
					).padStart(
						2,
						"0"
					)}</span> / <span id="header-count-slides">${String(
						l
					).padStart(2, "0")}</span>`
				);
			},
			slideNextTransitionEnd: function () {
				// headerTimer.start();
				// $("#header-bg-swiper").removeClass("_anim");
			},
		},
	});

	let path = $("#timer-path");
	let autoplay = 5000;
	let delay = 400;
	let t = 0;
	let procent = 0;
	let anim = true;
	let tm = autoplay + delay;
	setTimeout(function () {
		$(".header__content-text").addClass("_anim");
	}, 1300);
	setInterval(function () {
		if (t >= delay && anim == true) {
			anim = false;
			$("#header-bg-swiper").removeClass("_anim");
		}
		if (t >= autoplay && anim == false) {
			anim = true;
			$("#header-bg-swiper").addClass("_anim");
		}
		if (t >= tm) {
			headerSwiper.slideNext();
			t = -10;
		}
		procent = 100 / 100 / (tm / t);

		path.css("strokeDasharray", 440 * procent + " 440");
		t += 10;
	}, 10);
	$(".header__swiper-arrow").click(function () {
		t = autoplay;
	});
	//#endregion

	//#region intro
	const introSwiperProgressElems = {
		numCurSlide: document.getElementById("intro-cur-slide"),
		numCountSlides: document.getElementById("intro-count-slides"),
	};
	const introSwiper = new Swiper("#intro-img-swiper", {
		loop: true,
		effect: "fade",
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
			waitForTransition: true,
		},
		speed: 1000,
		on: {
			init: function () {
				introSwiperProgressElems.numCountSlides.textContent = String(
					this.slides.length
				).padStart(2, "0");
			},
			slideNextTransitionStart: function () {
				introSwiperProgressElems.numCurSlide.textContent = String(
					this.realIndex + 1
				).padStart(2, "0");
			},
		},
	});

	// new ScrollMagic.Scene({
	// 	duration: 600,
	// 	triggerElement: "#intro",
	// 	// triggerHook: "onLeave",
	// })
	// 	// .setPin("#intro")
	// 	.setTween(
	// 		new TimelineMax()
	// 			.add(
	// 				TweenMax.to("#intro_main-text", {
	// 					opacity: 1,
	// 				})
	// 			)
	// 			.add(
	// 				TweenMax.to("#intro-text01", {
	// 					opacity: 1,
	// 				})
	// 			)
	// 			.add(
	// 				TweenMax.to("#intro-text02", {
	// 					opacity: 1,
	// 				})
	// 			)
	// 	)
	// 	.addTo(controller);

	// new ScrollMagic.Scene({
	// 	duration: 600,
	// 	triggerElement: "#intro_main-text",
	// 	triggerHook: "onLeave",
	// })
	// 	.setTween(
	// 		new TimelineMax()
	// 			.add(
	// 				TweenMax.to("#intro-img-swiper-box", {
	// 					opacity: 1,
	// 					bottom:
	// 						parseInt(
	// 							getComputedStyle(
	// 								document.getElementById(
	// 									"intro-img-swiper-box"
	// 								)
	// 							).bottom
	// 						) + 100,
	// 				})
	// 			)
	// 			.add(
	// 				TweenMax.to("#intro-img", {
	// 					opacity: 1,
	// 					bottom:
	// 						parseInt(
	// 							getComputedStyle(
	// 								document.getElementById("intro-img")
	// 							).bottom
	// 						) + 100,
	// 				})
	// 			)
	// 	)
	// 	.addTo(controller);

	// //#endregion

	// //#region about
	// new ScrollMagic.Scene({
	// 	duration: 600,
	// 	triggerElement: "#about-trigger",
	// })
	// 	.setTween(
	// 		new TimelineMax()
	// 			.add(
	// 				TweenMax.to("#about-title", {
	// 					opacity: 1,
	// 				})
	// 			)
	// 			.add(
	// 				TweenMax.to("#about-text", {
	// 					opacity: 1,
	// 				})
	// 			)
	// 			.add(
	// 				TweenMax.to("#about-but", {
	// 					opacity: 1,
	// 				})
	// 			)
	// 			.add(
	// 				TweenMax.to("#about-chalet", {
	// 					opacity: 1,
	// 				})
	// 			)
	// 			.add(
	// 				TweenMax.to("#about-house", {
	// 					opacity: 1,
	// 					bottom: 0,
	// 				})
	// 			)
	// 	)
	// 	.addTo(controller);
	// //#endregion

	//#region habbit
	const habbitSwiperProgressElems = {
		numCurSlide: document.getElementById("habbit-cur-slide"),
		numCountSlides: document.getElementById("habbit-count-slides"),
	};
	let clone = $("#habbit-img-swiper").clone();
	let sl = $("#habbit-info-swiper .swiper-slide").length;
	const habbitImgSwiper = new Swiper("#habbit-img-swiper", {
		// loop: true,
		speed: 500,
		allowTouchMove: false,
		navigation: {
			nextEl: "#habbit-swiper-next",
			prevEl: "#habbit-swiper-prev",
		},
		// effect: "creative",
		// creativeEffect: {
		// 	prev: {
		// 		translate: [0, 0, -400],
		// 	},
		// 	next: {
		// 		translate: ["-100%", 0, 0],
		// 	},
		// },

		on: {
			init: function () {
				$(".habbit-card__info-progress").html(
					`   <p id="habbit-cur-slide">${String(
						this.realIndex + 1
					).padStart(2, "0")}</p>
                  <div></div>
                  <p id="habbit-count-slides">${String(sl).padStart(2, "0")}</p>
					`
				);
			},
			update: function () {
				$(".habbit-card__info-progress").html(
					`   <p id="habbit-cur-slide">${String(
						this.realIndex + 1
					).padStart(2, "0")}</p>
                  <div></div>
                  <p id="habbit-count-slides">${String(sl).padStart(2, "0")}</p>
					`
				);
			},
			slideChange: function () {
				$(".habbit-card__info-progress").html(
					`   <p id="habbit-cur-slide">${String(
						this.realIndex + 1
					).padStart(2, "0")}</p>
                  <div></div>
                  <p id="habbit-count-slides">${String(sl).padStart(2, "0")}</p>
					`
				);
			},
			slidePrevTransitionStart: function () {
				$(".habbit-card__info-progress").html(
					`   <p id="habbit-cur-slide">${String(
						this.realIndex + 1
					).padStart(2, "0")}</p>
                  <div></div>
                  <p id="habbit-count-slides">${String(sl).padStart(2, "0")}</p>
					`
				);
			},
		},
	});

	const habbitInfoSwiper = new Swiper("#habbit-info-swiper", {
		// loop: true,
		allowTouchMove: false,
		speed: 500,
		effect: "creative",
		slidesPerView: 1,
		creativeEffect: {
			prev: {
				translate: [0, 0, -400],
				opacity: 0,
			},
			next: {
				translate: ["100%", 0, 0],
			},
		},
		navigation: {
			nextEl: "#habbit-swiper-next",
			prevEl: "#habbit-swiper-prev",
		},
	});

	$(".habbit-menu__item").click(function () {
		$(".habbit-menu__item").removeClass("active");
		$(this).addClass("active");
		let f = $(this).data("filter");
		if (f == "all") {
			$(this).removeClass("_d-none");
			sl = clone.find(".swiper-slide").length;
			// $(this).addClass("swiper-slide");
		} else {
			$(".habbit-card__slide").each(function () {
				if (f == $(this).data("filter")) {
					$(this).removeClass("_d-none");
					// $(this).addClass("swiper-slide");
				} else {
					$(this).addClass("_d-none");
					// $(this).removeClass("swiper-slide");
				}
			});

			sl = clone.find(".swiper-slide[data-filter='" + f + "']").length;
		}
		habbitImgSwiper.update();
		habbitImgSwiper.slideTo(0);
		habbitInfoSwiper.update();
		habbitInfoSwiper.slideTo(0);
	});
	//#endregion

	//#region bering
	const beringSwiper = new Swiper("#bering-swiper", {
		loop: true,
		spaceBetween: 15,

		centeredSlides: true,
		slidesPerView: "auto",
		loopedSlides: 10,
		navigation: {
			nextEl: "#bering-swiper-next",
			prevEl: "#bering-swiper-prev",
		},
	});

	// beringSwiper.on("slideNextTransitionEnd", function () {
	// 	const slide = this.slides[0];
	// 	slide.classList.add("invisible");
	// 	this.removeSlide(0);
	// 	this.appendSlide(slide);
	// 	setTimeout(() => {
	// 		this.slides.at(-1).classList.remove("invisible");
	// 	}, 30);
	// });
	// beringSwiper.on("slidePrevTransitionEnd", function () {
	// 	const ind = this.slides.length - 1;
	// 	const slide = this.slides[ind];
	// 	slide.classList.add("invisible");
	// 	this.removeSlide(ind);
	// 	this.prependSlide(slide);
	// 	setTimeout(() => {
	// 		this.slides.at(0).classList.remove("invisible");
	// 	}, 30);
	// });
	//#endregion

	//#region services
	if ($("#services-img-swiper").length) {
		const servicesThumbSwiper = new Swiper("#services-thumb-swiper", {
			speed: 1000,
			slidesPerGroup: 1,
			slidesPerView: "auto",
			spaceBetween: 20,
		});

		const servicesInfoSwiper = new Swiper("#services-info-swiper", {
			speed: 1000,
			allowTouchMove: false,
		});

		const servicesImgSwiper = new Swiper("#services-img-swiper", {
			initialSlide: servicesInfoSwiper.slides.length - 1,
			speed: 1000,
			allowTouchMove: false,
			loop: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
				waitForTransition: true,
			},
			thumbs: {
				swiper: servicesThumbSwiper,
			},
			on: {
				slideNextTransitionStart: function () {
					servicesInfoSwiper.slideTo(this.realIndex);
				},
				slidePrevTransitionStart: function () {
					servicesInfoSwiper.slideTo(this.realIndex);
				},
				slideChange: function (swiper) {
					$(".services-thumb-scroll__it").removeClass("_active");
					$(".services-thumb-scroll__it")
						.eq(swiper.activeIndex - 1)
						.addClass("_active");
					console.log("axx");
				},
			},
		});
		setTimeout(function () {
			$(".services-thumb-scroll__it").eq(0).addClass("_active");
		}, 100);
		$(".services-thumb-scroll__it").eq(0).addClass("_active");
		$(".services-thumb-scroll__it").click(function () {
			servicesImgSwiper.slideTo($(this).index() + 1);
		});
		servicesImgSwiper.slideNext();
	}
	//#endregion

	//#region tours
	const toursCardSwiper = new Swiper("#tours-card-swiper", {
		speed: 1000,
		slidesPerGroup: 1,
		preventClicksPropagation: false,
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: "#tours-swiper-next",
			prevEl: "#tours-swiper-prev",
		},
	});

	// new ScrollMagic.Scene({
	// 	duration: 500,
	// 	triggerElement: "#tours",
	// })
	// 	.setTween(
	// 		new TimelineMax()
	// 			.add(
	// 				TweenMax.to("#tours-title", {
	// 					opacity: 1,
	// 					top: -74,
	// 				})
	// 			)
	// 			.add(
	// 				TweenMax.to("#tours-grandtext", {
	// 					opacity: 1,
	// 				})
	// 			)
	// 	)
	// 	.addTo(controller);
	//#endregion
}
$(function () {
	var $page = $("html, body");
	if (window.location.hash) {
		if ($(window.location.hash).length) {
			$page.animate(
				{
					scrollTop: $(window.location.hash).offset().top - 80,
				},
				400
			);
		}
	}
	$('a[href*="#"]').click(function () {
		if ($($.attr(this, "href")).length) {
			$page.animate(
				{
					scrollTop: $($.attr(this, "href")).offset().top - 80,
				},
				400
			);
			let nav = document.getElementById("nav");
			let bg = document.getElementsByClassName("nav__bg")[0];
			let menu = document.getElementsByClassName("nav__menu")[0];

			document.body.style.overflow = "";
			nav.classList.remove("active");
			setTimeout(() => {
				bg.style.display = "none";
				menu.style.display = "none";
			}, 730);
		}
		return false;
	});
});

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

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
			},
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

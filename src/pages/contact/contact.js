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
				controls: [],
				// behaviors: [
				// 	"drag",
				// 	"dblClickZoom",
				// 	"multiTouch",
				// 	"rightMouseButtonMagnifier",
				// ],
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
				controls: [],
				// behaviors: [
				// 	"drag",
				// 	"dblClickZoom",
				// 	"multiTouch",
				// 	"rightMouseButtonMagnifier",
				// ],
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

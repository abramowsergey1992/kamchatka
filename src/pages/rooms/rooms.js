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

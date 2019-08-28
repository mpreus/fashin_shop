$(document).ready(function() {
	let stars = $("#rating .product1-star");
	let radios = $(":radio[name='rating']");

	stars.on("mouseenter", function() {
		$(this).prevAll().addBack().addClass("hovered");
	});

	stars.on("mouseleave", function() {
		$(this).prevAll().addBack().removeClass("hovered");
		}
	);

	stars.on("click", function() {
		radios.eq($(this).index()).prop("checked", true);

		$(this).siblings().removeClass("selected");
		$(this).prevAll().addBack().addClass("selected");

	});




})
$(document).ready(function() {
	
/* star-rating system for a product */
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


/* about the company - history 'read more / read less' */
	let historyTrigger = $(".read-more-span"),
		historyContent = $(".read-more-para");

	historyTrigger.on("click", function() {
		historyContent.fadeToggle(1200);
		if ( historyTrigger.text() === "read more..." ) {
			historyTrigger.text("read less...");
		} else {
			historyTrigger.text("read more...");
		}
	});

/* our values - show & hide */
	let valueTitle = $("h4.values-title");

	valueTitle.on("click", function() {
		$(this).next().toggle(700);
	})
	


/* another elements below */




})
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

	historyTrigger.on("click", function(e) {
		e.preventDefault();
		historyContent.fadeToggle(1000);
		if ( historyTrigger.text() === "read more..." ) {
			historyTrigger.text("read less...");
		} else {
			historyTrigger.text("read more...");
		}
	});

/* about the company - our values show & hide */
	let valueTitle = $("h4.values-title");

	valueTitle.on("click", function(e) {
		e.preventDefault();
		$(this).next().toggle(800);
	});

	$("h3.values-all").on("click", function(e) {
		e.preventDefault();
		$("p.values-content").toggle("slow");
	});
	
/* home & the others newsletter e-mail validation */
	$("input.newsletter-button").on("click", function(e) {
		e.preventDefault();
		
		var emailAddress = $("input.newsletter-email");
		
		if ( emailAddress.val() === "" || emailAddress.val().indexOf("@") <= 0 || emailAddress.val().length <= 6)  {
			Swal.fire({
				type: 'error',
				title: 'Oops...',
				text: 'Something went wrong!',
				footer: 'Please, verify your e-mail address',
				confirmButtonColor: '#f27474',
				timer: 6000
			});
			$("input.newsletter-email").val("");
		}
		else {
			Swal.fire({
				type: 'success',
				title: 'Thank you!',
				text: 'You have enrolled for our newsletter!',
				footer: 'First issue in your mailbox soon',
				confirmButtonColor: '#a5dc86',
				timer: 6000
			});
			$("input.newsletter-email").val("");
		}
	}); 

/* fashion site - fashion terms and magazines details show & hide */
	$("h3.fashion-term").on("click", function(e) {
		e.preventDefault();
		$(this).next().toggle("slow");
	});

	$("h3.fashion-magazine").on("click", function(e) {
		e.preventDefault();
		$(this).next().toggle("slow");
	})

/* another elements below */




})
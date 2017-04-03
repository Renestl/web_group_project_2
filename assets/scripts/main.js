$(document).ready(function() {

	// load header, footer and other common elements
	$(function() {
		$("#header").load("common/header.html");
		// , function() {

			// TODO
			// Having issue of changing link colors after header load. Can select elements but only from inside the load function. 
			// on click, the page reloads, but everything inside of the load function is done before the page reload, meaning it's lost.

			// $("a").click(function() {

				// $(this).attr('id').css('color', 'blue');
			// 	console.log(linkId);

			// 	setTimeout("$('a').css('color', 'blue')", 1500);

			// });

		$("#footer").load("common/footer.html");
		$("#interest").load("common/interest.html");
	});

	// function changeColor() {
	// 	$('#header a').removeClass('active');
	// 	$(linkId).addClass('active');
	// 	console.log(`work ${linkId}`);
	// }

	// function changeColor() {
	// 	$("a").click(function() {
	// 		let linkId = $(this).attr('id')
	// 		console.log(linkId);
			
	// 		if(linkId = 'menu') {
	// 			$('a').css('color', 'black');
	// 			$(linkId).css('color', 'blue');
	// 			console.log(linkId);
	// 		}
	// 	})
	// };
	
	// SHRINK & FIX NAV BAR ON SCROLL
	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 147) {
			$('#header').addClass('scrollUp');
		} else {
			$('#header').removeClass('scrollUp');
		}

		
	});


	// TOGGLE MENU TABS
	$('#other').on('click', function() {
		$('.menu-cakes').fadeOut(500, function() {
			$('.menu-other').fadeIn(500);
		});

		$('#cakes').removeClass('option-active')
					.addClass('option-nonactive');

		$('#other').removeClass('option-nonactive')
					.addClass('option-active');
		
	});

	$('#cakes').on('click', function() {
		$('.menu-other').fadeOut(500, function() {
			$('.menu-cakes').fadeIn(500);
		});

		$('#other').removeClass('option-active')
					.addClass('option-nonactive');

		$('#cakes').removeClass('option-nonactive')
					.addClass('option-active');
	});

	// ON CUSTOM FORM SUBMISSION
	if(document.getElementById("idea-form") != null) {
		document.getElementById("idea-form").onsubmit = function submitCustom() {
			let name = document.forms["idea-form"]["user_name"].value;
			let phone = document.forms["idea-form"]["user_phone"].value;

			// validate name and phone are not empty
			if (name === "" || phone === "") {
				alert("Please enter all required information.");
			} else {
				alert(`Thanks for your order ${name}! We will get back to you shortly.`);
				document.getElementById('idea-form').reset();
			}
		}
	}


});


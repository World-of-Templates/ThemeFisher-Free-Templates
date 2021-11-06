(function($) {
	"use strict";

	$(".history-scroller").niceScroll({
		cursorwidth: "10px",
		background: "#0d1015",
		cursorborder: "0",
		cursorborderradius: "0",
		autohidemode: false,
		zindex: 5
	});

	$(".testimonials").owlCarousel({
		margin: 30,
		autoPlay: true,
		autoPlay : 5000,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 1
			},
			768: {
				items: 1
			},
			1024: {
				items: 2
			}
		}
	});
	
	animatedProgressBar();
	windowHieght();
	contactFormValidation();
	previewPannel();

	function animatedProgressBar () {
		$(".progress").each(function() {
			var skillValue = $(this).find(".skill-lavel").attr("data-skill-value");
			$(this).find(".bar").animate({
				width: skillValue
			}, 1500, "easeInOutExpo");

			$(this).find(".skill-lavel").text(skillValue);
		});
	}

	function windowHieght(){
		if ( $(window).height() <=768 ) {
			$(".pt-table").addClass("desktop-768");
		} else {
			$(".pt-table").removeClass("desktop-768");
		}
	}
	
	/*----------------------------------------
		contact form validation
	------------------------------------------*/
	function contactFormValidation() {
		$(".contact-form").validate({
		    rules: {
		        name: {
		            required: true
		        },
		        email: {
		            required: true,
		            email: true
		        },
		        subject: {
		            required: true
		        },
		        message: {
		            required: true
		        }
		    },
		    messages: {
		        name: {
		            required: "Write your name here"
		        },
		        email: {
		            required: "No email, no support"
		        },
		        subject: {
		            required: "you have a reason to contact, write it here"
		        },
		        message: {
		            required: "You have to write something to send this form"
		        }
		    },
		    submitHandler: function(form) {
		        $(form).ajaxSubmit({
		            type: "POST",
		            data: $(form).serialize(),
		            url : "mail.php",
		            success: function() {
		                $(".contact-form").fadeTo( "slow", 1, function() {
		                    $(".contact-form .msg-success").slideDown();
		                });
		                $(".contact-form").resetForm();
		            },
		            error: function() {
		                $(".contact-form").fadeTo( "slow", 1, function() {
		                    $(".contact-form .msg-failed").slideDown();
		                });
		            }
		        });
		    },
		    errorPlacement: function(error, element) {
		        element.after(error);
		        error.hide().slideDown();
		    }
		}); 
	}

	/*----------------------------------------
		Isotope Masonry
	------------------------------------------*/
	function isotopeMasonry() {
		$(".isotope-gutter").isotope({
		    itemSelector: '[class^="col-"]',
		    percentPosition: true
		});
		$(".isotope-no-gutter").isotope({
		    itemSelector: '[class^="col-"]',
		    percentPosition: true,
		    masonry: {
		        columnWidth: 1
		    }
		});

		$(".filter a").on("click", function(){
		    $(".filter a").removeClass("active");
		    $(this).addClass("active");
		   // portfolio fiter
		    var selector = $(this).attr("data-filter");
		    $(".isotope-gutter").isotope({
		        filter: selector,
		        animationOptions: {
		            duration: 750,
		            easing: "linear",
		            queue: false
		        }
		    });
		    return false;
		});
	}

	/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
	    Preview Pannel
	-=-=-=-=-=-=-=-=-=--=-=-=-=-=-*/
	function previewPannel() {
	    $(".switcher-trigger").on("click", function() {
	        $(".preview-wrapper").toggleClass("extend");
	        return false;
	    });
	    if ($(window).width() < 768 ) {            
	        //$(".preview-wrapper").removeClass("extend");            
	    }
	    $(".color-options li").on("click", function(){
	        if ($("body").hasClass("back-step")) {
	            $("#color-changer").attr({
	                "href":"../css/colors/"+$(this).attr("data-color")+".css"
	            });
	        }else {
	            $("#color-changer").attr({
	                "href":"css/colors/"+$(this).attr("data-color")+".css"
	            });
	        }
	        return false;
	    });
	}
	
	$(window).on("load", function() {
		$(".preloader").addClass("active");
		isotopeMasonry();
		setTimeout(function () {
		    $(".preloader").addClass("done");
		}, 1500);
	});
})(jQuery);
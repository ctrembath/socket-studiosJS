$(document).ready(function () {

	$("section img").on("click", function () {

		$("div#lightbox").fadeIn();
		var src = $(this).attr("src");
		$("div#lightbox img").attr("src", src);

		return false;
	});

	$("div#lightbox").on("click", function () {
		$("div#lightbox").fadeOut();
		return false;
	});

//Starting new js code

//pixel box - 

$(document).on("scroll", function () {
	var t=$(document).scrollTop();

	$("div#distance").html(t+"pixels down");
	
//stopping it keep scrolling accross the page - 

	if(t < 1000) {
		$("div#distance").css("right", t/5);
	}

	$("div#distance").hide();

// adding color when scroll

	$("body").toggleClass("nonagram" , t > 200);

	$("body").toggleClass("kellyshaw" , t > 960);

	$("body").toggleClass("nylllon" , t > 1900);

//JS for header-

	if(t > 30) {
		$("header").css("top", 0);
	}
	else {
		$("header").css("top", -200);
	}

	//Background color change (alpha means opacity)

	var alpha = Math.min(t/2000, 0.5);

	var bg = "rgba(0,0,0,"+alpha+")";

	$("header").css("background", bg);

	//Logo Shrinker - shorthand w to represent 'width'

	var w = 600 - t/4;

	w= Math.max(200, w);
	w=Math.min(400,w);

	$("header img").css("width", w);


}) //End of scroll event


});//End of the doc ready
$(function(){
	
	var carouselList = $("#images ul");

	setInterval(slideNext, 5000);

	function moveFirstSlide () {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	};

	function moveLastSlide () {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({marginLeft:-800});
	};

	function slideNext() {
		carouselList.animate({'marginLeft':-800}, 500, moveFirstSlide);
		moveNextIndicator();
	};

	function slidePrev() {
		moveLastSlide();
		carouselList.animate({'marginLeft':0}, 500);
		movePrevIndicator();
	};

	function moveNextIndicator() {
		var active = $('.controls .fa-circle');
		var next = active.next();

		if (next.length == 0) {
			next = $('.controls i').first();
		}

		next.addClass('fa-circle').removeClass('fa-circle-o');
		active.removeClass('fa-circle').addClass('fa-circle-o');
	};

	function movePrevIndicator() {
		var active = $('.controls .fa-circle');
		var prev = active.prev();

		if (prev.length == 0) {
			prev = $('.controls i').last();
		}
		prev.addClass('fa-circle').removeClass('fa-circle-o');
		active.removeClass('fa-circle').addClass('fa-circle-o');
	};

	$(".next").on('click', slideNext);
	$(".prev").on('click', slidePrev);

});
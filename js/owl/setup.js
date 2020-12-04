$('.owl-carousel').owlCarousel({
    loop:true,
    margin:8,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})

( function() {
	$('#btn-search').on('click', function(e) {
		e.preventDefault();
		$('#search').animate({width: 'toggle'}).focus();

	});
} () );
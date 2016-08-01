$(document).ready(function(){
	
    // Header slider
	$("#carouselOne").owlCarousel({

        // Options
        navText:        ["<i class='glyphicon glyphicon-chevron-left'></i>","<i class='glyphicon glyphicon-chevron-right'></i>"],
        loop:           true, 
        items:          1,    
        margin:         10,   
        slideBy:        1,    
        nav:            true, 
        dots: 			false,
        merge:          false,
        mergeFit:       true, 
        pullDrag:       true, 
        freeDrag:       false,
        mouseDrag:      false, 
        touchDrag:      true, 
        dotsEach:       false,
        autoWidth:      false,
        navRewind:      true, 
        stagePadding:   0

    });

    // Comments slider
    $('#carouselTwo').carousel(); 

    $('.carousel-linked-nav > li > a').click(function() {

        // grab href, remove pound sign, convert to number
        var item = Number($(this).attr('href').substring(1));

        // slide to number -1 (account for zero indexing)
        $('#carouselTwo').carousel(item - 1);

        // remove current active class
        $('.carousel-linked-nav .active').removeClass('active');

        // add active class to just clicked on item
        $(this).parent().addClass('active');

        // don't follow the link
        return false;
    });

    /* AUTOPLAY NAV HIGHLIGHT */

    // bind 'slid' function
    $('#carouselTwo').bind('slid', function() {

        // remove active class
        $('.carousel-linked-nav .active').removeClass('active');

        // get index of currently active item
        var idx = $('#carouselTwo .item.active').index();

        // select currently active item and add active class
        $('.carousel-linked-nav li:eq(' + idx + ')').addClass('active');

    });

});

; /* Start:"a:4:{s:4:"full";s:58:"/bitrix/templates/new_main/js/page-index.js?15220021284195";s:6:"source";s:43:"/bitrix/templates/new_main/js/page-index.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function animateMainSelectFranchise() {
    var s = Snap("#svg-page-main-franchise");
    // var full_width = $('#svg-page-main-franchise').width()
    var f_width = $('#svg-page-main-franchise').width();
    var f_height = $('#svg-page-main-franchise').height();
    
    s.clear();

    var p1 = s.polyline(
        [0,0], 
        [f_width,0],
        [f_width,0], 
        [0,f_height], 
        [0,f_height]
    );
    

    p1.attr({
        id: "s-mask-1",
        fill: "#fff",
        stroke: "#000",
        strokeWidth: 0,
    });
    
    var p2 = s.polyline(
        [f_width,f_height], 
        [0,f_height],
        [0,f_height],
        [f_width,0], 
        [f_width,0]
    );
    

    p2.attr({
        id: "s-mask-2",
        fill: "#fff",
        stroke: "#000",
        strokeWidth: 0
    });
    
    // s.select(p2).remove();
    // // s.add(p1);
    // s.append(p2);
    
    p1.hover(
        function() {
            s.append(p1);
            $("#svg-img-c").css("z-index", "10");
            $("#svg-img-i").css("z-index", "20");

            
            p1.animate({
                points:  [
                    [0,0], 
                    [f_width,0],
                    [f_width,f_height], 
                    [f_width,f_height], 
                    [0,f_height]
                ]
            }, 800);
        },
        function() {
            p1.animate({
                points:  [
                    [0,0], 
                    [f_width,0],
                    [f_width,0], 
                    [0,f_height], 
                    [0,f_height]
                ]
            }, 800);
        }
    );
    p1.click(function() {
        window.location = "http://franchise.bodryi-den.ru/";
    });
   
    p2.hover(
        function() {
            $("#svg-img-c").css("z-index", "20");
            $("#svg-img-i").css("z-index", "10");
            s.append(p2);
            p2.animate({
                points:  [
                    [f_width,f_height], 
                    [0,f_height],
                    [0,0],
                    [0,0], 
                    [f_width,0]
                ]
            }, 800);
        },
        function() {
            p2.animate({
                points:  [
                    [f_width,f_height], 
                    [0,f_height],
                    [0,f_height],
                    [f_width,0], 
                    [f_width,0]
                ]
            }, 800);
        }
    );
    p2.click(function() {
        window.location = "http://cafe.bodryi-den.ru/";
    });
}


$(document).ready(function() {
    animateMainSelectFranchise();



    window.onresize = function(event) {
        animateMainSelectFranchise();
    };

    var waypoints1 = $('#waypoint_1').waypoint(function(direction) {
        console.log("waypoint_1");
        $('#waypoint_1').addClass('animated fadeInUp');
    }, {
      offset: '90%'
    });

    var waypoints2 = $('#waypoint_2').waypoint(function(direction) {
        console.log("waypoint_2");
        $('#waypoint_2').addClass('animated fadeInUp');
    }, {
      offset: '90%'
    });

    var waypoints3 = $('#waypoint_3').waypoint(function(direction) {
        console.log("waypoint_3");
        $('#waypoint_3').addClass('animated fadeInUp');
    }, {
      offset: '90%'
    });

    var waypoints4 = $('#waypoint_4').waypoint(function(direction) {
        console.log("waypoint_4");
        $('#waypoint_4').addClass('animated fadeInUp');
        $('#waypoint_4 .l').addClass('animated fadeInLeft');
        $('#waypoint_4 .s').addClass('animated fadeInRight');
    }, {
      offset: '70%'
    });

    var waypoints5 = $('#waypoint_5').waypoint(function(direction) {
        console.log("waypoint_5");
        $('#waypoint_5').addClass('animated fadeInUp');
    }, {
      offset: '90%'
    });

    var waypoints6 = $('#waypoint_6').waypoint(function(direction) {
        console.log("waypoint_6");
        $('#waypoint_6').addClass('animated fadeInUp');
    }, {
      offset: '90%'
    });
});

/* End */
;
; /* Start:"a:4:{s:4:"full";s:90:"/bitrix/templates/new_main/components/bitrix/news.list/slider.main/script.js?1594199075348";s:6:"source";s:76:"/bitrix/templates/new_main/components/bitrix/news.list/slider.main/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function() {
	$('.owl-carousel-slider-main').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		dots:false,
		video:true,
		lazyLoad:true,
        center:true,
		navText: ["",""],
		autoHeight:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
	}
	});
});
/* End */
;; /* /bitrix/templates/new_main/js/page-index.js?15220021284195*/
; /* /bitrix/templates/new_main/components/bitrix/news.list/slider.main/script.js?1594199075348*/

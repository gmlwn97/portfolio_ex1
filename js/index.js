$(document).ready(function() {
    // fullpage
	$('#fullpage').fullpage({
		//options here
        anchors:['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7', 'section8','section9'],
        navigation: true,
        sectionsColor : ['#fff','#aaa','rgba(136,149,158,0.5)', '#D5EAFF', "rgba(27,110,64,0.5) ", '#FBE1E9', 'rgba(208,17,43,0.2)', '#Eaeaea', ,'rgb(128 128 128 / 25%)'],
        navigationTooltips: ['HOME','MY', 'DISCOVERY', 'HANA TOUR.','GUCCI','MIXXO','APPLE','DESIGN','COPYRIGHT'],
        slidesNavigation: true,
        loopTop: true,
        loopBottom: true
	});

    // fancybox
    $(".fancybox").fancybox();
    $(".design_wrap a").fancybox({
        openEffect	: 'elastic',
        closeEffect	: 'elastic',

        helpers : {
            title : {
                type : 'inside'
            }
        }
    });

});

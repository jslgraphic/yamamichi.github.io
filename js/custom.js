$(document).ready(function() {
	$('#fullpage').fullpage({
		scrollHorizontally: true,
		scrollspeed:1200,
		scrollbar:false,
		autoScrolling: false,
		fixtosection:false,
		slidesNavigation:true,
		scrollOverflow: false,
		anchors: ['firstPage', 'secondPage','thirdPage', '4thpage', '5thpage'],
		menu: '#myMenu'
		
		//options here
		
});
    $(window).scroll(function(){
	if($(window).scrollTop() > 80){
		$("header").addClass("small");
	}else{
		$("header").removeClass("small");
	}	

});
    var rellax = new Rellax('.rellax');


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
	nav:true,
	navText:[],
	dots:false,
	    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        }
    }
})

$(".animsition-overlay").animsition({
    inClass: 'overlay-slide-in-top',
    outClass: 'overlay-slide-out-top',
    inDuration: 800,
    
    
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    // loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 100,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : true,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});



$(window).scroll(function (){
	
	//Header Paralax
	var wScroll = $(this).scrollTop();

	$('header .scroll').css({
		'transform' : 'translate(0px, '+ wScroll / 3 +'px)'
	});
	
	$('header h1').css({
		'transform' : 'translate(-50%, '+ wScroll / 3 +'px)'
	});
	
	$('header h2').css({
		'transform' : 'translate(-50%, '+ wScroll / 3 +'px)'
	});
	//Landing Elements

	
});


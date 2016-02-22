$(document).ready(function(){
		//noinspection JSUnresolvedFunction
	$('.port-skills').waypoint(function() {
		var html = Circles.create({
			id : 'html_circle',
			radius : 100,
			value : 95,
			width : 5,
			colors : [ '#FCE6A4', '#EFB917' ],
			text : function(value) {
				return value + '%';
			},
		});
		var css = Circles.create({
			id : 'css_circle',
			radius : 100,
			value : 95,
			width : 5,
			colors : [ '#BEE3F7', '#45AEEA' ],
			text : function(value) {
				return value + '%';
			},
		});
		var js = Circles.create({
			id : 'js_circle',
			radius : 100,
			value : 95,
			width : 5,
			colors : [ '#F4BCBF', '#D43A43' ],
			text : function(value) {
				return value + '%';
			},
		});
		var jq = Circles.create({
			id : 'jq_circle',
			radius : 100,
			value : 80,
			width : 5,
			colors : [ '#F8F9B6', '#D2D558' ],
			text : function(value) {
				return value + '%';
			},
		});
		var html5 = Circles.create({
			id : 'html5_circle',
			radius : 100,
			value : 85,
			width : 5,
			colors : [ '#F8F9B6', '#D2D558'],
			text : function(value) {
				return value + '%';
			},
		});
		var boo = Circles.create({
			id : 'boo_circle',
			radius : 100,
			value : 80,
			width : 5,
			colors : [ '#F4BCBF', '#D43A43' ],
			text : function(value) {
				return value + '%';
			},
		});
		var aj = Circles.create({
			id : 'aj_circle',
			radius : 100,
			value : 50,
			width : 5,
			colors : [ '#BEE3F7', '#45AEEA' ],
			text : function(value) {
				return value + '%';
			},
		});
		var gb = Circles.create({
			id : 'gb_circle',
			radius : 100,
			value : 50,
			width : 5,
			colors : [ '#FCE6A4', '#EFB917' ],
			text : function(value) {
				return value + '%';
			},
		});
	}, {
		offset : '85%',
		triggerOnce: true
	});
	//noinspection JSUnresolvedFunction
	$('.port-skills').waypoint(function(d) {
		if(d=='down'){
			$('nav').addClass('active');
		}else{
			$('nav').removeClass('active');
		}
	}, {
		offset : '15%'
	});
	//noinspection JSUnresolvedFunction
	$('.port-counter').waypoint(function() {
		$(".counter-item .count").countTo();
	}, {
		offset : '85%',
		triggerOnce: true
	});
});
$(".portfolio-item").find("[href='#']").click(function(e){
	e.preventDefault();
});
var selector="#port-item-wrapper";
$(function(){
	var mix=$(selector).mixItUp({
		animation: {
			duration: 400,
			effects: 'fade translateZ(-360px) stagger(34ms) translateX(50%) rotateY(50deg)',
			easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
		},
		selectors: {
			target: '.portfolio-item',
			filter: '.portfolio-item-filter'
		}
	});
});

if($.fn.owlCarousel){
	$(document).ready(function(){
		$(".port-monials-slider").owlCarousel({
			items: 3,
			autoPlay: true,
			pagination: false
		});
	});
}

$(".nav-toggle").click(function(){
	$("nav").toggleClass("active");
});
$(window).scroll(function(){
	//noinspection JSValidateTypes
	if($(window).scrollTop()>200 && $(window).innerWidth()<=769)
		$("nav").addClass('active-mobile');
	else
		if(!$("nav .navbar-collapse").hasClass('in'))
			$("nav").removeClass('active-mobile');
});
$(window).resize(function(){
	//noinspection JSValidateTypes
	if($(window).scrollTop()>200 && $(window).innerWidth()<=769)
		$("nav").addClass('active-mobile');
	else
		if(!$("nav .navbar-collapse").hasClass('in'))
			$("nav").removeClass('active-mobile');
});
$(".navbar-toggle").click(function(){
	//noinspection JSValidateTypes
	if($(window).scrollTop()<200 && $(window).innerWidth()<=769)
		$("nav").toggleClass('active-mobile');
});
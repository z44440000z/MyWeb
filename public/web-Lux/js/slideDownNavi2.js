$(function() {
	$("nav li").hover(
		function(){
				$(this).children('div').slideDown(90);
				$(this).addClass("active2");
		},
		function(){
				$(this).children('div').slideUp(90);
				$(this).removeClass("active2");
		});
});
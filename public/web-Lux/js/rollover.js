$(function(){

	$("a img").hover(
		function(){
			$(this).stop().fadeTo("fast",0.7);
		},
		function(){
			$(this).stop().fadeTo("fast",1.0);
		}
	);
});
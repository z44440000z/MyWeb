
$(function(){
	$(".sp_navi dt a.sp_nav_btn").on("click", function() {
		$(".sp_navi dd").slideToggle();
		$(this).toggleClass("active");
	});
});

$(function(){
	$(".sp_link li.click_menu1 a").on("click", function() {
		$(".sp_link li div.click_menu1").slideToggle();
		$(this).toggleClass("active");
	});
});

$(function(){
	$(".sp_link li.click_menu2 a").on("click", function() {
		$(".sp_link li div.click_menu2").slideToggle();
	});
});

$(function(){
	$(".sp_link li.click_menu1 a").on("click", function() {
		$(".sp_navi dl dd").slideToggle();
		$(".sp_navi dt a.sp_nav_btn").toggleClass("active","flase");
	});
});

$(function(){
	$("div.click_menu2 ul li a").on("click", function() {
		$(".sp_navi dl dd").slideToggle();
		$(".sp_navi dt a.sp_nav_btn").toggleClass("active","flase");
	});
});


//$(function() {
//    var menuHeight = $(".sp_navi").height();
//    var navPos = 0;
//    $(window).scroll(function () {
//        var Pos = $(this).scrollTop();
//        if (Pos > navPos) {
//            if ($(window).scrollTop() >= 100) {
//                $(".sp_navi").css("top", "-" + menuHeight + "px");
//            }
//        } else {
//            $(".sp_navi").css("top", "0px");
//        }
//        navPos = Pos;
//    });
//});



$(function ($) {

var tab = $('.sp_navi'),
    offset = tab.offset();
  $(window).on("scroll", function () {
	  //scrollTopの値の分スクロールしたらナビに.fixedが追加される。
    if ($(this).scrollTop() > 200) {
      $(".sp_navi").addClass('sp_fixed');
    } else {
      $(".sp_navi").removeClass('sp_fixed');
    }
  });
});


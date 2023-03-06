$(function () {

  $(window).on("scroll", function () {
	  //scrollTopの値の分スクロールしたらナビに.fixedが追加される。
    if ($(this).scrollTop() > 136) {
      $("header").addClass('fixed');
    } else {
      $("header").removeClass('fixed');
    }
  });
});

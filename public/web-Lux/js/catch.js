// JavaScript Document

//$('#main_catch02', '#main_catch03').hide();
//
////
//var maincatch = ['#main_catch01','#main_catch02','#main_catch03'];
//var nowProcess = 0;
//
////
//var fadeProcess = function(){
//  //
//  var fadeOutTgt = nowProcess;
//  if(++nowProcess == maincatch.length)nowProcess = 0;
//  var fadeInTgt = nowProcess;
//  //
//  setTimeout(function(){
//      $(maincatch[fadeOutTgt]).fadeOut(1000);
//      setTimeout(function(){
//          $(maincatch[fadeInTgt]).fadeIn(1000);
//          fadeProcess();
//      },1000);
//      //
//  },3200);
//};
//
//fadeProcess();

// JavaScript Document

$('#main_catch02','#main_catch03','#main_catch04').hide();

//
var maincatch = ['#main_catch01','#main_catch02','#main_catch03','#main_catch04'];
var nowProcess = 0;

//
var fadeProcess = function(){
  //
  var fadeOutTgt = nowProcess;
  if(++nowProcess == maincatch.length)nowProcess = 0;
  var fadeInTgt = nowProcess;
  //
  setTimeout(function(){
      $(maincatch[fadeOutTgt]).fadeOut(1500);
      setTimeout(function(){
          $(maincatch[fadeInTgt]).fadeIn(1500);
          fadeProcess();
      },1000);
      //
  },3200);
};

fadeProcess();
$(function () {
	var docao = $(window).height();
	$('#top').css({'height':docao});

	$(window).resize(function() {
		var docao = $(window).height();
		$('#top').css({'height':docao});
	});

 
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "15px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "40px 10px";
    document.getElementById("logo").style.fontSize = "35px";

  }
}



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "3px 10px";
    document.getElementById("logo").style.fontSize = "15px";
  } else {
    document.getElementById("navbar").style.padding = "15px 10px";
    document.getElementById("logo").style.fontSize = "25px";

  }

 
}



document.addEventListener("DOMContentLoaded",f,false);
  function f(){
    var elementleft = document.querySelectorAll('.services-left');
    for (var i = 0; i < elementleft.length; i++) {
    }
     window.addEventListener('scroll',function(){
      if(window.pageYOffset > 1000){
        elementleft[0].classList.add('toleft');
        elementleft[1].classList.add('toleft');
      }
    })
}
document.addEventListener("DOMContentLoaded",r,false);
  function r(){
    var elementr = document.querySelectorAll('.services-right');
    for (var i = 0; i < elementr.length; i++) {
    }
     window.addEventListener('scroll',function(){
      if(window.pageYOffset > 1000){
        elementr[0].classList.add('toright');
        elementr[1].classList.add('toright');
      }
    })
}

document.addEventListener("DOMContentLoaded",z,false);
  function z(){
    var aboutzoom = document.querySelector('.about-zoom');
     window.addEventListener('scroll',function(){
      if(window.pageYOffset > 4000){
        aboutzoom.classList.add('zoomabout');
      }
    })
}

document.addEventListener("DOMContentLoaded",card,false);
  function card(){
    var card = document.querySelectorAll('.newcard');
     window.addEventListener('scroll',function(){
      for (var i = 0; i < card.length; i++) {
      }
      if(window.pageYOffset > 1971){
        card[0].classList.add('card-bottom');
        card[1].classList.add('card-bottom');
         card[2].classList.add('card-bottom');
        card[3].classList.add('card-bottom');
        card[4].classList.add('card-bottom');
        card[5].classList.add('card-bottom');
      }
    })
}

document.addEventListener("DOMContentLoaded",ct,false);
  function ct(){
    var ct = document.querySelectorAll('.ct-top');
     window.addEventListener('scroll',function(){
      for (var i = 0; i < ct.length; i++) {
      }
      if(window.pageYOffset > 800){
        ct[0].classList.add('cttopadd');
        ct[1].classList.add('cttopadd');
        ct[2].classList.add('cttopadd');
        ct[3].classList.add('cttopadd');
        ct[4].classList.add('cttopadd');
      }
    })
}

document.addEventListener("DOMContentLoaded",cz,false);
  function cz(){
    var cz = document.querySelectorAll('.cz-bottom');
     window.addEventListener('scroll',function(){
      for (var i = 0; i < cz.length; i++) {
      }
      if(window.pageYOffset > 5500){
        cz[0].classList.add('czbottom');
        cz[1].classList.add('czbottom');
        cz[2].classList.add('czbottom');
      }
    })
}
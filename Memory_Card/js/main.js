var cards = ["f1","f2","f3","f4","f5","f6","f7","f8","f9","f10","f11","f12"];
var current = null;
var count = 0;
var remainingTime = 30;
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
  }

  return array;
}
function flip(card){
    $(card).toggleClass('flipped');
    if(!current){
        current = $(card);
    }
    else{
        if(current.attr('data-name') != $(card).attr('data-name')){
            setTimeout(function(){
                $(card).toggleClass('flipped');
                current.toggleClass('flipped');
                current = null;
            },1000)
           
        }
        else{
            setTimeout(function(){
                $(card).css('opacity','0');
                current.css('opacity','0');
                current = null;
                count++;
                if(count == 12){
                    alert('you are win');
                }
            },500)
        }
    }
}
$(function(){
    cards = cards.concat(cards);
    cards = shuffle(cards);
    var html = '';
    for(var i =0; i < cards.length;i++){
        html += '<div class= "grid" >' + '<div class = "card" data-name="' + cards[i] + '" onclick = "flip(this)">'
        + '<div class="front"><img src="img/back.jpg"/></div>'
        + '<div class="back"><img src="img/'+ cards[i] + '.png"/></div>'
        + '</div></div>';
    }
    $('.col-md-12').html(html);

    var run = setInterval(function(){
        remainingTime--;
        console.log(remainingTime);
        if(remainingTime == 0){
            clearInterval(run);
        }
    },1000);
});
// var stops = [1,2,3,4,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,93,94,95,96,97,98,99,100];
// $.each(stops, function(index, value){
//     setTimeout(function(){
//         $( ".progress-bar" ).css( "width", value + "%" ).attr( "aria-valuenow", value ); 
//     }, index * 1000);
// });

// Init
var $ = jQuery;
var animationTime = 50;
 
$(document).ready(function(){

    // timer arguments: 
    //   #1 - time of animation in mileseconds, 
    //   #2 - days to deadline

    $('#progress-time-fill, #death-group').css({'animation-duration': animationTime+'s'});

    var deadlineAnimation = function () {
        setTimeout(function(){
            $('#designer-arm-grop').css({'animation-duration': '1.5s'});
        },0);

        setTimeout(function(){
            $('#designer-arm-grop').css({'animation-duration': '1s'});
        },4000);

        setTimeout(function(){
            $('#designer-arm-grop').css({'animation-duration': '0.7s'});
        },8000);

        setTimeout(function(){
            $('#designer-arm-grop').css({'animation-duration': '0.3s'});
        },12000);

        setTimeout(function(){
            $('#designer-arm-grop').css({'animation-duration': '0.2s'});
        },15000);
    };

    function timer(totalTime, deadline) {
        var time = totalTime * 1000;
        var dayDuration = time / deadline;
        var actualDay = deadline;

        var timer = setInterval(countTime, dayDuration);

        function countTime() {
            --actualDay;
            $('.deadline-days .day').text(actualDay);

            if (actualDay == 0) {
                clearInterval(timer);
                $('.deadline-days .day').text(deadline);
            }
        }
    }

    var deadlineText = function () {
        var $el = $('.deadline-days');
        var html = '<div class="mask-red"><div class="inner">' + $el.html() + '</div></div><div class="mask-white"><div class="inner">' + $el.html() + '</div></div>';
        $el.html(html);
    }

    deadlineText();

    deadlineAnimation();
    timer(animationTime, days);

    setInterval(function(){
        timer(animationTime, days);
        deadlineAnimation();

        console.log('begin interval', animationTime * 1000);

    }, animationTime * 1000);

});
particlesJS("particles-js", {
    particles: {
      number: {
        value: 77,
        density: { enable: true, value_area: 1763.753266952075 }
      },
      color: { value: "#fff" },
      shape: {
        type: "image",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: {
          src:
            "https://www.adhesivosnatos.com/wp-content/uploads/2016/10/one-piece-calavera-pegatina.png",
          width: 200,
          height: 130
        }
      },
      opacity: {
        value: 0.40246529723245905,
        random: true,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 31.565905665290902,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: false,
        distance: 500,
        color: "#ffffff",
        opacity: 0.4,
        width: 2
      },
      move: {
        enable: true,
        speed: 6,
        direction: "top",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "bubble" },
        onclick: { enable: true, mode: "repulse" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 0.5 } },
        bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
  var count_particles, stats, update;
  stats = new Stats();
  stats.setMode(0);
  
  update = function() {
    stats.begin();
    stats.end();
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
  

var my_carousel = new BlxCarousel({

p1:{
  cavourtInAnimate: 'fadeInRight',
  cavourtOutAnimate: 'fadeOutLeft',
  previousCavourtInAnimate: 'fadeInLeft',
  previousCavourtOutAnimate: 'fadeOutRight',
  onPageCavourtIn: function(){},
  afterPageCavourtIn: function(){},
  onPageCavourtOut: function(){},
},

p2:{
  cavourtInAnimate: 'fadeInRight',
  cavourtOutAnimate: 'fadeOutLeft',
  previousCavourtInAnimate: 'fadeInLeft',
  previousCavourtOutAnimate: 'fadeOutRight',
  onPageCavourtIn: function(){
    $('#rotate').hide();
    $('#change').hide();

    setTimeout(function(){
      $('#rotate').show();
      $('#rotate').addClass('animated roataeLarge');
    },500);
  },
  afterPageCavourtIn: function(){
    $('#change').show();
    $('#change').addClass('animated fadeIn delay-1');
  },
  onPageCavourtOut: function(){
    $('#rotate').removeClass('animated roataeLarge');
    $('#change').removeClass('animated fadeIn delay-1');
  },
},

p3:{
  cavourtInAnimate: 'fadeInRight',
  cavourtOutAnimate: 'fadeOutLeft',
  previousCavourtInAnimate: 'fadeInLeft',
  previousCavourtOutAnimate: 'fadeOutRight',
  onPageCavourtIn: function(){

    $('#two').hide();
    $('#zero').hide();
    $('#one').hide();
    $('#four').hide();

    var two, zero, one, four;

    two = setTimeout(function(){
      $('#two').show();
      $('#two').addClass('animated fadeInRight');

      zero = setTimeout(function(){
        $('#zero').show();
        $('#zero').addClass('animated fadeInRight');

        one = setTimeout(function(){
          $('#one').show();
          $('#one').addClass('animated fadeInRight');

          four = setTimeout(function(){
            $('#four').show();
            $('#four').addClass('animated fadeInRight');
          }, 200);

        }, 200);

      }, 200);

    }, 200);

    //setTimeout(function(){
      //clearTimeout(two);
      //clearTimeout(zero);
      //clearTimeout(one);
      //clearTimeout(four);
    //}, 1000);

  },

  afterPageCavourtIn: function(){},
  onPageCavourtOut: function(){

      $('#two').removeClass('animated fadeInRight');
      $('#zero').removeClass('animated fadeInRight');
      $('#one').removeClass('animated fadeInRight');
      $('#four').removeClass('animated fadeInRight');

  },
},

p4:{
  cavourtInAnimate: 'fadeIn',
  cavourtOutAnimate: 'fadeOutLeft',
  previousCavourtInAnimate: 'fadeInLeft',
  previousCavourtOutAnimate: 'fadeOutRight',
  onPageCavourtIn: function(){

    if (location.hash !== ''){
      $('#hash').html(location.hash.replace(/^#/, '')) ;
    }
    else{
      $('#hash').html('_____') ;
    }

    $('#bander').hide();

    setTimeout(function(){
      $('#bander').show();
      $('#bander').addClass('animated fadeIn');
    }, 500);
  },
  afterPageCavourtIn: function(){
  },
  onPageCavourtOut: function(){
    $('#bander').removeClass('animated fadeIn');
  },
},

p5:{
  cavourtInAnimate: 'fadeIn fast',
  cavourtOutAnimate: 'fadeOutLeft',
  previousCavourtInAnimate: 'fadeIn fast',
  previousCavourtOutAnimate: 'fadeOutRight',
  onPageCavourtIn: function(){
    $('#time').hide();
    $('#marker').hide();

    setTimeout(function(){
      $('#time').show();
      $('#marker').show();
      $('#time').addClass('animated fadeInUp');
      $('#marker').addClass('animated bounceInDown');
    }, 300);
  },
  afterPageCavourtIn: function(){


  },
  onPageCavourtOut: function(){
    $('#time').removeClass('animated fadeInUp');
    $('#marker').removeClass('animated bounceInDown');
  },
},

p6:{
  cavourtInAnimate: 'fadeInRight',
  cavourtOutAnimate: 'fadeOutLeft',
  previousCavourtInAnimate: 'fadeInLeft',
  previousCavourtOutAnimate: 'fadeOutRight',
  onPageCavourtIn: function(){},
  afterPageCavourtIn: function(){
    $('#qr').addClass('animated pulse');
  },
  onPageCavourtOut: function(){
    $('#qr').removeClass('animated pulse');
  },
},

});

(function(){

  var initializeSize = function(){

    var carousel = $('.blx-carousel');
    var carousel_page = $('.blx-carousel-page');
    var body_width = window.innerWidth;
    var body_height = window.innerHeight;


    console.log(body_width, body_height);


    carousel_page.width(body_width);
    carousel_page.height(body_height);

    carousel.width(carousel_page.width());
    carousel.height(body_height);

  };

  var registerEvent = function(){

    $('.blx-carousel').swipeLeft(function(){
      my_carousel.nextPage();
    });

    $('.blx-carousel').swipeRight(function(){
      my_carousel.previousPage();
    });

    $(window).resize(initializeSize);

  }

  var onReady = function(){

    initializeSize();
    registerEvent();
  };

  $(document).ready(onReady);
})()

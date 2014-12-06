
var my_carousel = new BlxCarousel({

p1:{
  cavourtInAnimate: 'fadeInRight',
  cavourtOutAnimate: 'fadeOutLeft',
  previousCavourtInAnimate: 'fadeInLeft',
  previousCavourtOutAnimate: 'fadeOutRight',
  onPageCavourtIn: function(){

  },
  afterPageCavourtIn: function(){
    
  },
  onPageCavourtOut: function(){},
},

p2:{
  cavourtInAnimate: 'fadeInRight',
  cavourtOutAnimate: 'flipOutX',
  previousCavourtInAnimate: 'fadeInLeft',
  previousCavourtOutAnimate: 'flipOutX',
  onPageCavourtIn: function(){
    $('#cvs').css('top',-26+'px');
   BlxUtilities.displayAnimate('#cvs1','bounceInDown',{type:'in'});
   BlxUtilities.displayAnimate('#cvs2','bounceInDown',{type:'in',delay:100});
   BlxUtilities.displayAnimate('#cvs3','bounceInDown',{type:'in',delay:200});
   BlxUtilities.displayAnimate('#cvs4','bounceInDown',{type:'in',delay:300});
   var top1=-70;var top2=-640;var top3=-25;
   window.timer1 = setInterval(function(){

      $('#ten').css('top',top1+'px');
      top1++;
    if(top1>-10)
    {
      clearInterval(window.timer1);
    }
    },30);
   window.timer2 = setInterval(function(){

      $('#num').css('top',top2+'px');
      top2=top2+2;
    if(top2>-10)
    {
      clearInterval(window.timer2);
      window.timer3 = setInterval(function(){

      $('#cvs').css('top',top3+'px');
      top3--;
    if(top3<=-70)
    {
      clearInterval(window.timer3);
    }
    },10);

      BlxUtilities.displayAnimate('#tn','fadeInUp',{type:'in'});
      BlxUtilities.displayAnimate('#always','fadeInUp',{type:'in',delay:100});
      BlxUtilities.displayAnimate('#and','fadeInUp',{type:'in',delay:200});
      BlxUtilities.displayAnimate('#SE','fadeInUp',{type:'in',delay:300});
    }
    },1);
   $('#tn').hide();
      $('#always').hide();
      $('#and').hide();
      $('#SE').hide();
 },
  afterPageCavourtIn: function(){  
  },
  onPageCavourtOut: function(){
    BlxUtilities.displayAnimate('word','bounceOut');
    BlxUtilities.displayAnimate('cvs','flipOutX');
  },
},
p3:{
  cavourtOutAnimate: 'fadeOutLeft',
  previousCavourtOutAnimate: 'fadeOutRight',
  onPageCavourtIn: function(){
    BlxUtilities.displayAnimate('#map1','bounceIn',{type:'in',delay:200});
    BlxUtilities.displayAnimate('#map2','flipInX',{type:'in',delay:250});
    BlxUtilities.displayAnimate('#map3','rotateIn',{type:'in',delay:300});
    BlxUtilities.displayAnimate('#map4','bounceInDown',{type:'in',delay:350});
    BlxUtilities.displayAnimate('#map5','rotateInDownLeft',{type:'in',delay:400});
    BlxUtilities.displayAnimate('#map6','flipInY',{type:'in',delay:450});
    BlxUtilities.displayAnimate('#map7','zoomInUp',{type:'in',delay:500});
    BlxUtilities.displayAnimate('#map8','bounceInUp',{type:'in',delay:550});
    BlxUtilities.displayAnimate('#map9','zoomInDown',{type:'in',delay:600});
    BlxUtilities.displayAnimate('#map10','fadeInUp',{type:'in',delay:650});
    BlxUtilities.displayAnimate('#map11','bounceInLeft',{type:'in',delay:700});
    BlxUtilities.displayAnimate('#map12','zoomInRight',{type:'in',delay:750,onAnimationEnd:function(){
      (function(){
  var pig=$('#map12').height()+window.innerWidth*0.893+20;
  var p=window.innerWidth*0.893+20;
  $('#hua').css('top',pig+'px');
    BlxUtilities.displayAnimate('#hua','fadeIn slow',{type:'in',delay:100});
})();
    }});
    BlxUtilities.displayAnimate('#map13','bounceInRight',{type:'in',delay:800});
    BlxUtilities.displayAnimate('#map14','fadeIn slow',{type:'in',delay:1300});
    $('#hua').hide();
    
  },

  afterPageCavourtIn: function(){
  },
  onPageCavourtOut: function(){
  },
},

p4:{
  cavourtInAnimate: 'rotateInDownLeft',
  cavourtOutAnimate: 'fadeOutLeft',
  previousCavourtInAnimate: 'rotateInDownLeft',
  previousCavourtOutAnimate: 'fadeOutRight',
  onPageCavourtIn: function(){

    $('#cvs20').css('top',0+'px');
    $('#cvs43').css('transform','rotate('+0+'deg)');
    var jj=window.innerHeight*0.54;
      $('#cvs30').css('top',jj+'px');
    BlxUtilities.displayAnimate('#cvs12','rollIn',{type:'in'});
    BlxUtilities.displayAnimate('#cvs22','rollIn',{delay:100,type:'in'});
    BlxUtilities.displayAnimate('#cvs32','rollIn',{delay:200,type:'in'});
    BlxUtilities.displayAnimate('#cvs42','lightSpeedIn',{delay:200,type:'in'});
    BlxUtilities.displayAnimate('#cvs13','fadeInUpBig',{type:'in'});
    BlxUtilities.displayAnimate('#cvs23','fadeInUpBig',{delay:50,type:'in'});
    BlxUtilities.displayAnimate('#cvs33','fadeInUpBig',{delay:100,type:'in'});
    BlxUtilities.displayAnimate('#cvs43','fadeInUpBig',{delay:150,type:'in'});
    BlxUtilities.displayAnimate('#cvs53','fadeInUpBig',{delay:200,type:'in',onAnimationEnd:function(){
      var cvs20=0; 
      // var cvs30=window.innerHeight*0.54;  
      var jj=window.innerHeight*0.54;
      var pigg=0; 
      var xxx=window.innerWidth*0.08/3; var yyy=window.innerWidth*0.08/1.5;
            $("#cvs43").css('transform-origin',xxx+'%'+' '+yyy+'%');
      window.timer4 = setInterval(function(){
      $('#cvs30').css('top',jj+'px');
      $('#cvs20').css('top',cvs20+'px');
      $("#cvs43").css('transform','rotate('+pigg+'deg)');
      cvs20--;jj++;pigg=pigg+2;
    if(pigg>20)
    {
      clearInterval(window.timer4);
    }
    },50);
      BlxUtilities.displayAnimate('#showw','zoomIn',{type:'in'});
    }});
    $('#showw').hide();
    },
  afterPageCavourtIn: function(){
  },
  onPageCavourtOut: function(){
  },
},

p5:{
  cavourtInAnimate: 'fadeIn fast',
  cavourtOutAnimate: 'fadeOutLeft',
  previousCavourtInAnimate: 'fadeIn fast',
  previousCavourtOutAnimate: 'fadeOutRight',
  onPageCavourtIn: function(){
    BlxUtilities.displayAnimate('#D','rollIn slowless',{type:'in'});
    BlxUtilities.displayAnimate('#qr','rotateIn slowless',{type:'in',delay:300});
    BlxUtilities.displayAnimate('#A','flip slowless',{delay:300});
    BlxUtilities.displayAnimate('#top','flip slowless',{delay:300});
  },
  afterPageCavourtIn: function(){
  },
  onPageCavourtOut: function(){
  },
},





});

(function(){

  var initializeSize = function(){

    var carousel = $('.blx-carousel');
    var carousel_page = $('.blx-carousel-page');
    window.body_width = window.innerWidth;
    window.body_height = window.innerHeight;


    console.log(body_width, body_height);


    carousel_page.width(body_width);
    carousel_page.height(body_height);

    carousel.width(carousel_page.width());
    carousel.height(body_height);

    if (!("ontouchend" in document ? true : false)){
      $('#button').show();
      $('#istouch').html('请按右边的按钮翻页');
    }

  };

  var registerEvent = function(){

    $('.blx-carousel').swipeLeft(function(){
      my_carousel.nextPage();
    });

    $('.blx-carousel').swipeRight(function(){
      my_carousel.previousPage();
    });

    $('#previous-button').click(function(){
      my_carousel.previousPage();
    });
    $('#next-button').click(function(){
      my_carousel.nextPage();
    });

    $(window).resize(initializeSize);

  }

  var onReady = function(){

    initializeSize();
    registerEvent();
  };

  $(document).ready(onReady);
})()

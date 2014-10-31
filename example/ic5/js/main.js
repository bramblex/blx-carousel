
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
   BlxUtilities.displayAnimate('#bt','fadeInRight slow');
   BlxUtilities.displayAnimate('#im1','tran delay-1',{onAnimationEnd:function(){
    BlxUtilities.displayAnimate('#im1','wobble');
   }});
  },
  afterPageCavourtIn: function(){

  },
  onPageCavourtOut: function(){

  },
},

p3:{
  cavourtInAnimate: 'fadeInRight',
  cavourtOutAnimate: 'fadeOutLeft',
  previousCavourtInAnimate: 'fadeInLeft',
  previousCavourtOutAnimate: 'fadeOutRight',
  onPageCavourtIn: function(){
    BlxUtilities.displayAnimate('#bt2','fadeInRight slow');
    BlxUtilities.displayAnimate('#p','tranright delay-1',{onAnimationEnd:function(){
      BlxUtilities.displayAnimate('#rr','tranner',{type:'in'})}});
    $('#rr').hide();
    BlxUtilities.displayAnimate('#rr','fadeOut fast',{delay:2500,type:'out',onAnimationEnd:function(){
      BlxUtilities.displayAnimate('#gr','fadeIn fast',{type:'in'})
    }});
    $('#gr').hide();

  },

  afterPageCavourtIn: function(){},
  onPageCavourtOut: function(){

  },
},

p4:{
  cavourtInAnimate: 'fadeIn',
  cavourtOutAnimate: 'fadeOutLeft',
  previousCavourtInAnimate: 'fadeInLeft',
  previousCavourtOutAnimate: 'fadeOutRight',
  onPageCavourtIn: function(){
    BlxUtilities.displayAnimate('#bt31','fadeInRight slow',{type:'in',onAnimationEnd:function(){
      BlxUtilities.displayAnimate('#bt31','fadeOut',{type:'out'});
    }});

    BlxUtilities.displayAnimate('#bt32','fadeInRight',{delay:3000,type:'in'});
    $('#bt32').hide();
    BlxUtilities.displayAnimate('#bt33','fadeInLeft',{delay:3000,type:'in'});
    $('#bt33').hide();
    BlxUtilities.displayAnimate('#xrb','fadeInUp fast',{delay:2000,type:'in'});
    $('#xrb').hide();
    BlxUtilities.displayAnimate('#xr','fadeInUp fast',{delay:2000,type:'in',onAnimationEnd:function(){
      BlxUtilities.displayAnimate('#xr','shake');
    }});
    $('#xr').hide();
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
    BlxUtilities.displayAnimate('#bt41','fadeInRight fast',{type:'in'});
    $('#bt41').hide();
    BlxUtilities.displayAnimate('#bt42','fadeInLeft fast',{type:'in'});
    $('#bt42').hide();
    BlxUtilities.displayAnimate('#bt43','fadeInRight fast',{type:'in',delay:500,onAnimationEnd:function(){
      BlxUtilities.displayAnimate('#bt43','tada');
    }});
    $('#bt43').hide();
    BlxUtilities.displayAnimate('#xxr','fadeInUp fast',{type:'in'});

  },
  afterPageCavourtIn: function(){


  },
  onPageCavourtOut: function(){

  },
},

p6:{
  cavourtInAnimate: 'fadeInRight fast',
  cavourtOutAnimate: 'fadeOutLeft',
  previousCavourtInAnimate: 'fadeInLeft',
  previousCavourtOutAnimate: 'fadeOutRight',
  onPageCavourtIn: function(){
    if(window.body_height<window.body_width)
      $('#bt6').css('font-size',window.body_height);
    else
      $('#bt6').css('font-size',window.body_width);
    BlxUtilities.location("#bt6",0.5,0.5);
    $('#bt6').html('那');
      $('#bt6').css('color','#000');
      $('#p6').css('background-color','#FFF');
  },
  afterPageCavourtIn: function(){
    var list = [
    {text:'那', color: '#000',bgcolor:'#FFFFFF'},
    {text:'你', color: '#4c8dc7',bgcolor:'#ff837d'},
    {text:'一', color: '#51ff00',bgcolor:'#f6ff7a'},
    {text:'定', color: '#4d7580',bgcolor:'#c1fc81'},
    {text:'不', color: '#ff0000',bgcolor:'#7df0ff'},
    {text:'能', color: '#c23434',bgcolor:'#b987ff'},
    {text:'错', color: '#e3ae64',bgcolor:'#c1fc81'},
    {text:'过', color: '#00aeff',bgcolor:'#FFFFFF'},
    ];
    var i = 0;
    var l = list.length - 1;
     window.timer = setInterval(function(){
      $('#bt6').html(list[i].text);
      $('#bt6').css('color',list[i].color);
      $('#p6').css('background-color',list[i].bgcolor);
      i++;
    if(i > l)
    {
      clearInterval(window.timer);
      my_carousel.nextPage();
    }
    },200);


  },
  onPageCavourtOut: function(){
    clearInterval(window.timer);

  },
},

p7:{
  cavourtInAnimate: 'fadeInRight',
  cavourtOutAnimate: 'fadeOutLeft',
  previousCavourtInAnimate: 'fadeInLeft',
  previousCavourtOutAnimate: 'fadeOutRight',
  onPageCavourtIn: function(){
    BlxUtilities.displayAnimate('#logo1','rotateIn')
    BlxUtilities.displayAnimate('#logo2','fadeIn',{delay:500,type:'in'});
      $('#logo2').hide();
    BlxUtilities.displayAnimate('#bt71','fadeIn',{delay:500,type:'in'});
      $('#bt71').hide();
     BlxUtilities.displayAnimate('#bt72','flipInY',{delay:500,type:'in'});
      $('#bt72').hide();
    BlxUtilities.displayAnimate('#bt73','flipInY',{delay:500,type:'in'});
      $('#bt73').hide();
  },
  afterPageCavourtIn: function(){

  },
  onPageCavourtOut: function(){

  },
},
p8:{
  cavourtInAnimate: 'fadeInRight',
  cavourtOutAnimate: 'fadeOutLeft',
  previousCavourtInAnimate: 'fadeInLeft',
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

  },
},

p9:{
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

    //window.body_width = window.innerWidth;
    //window.body_height = window.innerHeight;

    window.body_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    window.body_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight ;


    console.log(body_width, body_height);


    carousel_page.width(body_width);
    carousel_page.height(body_height);

    carousel.width(carousel_page.width());
    carousel.height(body_height);

    if (!("ontouchend" in document ? true : false)){
        $('#button').show();
        $('#istouch').html('请按右边的按钮翻页');
    }
    //if (!(/mobile/i.test(navigator.userAgent))){
      //$('#button').show();
      //$('#istouch').html('请按右边的按钮翻页');
    //}

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

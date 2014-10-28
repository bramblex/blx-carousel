
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
    BlxUtilities.displayAnimate('#rr','fadeOut ',{delay:2500,type:'out',onAnimationEnd:function(){
      BlxUtilities.displayAnimate('#gr','fadeIn',{type:'in'})
    }});
    $('#gr').hide();
    // BlxUtilities.displayAnimate('#rr','tranner delay-2');
    // $('#two').hide();
    // $('#zero').hide();
    // $('#one').hide();
    // $('#four').hide();

    // var two, zero, one, four;

    // two = setTimeout(function(){
    //   $('#two').show();
    //   $('#two').addClass('animated fadeInRight');

    //   zero = setTimeout(function(){
    //     $('#zero').show();
    //     $('#zero').addClass('animated fadeInRight');

    //     one = setTimeout(function(){
    //       $('#one').show();
    //       $('#one').addClass('animated fadeInRight');

    //       four = setTimeout(function(){
    //         $('#four').show();
    //         $('#four').addClass('animated fadeInRight');
    //       }, 200);

    //     }, 200);

    //   }, 200);

    // }, 200);

    // //setTimeout(function(){
    //   //clearTimeout(two);
    //   //clearTimeout(zero);
    //   //clearTimeout(one);
    //   //clearTimeout(four);
    // //}, 1000);

  },

  afterPageCavourtIn: function(){},
  onPageCavourtOut: function(){

      // $('#two').removeClass('animated fadeInRight');
      // $('#zero').removeClass('animated fadeInRight');
      // $('#one').removeClass('animated fadeInRight');
      // $('#four').removeClass('animated fadeInRight');

  },
},

p4:{
  cavourtInAnimate: 'fadeIn',
  cavourtOutAnimate: 'fadeOutLeft',
  previousCavourtInAnimate: 'fadeInLeft',
  previousCavourtOutAnimate: 'fadeOutRight',
  onPageCavourtIn: function(){
    BlxUtilities.displayAnimate('#bt31','fadeInRight slow',{type:'in'});
    BlxUtilities.displayAnimate('#bt31','fadeOut',{delay:3000,type:'out'});
    BlxUtilities.displayAnimate('#bt32','fadeInRight',{delay:4000,type:'in'});
    $('#bt32').hide();
    BlxUtilities.displayAnimate('#bt33','fadeInLeft',{delay:4000,type:'in'});
    $('#bt33').hide();
    BlxUtilities.displayAnimate('#xr','fadeInUp fast',{delay:3000,type:'in',onAnimationEnd:function(){
      BlxUtilities.displayAnimate('#xr','shake');
    }});
    $('#xr').hide();
    },
    

   //  var name_list = [
   //    '姚大志',
   //    '冼建豪',
   //    '胡双',
   //    '梁俊炜',
   //    '潘达',
   //    '伍思醒',
   //    '蔡雅慧',
   //    '李志韡',
   //    '李路野',
   //    '苏莹子',
	  // '薛婷月',
	  // '韩  婧',
	  // '吕安妮',
	  // '李小煜',
   //  ];

   //  if (location.hash !== ''){
   //    //$('#hash').html(location.hash.replace(/^#/, '')) ;
   //    var n = parseInt(location.hash.replace(/^#/, ''));
   //    $('#hash').html(name_list[n]);
   //  }
   //  else{
   //    $('#hash').html('_____') ;
   //  }

   //  $('#bander').hide();

   //  setTimeout(function(){
   //    $('#bander').show();
   //    $('#bander').addClass('animated fadeIn');
   //  }, 500);
  
  afterPageCavourtIn: function(){
  },
  onPageCavourtOut: function(){
    // $('#bander').removeClass('animated fadeIn');
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
    // $('#time').hide();
    // $('#marker').hide();

    // setTimeout(function(){
    //   $('#time').show();
    //   $('#marker').show();
    //   $('#time').addClass('animated fadeInUp');
    //   $('#marker').addClass('animated bounceInDown');
    // }, 300);
  },
  afterPageCavourtIn: function(){


  },
  onPageCavourtOut: function(){
    // $('#time').removeClass('animated fadeInUp');
    // $('#marker').removeClass('animated bounceInDown');
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
    {text:'那', color: '#333',bgcolor:'#000'},
    {text:'你', color: '#000',bgcolor:'#123'},
    {text:'一', color: '#023',bgcolor:'#321'},
    {text:'定', color: '#021',bgcolor:'#123'},
    {text:'不', color: '#032',bgcolor:'#321'},
    {text:'能', color: '#022',bgcolor:'#123'},
    {text:'错', color: '#034',bgcolor:'#321'},
    {text:'过', color: '#025',bgcolor:'#000'},
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

    // $('#qr').addClass('animated pulse');
  },
  onPageCavourtOut: function(){
    clearInterval(window.timer);
    // $('#qr').removeClass('animated pulse');
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

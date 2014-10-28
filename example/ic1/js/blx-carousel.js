
var BlxCarousel = function(option){

  this.timeout = 3000;
  this.current_page = 0;
  this.page_cavourt_lock = true;
  this.carousel = $('.blx-carousel');
  this.pages = this.carousel.find('.blx-carousel-page');

  this.pages.hide();
  $(this.pages[this.current_page]).show();

  this.pages.forEach(function(item){

    var id = item.attributes['id'].value;

    item.carousel = this;

    item.cavourtInAnimate = option[id].cavourtInAnimate;
    item.cavourtOutAnimate = option[id].cavourtOutAnimate;

    item.previousCavourtInAnimate = option[id].previousCavourtInAnimate;
    item.previousCavourtOutAnimate = option[id].previousCavourtOutAnimate;

    item.onPageCavourtIn = option[id].onPageCavourtIn;
    item.afterPageCavourtIn = option[id].afterPageCavourtIn;
    item.onPageCavourtOut = option[id].onPageCavourtOut;

    item.cavourtIn = function(callback){

      $(item).show();
      $(item).addClass(['animated',this.cavourtInAnimate].join(' '));
      item.onPageCavourtIn();
      $(item).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(item).removeClass(['animated',this.cavourtInAnimate].join(' '));
        item.afterPageCavourtIn();
        callback();
      });

    };

    item.cavourtOut = function(callback){

      $(item).addClass(['animated','fast',this.cavourtOutAnimate].join(' '));
      item.onPageCavourtOut();
      $(item).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(item).removeClass(['animated','fast',this.cavourtOutAnimate].join(' '));
        $(item).hide();
        callback();
      });

    };

    item.previousCavourtIn = function(callback){

      $(item).show();
      $(item).addClass(['animated',this.previousCavourtInAnimate].join(' '));
      item.onPageCavourtIn();
      $(item).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(item).removeClass(['animated',this.previousCavourtInAnimate].join(' '));
        item.afterPageCavourtIn();
        callback();
      });

    };

    item.previousCavourtOut = function(callback){

      $(item).addClass(['animated','fast',this.previousCavourtOutAnimate].join(' '));
      item.onPageCavourtOut();
      $(item).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(item).removeClass(['animated','fast',this.previousCavourtOutAnimate].join(' '));
        $(item).hide();
        callback();
      });

    };

  });

};


BlxCarousel.prototype.__lock = function(){ this.page_cavourt_lock = false };
BlxCarousel.prototype.__unlock = function(){this.page_cavourt_lock = true};

BlxCarousel.prototype.nextPage = function(){
  var c = this;

  if (this.page_cavourt_lock && this.current_page < this.pages.length-1){
    c.__lock();

    var timer = setTimeout(function(){
      c.__unlock();
    }, this.timeout);

    this.pages[this.current_page].cavourtOut(function(){});
    this.current_page = this.current_page + 1;
    this.pages[this.current_page].cavourtIn(function(){
      c.__unlock();
      clearTimeout(timer);
    });
  }

};

BlxCarousel.prototype.previousPage = function(){

  var c = this;

  if (this.page_cavourt_lock && this.current_page > 0){
    c.__lock();

    var timer = setTimeout(function(){
      c.__unlock();
    }, this.timeout);

    this.pages[this.current_page].previousCavourtOut(function(){});
    this.current_page = this.current_page - 1;
    this.pages[this.current_page].previousCavourtIn(function(){
      c.__unlock();
      clearTimeout(timer);
    });
  }

};


/*
 * require zepto.js
 * require blx-utilities
 */

(function(){

  var extend = BlxUtilities.classExtend;

  var BlxCarouselBaseObject = extend(BlxLayout.DisplayObject, function(){
    this.animation_queue = [];
  });

  BlxCarouselBaseObject.prototype.playAnimate = function(animation){};

  BlxCarouselBaseObject.prototype.playAnimateInQueue = function(){};


  var BlxCarousel = function(){};
  window.BlxCarousel = BlxCarousel;

  //var BlxCarouselPage = function(selector, option){

    //this.selector = selector;
    //var o = BlxUtilities.extend(option, {
      //goInAnimate: 'fadeInRight',
      //goOutAnimate: 'fadeOutLeft',

      //backInAnimate: 'fadeInLeft',
      //backOutAnimate: 'fadeOutRight',

      //onGoIn: BlxUtilities.emptyFunction,
      //afterGoIn: BlxUtilities.emptyFunction,
      //onGoOut: BlxUtilities.emptyFunction,

      //onBackIn: BlxUtilities.emptyFunction,
      //afterBackIn: BlxUtilities.emptyFunction,
      //onBackOut: BlxUtilities.emptyFunction,

    //});

    //BlxUtilities.mixIn(this, o);

  //};

  //BlxCarouselPage.prototype.action = function(action){
    //if (typeof action === 'string'){
      //switch (action) {
        //case 'goIn':
          //BlxUtilities.displayAnimate(this.selector, this.goInAnimate ,
                                      //{onAnimationStart: this.onGoIn,
                                      //onAnimationEnd: this.afterGoIn});
          //break;
        //case 'goOut':
          //BlxUtilities.displayAnimate(this.selector, this.goOutAnimate,
                                      //{onAnimationStart: this.onGoOut});
          //break;
        //case 'backIn':
          //BlxUtilities.displayAnimate(this.selector, this.backInAnimate,
                                      //{onAnimationStart: this.onBackIn,
                                      //onAnimationEnd: this.afterBackIn});
          //break;
        //case 'backOut':
          //BlxUtilities.displayAnimate(this.selector, this.backOutAnimate,
                                      //{onAnimationStart: this.onBackOut});
          //break;
        //default:
          //break;
      //}
    //}
  //};

  //BlxCarousel = function(option){

    //var o = BlxUtilities.extend(option, {
      //selector : '#blx-carousel',
      //page_class : '.blx-carousel-page',
      //size : 'fullscreen',
      //timeout : '',
      //lock : true,
      //slider_bar: false,
      //cavourt_button: false,

      //pages : null,
      //onUiInit : BlxUtilities.emptyFunction,
    //});

    //BlxUtilities.mixIn(this, o);

    //this.__page_lock = false;
    //this.__current_page = true;
    //this.__pages = [];

    //$(this.page_class).forEach(function(item, index){
      //this.__pages.push( new BlxCarouselPage('#'+$(item).attr('id'), this.pages[$(item).attr('id')]) );
    //});

    ////this.__carousel
  //}


  //BlxCarousel.prototype.resize = function(width, height){
    //$(this.selector).height(height);
    //$(this.selector).width(width);
    //$(this.page_class).height(height);
    //$(this.page_class).width(width);
  //};

  //BlxCarousel.prototype.__lock = function(){ this.__page_lock = true; };

  //BlxCarousel.prototype.__unlock = function(){ this.__page_lock = false; };

  //BlxCarousel.prototype.cavourt = function(n){

    //if(typeof n === 'number'){

      //if(n > this.__pages.length -1 || n < 0)
        //return;

      //if(n >= this.__current_page){
        //this.__pages[this.__current_page].action('goOut');
        //this.__pages[n].action('goIn');
        //this.__current_page = n;
        //return;
      //}
      //else if(n < this.__current_page){
        //this.__pages[this.__current_page].action('backOut');
        //this.__pages[n].action('backIn');
        //this.__current_page = n;
        //return;
      //}

    //}
    //else if(typeof n === 'string'){
      //for(var i = this.__pages.length; i >= 0; i--){
        //if(this.__pages[i]['selector'] === n){
          //this.cavourt(i);
          //return;
        //}
      //}
    //}
  //};


  //window.BlxCarousel = function(option){

    //this.timeout = 3000;
    //this.current_page = 0;
    //this.page_cavourt_lock = true;
    //this.carousel = $('.blx-carousel');
    //this.pages = this.carousel.find('.blx-carousel-page');

    //this.pages.hide();
    //$(this.pages[this.current_page]).show();

    //this.pages.forEach(function(item){

      //var id = item.attributes['id'].value;

      //item.carousel = this;

      //item.cavourtInAnimate = option[id].cavourtInAnimate;
      //item.cavourtOutAnimate = option[id].cavourtOutAnimate;

      //item.previousCavourtInAnimate = option[id].previousCavourtInAnimate;
      //item.previousCavourtOutAnimate = option[id].previousCavourtOutAnimate;

      //item.onPageCavourtIn = option[id].onPageCavourtIn;
      //item.afterPageCavourtIn = option[id].afterPageCavourtIn;
      //item.onPageCavourtOut = option[id].onPageCavourtOut;

      //item.cavourtIn = function(callback){

        //$(item).show();
        //$(item).addClass(['animated',this.cavourtInAnimate].join(' '));
        //item.onPageCavourtIn();
        //$(item).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          //$(item).removeClass(['animated',this.cavourtInAnimate].join(' '));
          //item.afterPageCavourtIn();
          //callback();
        //});

      //};

      //item.cavourtOut = function(callback){

        //$(item).addClass(['animated','fast',this.cavourtOutAnimate].join(' '));
        //item.onPageCavourtOut();
        //$(item).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          //$(item).removeClass(['animated','fast',this.cavourtOutAnimate].join(' '));
          //$(item).hide();
          //callback();
        //});

      //};

      //item.previousCavourtIn = function(callback){

        //$(item).show();
        //$(item).addClass(['animated',this.previousCavourtInAnimate].join(' '));
        //item.onPageCavourtIn();
        //$(item).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          //$(item).removeClass(['animated',this.previousCavourtInAnimate].join(' '));
          //item.afterPageCavourtIn();
          //callback();
        //});

      //};

      //item.previousCavourtOut = function(callback){

        //$(item).addClass(['animated','fast',this.previousCavourtOutAnimate].join(' '));
        //item.onPageCavourtOut();
        //$(item).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          //$(item).removeClass(['animated','fast',this.previousCavourtOutAnimate].join(' '));
          //$(item).hide();
          //callback();
        //});

      //};

    //});

  //};


  //BlxCarousel.prototype.__lock = function(){ this.page_cavourt_lock = false };
  //BlxCarousel.prototype.__unlock = function(){this.page_cavourt_lock = true};

  //BlxCarousel.prototype.nextPage = function(){
    //var c = this;

    //if (this.page_cavourt_lock && this.current_page < this.pages.length-1){
      //c.__lock();

      //var timer = setTimeout(function(){
        //c.__unlock();
      //}, this.timeout);

      //this.pages[this.current_page].cavourtOut(function(){});
      //this.current_page = this.current_page + 1;
      //this.pages[this.current_page].cavourtIn(function(){
        //c.__unlock();
        //clearTimeout(timer);
      //});
    //}

  //};

  //BlxCarousel.prototype.previousPage = function(){

    //var c = this;

    //if (this.page_cavourt_lock && this.current_page > 0){
      //c.__lock();

      //var timer = setTimeout(function(){
        //c.__unlock();
      //}, this.timeout);

      //this.pages[this.current_page].previousCavourtOut(function(){});
      //this.current_page = this.current_page - 1;
      //this.pages[this.current_page].previousCavourtIn(function(){
        //c.__unlock();
        //clearTimeout(timer);
      //});
    //}

  //};

})();


/*
 * require zepto.js
 */

(function(){

  window.BlxUtilities = {};

  /*
   * An empty function;
   */
  BlxUtilities.emptyFunction = function(){};

  /*
   *
   */
  BlxUtilities.extend = function(target, object){

    var reslut = {};

    if(!target)
      target = {};
    if(!object)
      object = {};

    for(x in object){
      reslut[x] = object[x];
    }

    for(x in target){
      reslut[x] = target[x];
    }

    return reslut;
  }

  // @TODO add suport for IE
  BlxUtilities.getWindowSize = function(){
    var reslut = {};
    reslut.width = window.innerWidth;
    reslut.height = window.innerHeight;
    return reslut;
  };

  BlxUtilities.displayAnimate = function(selector, animate, option){

    var item = $(selector);
    var o = this.extend(option, {
      delay : 0,
      onAnimationStart : this.emptyFunction ,
      onAnimationEnd : this.emptyFunction
    });

    var timer = setTimeout(function(){
      item.addClass(['animated',animate].join(' '));
      o.onAnimationStart(item);

      item.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        item.removeClass(['animated',animate].join(' '));
        o.onAnimationEnd(item);
      });

    }, o.delay);

    return {selector: selector, animate: animate, timer: timer}
  };

  BlxUtilities.clearAnimate = function(o){
    clearTimeout(o.timer);
    $(o.selector).removeClass(o.animate);
  };


  BlxUtilities.size = function(selector, width, height, option){

    var item = $(selector);
    var o = this.extend(option, {
      reference: null
    });

    var parent;
    if( o.reference === null ){
      parent = $(item).parent();
    }
    else{
      parent = $(o.reference)
    }

    item.width(width * parent.width());
    item.height(height * parent.height());

  }

  BlxUtilities.location = function(selector, x, y, option){

    var item = $(selector);
    var o = this.extend(option, {
      reference: null
    });

    var parent;
    if( o.reference === null ){
      parent = $(item).parent();
    }
    else{
      parent = $(o.reference)
    }

    item.css('position', 'absolute');
    item.css('margin-left', -1 * (item.width() / 2) );
    item.css('margin-top', -1 * (item.height() / 2) );
    item.css('left', parent.width() * x );
    item.css('top', parent.height() * x );

  }

})();

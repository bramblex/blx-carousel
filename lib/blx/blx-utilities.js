
/*
 * require zepto.js
 */

(function(){


  window.BlxUtilities = {};

  // @TODO
  var selector_cache = {};
  BlxUtilities.$ = function(selector){
    if(typeof selector_cache[selector] !== 'undefined'){
      selector_cache[selector] = window.$(selector);
      return selector_cache[selector];
    }
    else{
      return selector_cache[selector];
    }
  };
  //var $ = BlxUtilities.$;

  /*
   * An empty function;
   */
  BlxUtilities.emptyFunction = function(){};

  /*
   *
   */
  BlxUtilities.extend = function(target, object){

    var result = {};

    if(!target)
      target = {};
    if(!object)
      object = {};

    for(x in object){
      result[x] = object[x];
    }

    for(x in target){
      result[x] = target[x];
    }

    return result;
  }

  BlxUtilities.mixIn = function(target, object){
    if (typeof target === 'undefined' || typeof object === 'undefined')
      return;

    for (x in object){
      target[x] = object[x];
    }
  };

  // @TODO add suport for IE
  BlxUtilities.getWindowSize = function(){
    var result = {};
    result.width = window.innerWidth;
    result.height = window.innerHeight;
    return result;
  };

  BlxUtilities.displayAnimate = function(selector, animate, option){

    var item = $(selector);
    var o = this.extend(option, {
      delay : 0 ,
      type : 'auto' ,
      onAnimationStart : this.emptyFunction ,
      onAnimationEnd : this.emptyFunction
    });

    var type = o.type;
    if(type === 'auto'){
      //if(type.match(/\w+In(\s*|Right|Left|Up|Down)/))
        //type = 'in';
      //if(type.match(/\w+Out(\s*|Right|Left|Up|Down)/))
        //type = 'out';
      //if((/\w+In(\s*|Right|Left|Up|Down)/).test(type))
        //type = 'in';
      //if((/\w+Out(\s*|Right|Left|Up|Down)/).test(type))
        //type = 'out';
      if((/\w+In($|\s+|[0-9]|[A-Z])/).test(animate)){
        type = 'in';
        item.hide();
      }
      if((/\w+Out($|\s+|[0-9]|[A-Z])/).test(animate)){
        type = 'out';
      }
    }

    var timer = setTimeout(function(){

      item.addClass(['animated',animate].join(' '));
      if(type === 'in'){
        item.show();
      }
      o.onAnimationStart(selector);

      item.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        item.removeClass(['animated',animate].join(' '));
        if(type === 'out'){
          item.hide();
        }
        o.onAnimationEnd(selector);
      });

    }, o.delay);

    return {selector: selector, animate: animate, timer: timer}
  };

  BlxUtilities.clearAnimate = function(o){
    clearTimeout(o.timer);
    $(o.selector).removeClass(o.animate);
  };


  /*
   * @TODO
   */
  BlxUtilities.fontSize = function(){};

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

  BlxUtilities.position = function(selector, x, y, option){

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

  BlxUtilities.parseSelector = function(selector){
    if(!(/(^#|^\.)/g).test(selector))
      return '#' + selector;
  };

  /*
   * function classExtend;
   * used to extend a class from anothor class.
   * @return: Class
   * @arguments: Class
   */

  BlxUtilities.classExtend = function(parent_class, construction_function){
    var child_class = function(){

      //parent_class.call(this);
      //construction_function.call(this);
      // @TODO

      parent_class.apply(this, arguments);
      construction_function.apply(this, arguments);
    }
    child_class.prototype = new parent_class();
    return child_class;
  };

  //BlxUtilities.createDom = function(tag, class, content, callback){
    //var dom = $('<'+tag+'>');
    //dom.addClass(class);
    //dom.html(content);
    //if (callback){
      //callback(dom);
    //}
  //};

})();

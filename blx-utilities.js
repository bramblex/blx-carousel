
/*
 * require zepto.js
 */

var BlxUtilities = function(){};

BlxUtilities.prototyp.emptyFunction = function(){};

BlxUtilities.prototyp.extend = function(target, object){

  if(!target)
    target = {};
  if(!object)
    object = {};

  for(x in object){
    if (typeof target[x] === 'undefined')
      target[x] = object[x];
  }
}

BlxUtilities.prototyp.displayAnimate = function(selector, animate, option){

  var item = $(selector);
  var delay;
  var onAnimationStart;
  var onAnimationEnd;

  if (typeof option === 'object'){

    if (typeof option.delay === 'number')
      delay = option.delay;
    else
      delay = 0;

    if (typeof option.onAnimationStart === 'function')
      onAnimationStart = option.onAnimationStart;
    else
      onAnimationStart = BlxUtilities.emptyFunction;

    if (typeof option.onAnimationEnd === 'function')
      onAnimationEnd = option.onAnimationEnd;
    else
      onAnimationEnd = BlxUtilities.emptyFunction;

  }
  else{
    delay = 0;
    onAnimationStart = BlxUtilities.emptyFunction;
    onAnimationEnd = BlxUtilities.emptyFunction;
  }

  setTimeout(function(){
    item.addClass(['animated',animate].join(' '));
    onAnimationStart(item);

    item.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      item.removeClass(['animated',animate].join(' '));
      onAnimationEnd(item);
    });

  }, delay);

};

BlxUtilities.prototyp.location = function(selector, option){
  var items = $(selector);
  this.extend(option, {});

}

BlxUtilities.prototyp.size = function(selector, option){
  this.extend(option, {});
  var item = $(selector);

}


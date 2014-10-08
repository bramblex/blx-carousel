
var BlxUtilities = {};

BlxUtilities.emptyFunction = function(){};

BlxUtilities.displayAnimate = function(selector, animate, option){

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

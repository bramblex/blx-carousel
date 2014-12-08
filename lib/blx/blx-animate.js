
/*
 * require zepto.js
 */

(function(){

  var __Animate__ = function(selector){
    this.__queue = [];
    this.__selector = selector;
  };

  __Animate__.prototype.animate = function(animation, selector){

    if (typeof selector !== 'undefined'){
      this.change(selector);
    }

    this.__queue.push(function(_this){
      var item = $(_this.__selector);
      item.addClass(['animated',animation].join(' '));
      item.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        item.removeClass(['animated',animation].join(' '));
        _this.next();
      });
    });
      return this;
  };

  __Animate__.prototype.branch = function(blx_animate_object){
    this.__queue.push(function(_this){
      blx_animate_object.run()
      _this.next();
    });
    return this;
  }

  __Animate__.prototype.animateList = function(list, selector){
    if (typeof selector !== 'undefined'){
      this.change(selector);
    }

    __queue = this.__queue;
    list.forEach(function(animation){

      __queue.push(function(_this){
        var item = $(_this.__selector);
        item.addClass(['animated',animation].join(' '));
        item.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          item.removeClass(['animated',animation].join(' '));
          _this.next();
        });
      });

    });

    return this;
  };


  __Animate__.prototype.delay = function(timeout){
    this.__queue.push(function(_this){
      setTimeout(function(){
        _this.next();
      }, timeout);
    });
    return this;
  };

  __Animate__.prototype.hide = function(selector){

    if (typeof selector !== 'undefined'){
      this.change(selector);
    }

    this.__queue.push(function(_this){
      $(_this.__selector).hide();
      _this.next();
    });
    return this;
  };

  __Animate__.prototype.show = function(selector){

    if (typeof selector !== 'undefined'){
      this.change(selector);
    }

    this.__queue.push(function(_this){
      $(_this.__selector).show();
      _this.next();
    });
    return this;
  };

  __Animate__.prototype.change = function(selector){
    this.__queue.push(function(_this){
      _this.__selector = selector;
      _this.next();
    });
    return this;
  }

  __Animate__.prototype.run = function(){
    var _this = this;
    setTimeout(function(){
      _this.next();
    },0);
    return this;
  };

  __Animate__.prototype.excute = function(callback){
    this.__queue.push(callback);
    return this;
  };

  __Animate__.prototype.next = function(count){

    if (typeof count === 'number' && count > 0){
      for (var i = count - 1; i >= 0; i--) {
        this.__queue.shift()
      }
    }

    var nextAction = this.__queue.shift()
    if(nextAction){
      nextAction(this);
    }
  }

  window.BlxAnimate = function(selector){
    return new __Animate__(selector);
  };

})();

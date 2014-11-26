/*
 * require blx-utities.js
 * require zepto.js
 */

(function(){
  //var extend = function( Class, ){};

  /*
   *   extend is a alias for BlxUtilities.classExtend,
   *   is a function to extend a class from another class.
   */
  var extend = BlxUtilities.classExtend;

  /*
   *    define a name space BlxLayout.
   */
  var BlxLayout = {};

  /*
   *    Start Of Define Clas DisplayObject.
   *
   *    base class
   *    all other class extend from DisplayObject.
   */
  var DisplayObject = function(){

    this.type = 'DisplayObject';
    this.status = {};
    this.dom = undefined;

    this.binding(this.__createDom()) ;

    this.parent = undefined;
    this.children = [];
  };

  DisplayObject.prototype.__createDom = function(){
    return $('<div>');
  };

  DisplayObject.prototype.__measure = function(){
    return {
      width: $(this.dom).width(),
      height: $(this.dom).height(),
    };
  };

  DisplayObject.prototype.binding = function(dom){
    this.dom = dom;
  };

  DisplayObject.prototype.css = function(key, value){
    if (this.dom)
      $(this.dom).css(key, value);
  };

  DisplayObject.prototype.attr = function(){
    if (this.dom)
      $(this.dom).attr(key, value);
  };

  DisplayObject.prototype.appendChild = function(child){
    this.children.push(child);
    child.parent = this;
    $(this.dom).append(child.dom);
  };

  DisplayObject.prototype.appendTo = function(parent){
    parent.appendChild(this);
  };

  DisplayObject.prototype.removeChild = function(child){

    for (var i = this.children.length - 1; i >= 0; i--) {
      if (this.children[i] === child){
        var child = this.children.splice(i,1);
        child.parent = undefined;
        return;
      }
    }

  };

  DisplayObject.prototype.remove = function(){
    this.parent.removeChild(this);
  };

  DisplayObject.prototype.size = function(width, height){
    this.status.width = width;
    this.status.height = height;
    if (this.dom && this.parent){
      var p = this.parent.__measure();
      this.css('width', p.width * width);
      this.css('height', p.height * height);
    }
  };

  DisplayObject.prototype.position = function(x, y){
    this.status.x = x;
    this.status.y = y;
    if (this.dom && this.parent){

      var p = this.parent.__measure();
      var c = this.__measure();

      var left_offset = p.width * x - c.width / 2;
      var top_offset = p.height * y -  c.height / 2;
      this.css('top', top_offset);
      this.css('left', left_offset);

    }
  };

  //DisplayObject.prototype.aspectRatio = function(){};
  //DisplayObject.prototype.terminal = function(top, bottom, left, right){};

  DisplayObject.prototype.refresh = function(){
    this.size(this.status.width, this.status.height);
    this.position(this.status.x, this.status.y);
  };

  DisplayObject.prototype.refreshRecursively = function(){

    this.refresh();

    if (this.children.length > 0){
      for (var child in this.children) {
        child.refreshRecursively();
      }
    }

  };
  /*
   *    End Of Define Class DisplayObject.
   */

  var DispalyContainer = extend(DisplayObject, function(){});

  var Image = extend(DisplayObject, function(src){
    this.src = src;
  });

  Image.prototype.__createDom = function(){
    var result = $('<img>');
    result.attr('src', this.src);
    return result;
  };

  Image.prototype.size = function(width, height){
    this.css('width', (100 * width).toString()+'%' );
    this.css('height', (100 * height).toString()+'%' );
  };

  var Font = extend(DisplayObject, function(text){
    this.text = text;
  });

  Font.prototype.size = function(){};

  Font.prototype.refresh = function(){};

  var Section = extend(DisplayObject, function(text){
    this.text = text;
  });

  Section.prototype.size = function(font_size){
  };

  Section.prototype.refresh = function(){};

  Section.prototype.__createDom = function(){
    var result = $('<p>');
    result.html(this.text);
    return result;
  };

  Section.prototype.align = function(val){
    this.css('text-align', val);
  };

  Section.prototype.indent = function(val){
    this.css('text-indent', val)
  };

  var TextArea = extend(DisplayObject, function(){});
  TextArea.prototype.size = function(){};
  TextArea.prototype.addSection = function(){};
  TextArea.prototype.refresh = function(){};

  /*
   * binding classes to BlxLayout name space;
   */

  BlxLayout.DisplayObject = DisplayObject;
  BlxLayout.DisplayContainer = DispalyContainer;
  BlxLayout.Image = Image;
  BlxLayout.Font = Font;
  BlxLayout.TextArea = TextArea;

  // create an interface for BlxLayout;
  window.BlxLayout = BlxLayout;
})();

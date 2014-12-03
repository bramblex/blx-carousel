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
    //if( this.parent !== undefined ){
      //var parent = this.parent;
      //parent.removeChild(this);
    //}
    //else if (this.children.length !== 0){
    //}

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
      this.css('width', parseInt(p.width * width));
      this.css('height', parseInt(p.height * height));
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
      this.css('top', parseInt(op_offset));
      this.css('left', parseInt(left_offset));

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

  /*
   *    Define Class DisplayContainer extend from DisplayObject.
   */
  var DisplayContainer = extend(DisplayObject, function(){
    this.type = 'DisplayContainer';
  });

  DisplayContainer.prototype.__nothing = '';

  /*
   *    End Of Define Class DisplayContainer.
   */

  var Image = extend(DisplayObject, function(src){
    this.type = 'Image';
    this.src = src;
  });

  Image.prototype.__createDom = function(){
    var result = $('<img>');
    result.attr('src',  this.src);
    return result;
  };

  Image.prototype.size = function(width, height){
    this.status.width = width;
    this.status.height = height;
    if (this.dom && this.parent){
      var p = this.parent.__measure();
      var c = this.__measure();

      var p_r = p.width / p.height;
      var c_r = c.width / c.height;

      if (p_r >= c_r){
        this.css('height', parseInt(p.height * height));
        this.css('width', 'auto');
      }
      else{
        this.css('width', parseInt(p.width * width));
        this.css('height', 'auto');
      }
    }
  };

  var Font = extend(DisplayObject, function(text){
    this.type = 'Font';
    this.text = text;
  });

  Font.prototype.__estimatedRatio = function(){
    if (this.text){
      var width = text.replace(/[^\x00-\xff]/g, 'xx').length;
      var height = 2;
      return width / height;
    };
  };

  Font.prototype.size = function(width, height){
    this.status.width = width;
    this.status.height = height;
    if (this.dom && this.parent){
      var p = this.parent.__measure();
      var p_r = p.width / p.height;
      var c_r = this.__estimatedRatio();

      if (p_r >= c_r){
        this.css('font-size', parseInt(p.height * height));
      }
      else{
        this.css('font-size', parseInt(p.width * width * c_r));
      }
    }
  };

  var Section = extend(DisplayObject, function(text){
    this.type = 'Section';
    this.text = text;
  });

  Section.prototype.size = function(font_size){
    this.status.font_size = font_size;
    this.css('font-size', font_size);
  };

  Section.prototype.refresh = function(){
    this.size(this.status.font_size);
  };

  Section.prototype.__createDom = function(){
    var result = $('<p>');
    result.html(this.text);
    return result;
  };

  Section.prototype.align = function(val){
    this.css('text-align', val);
  };

  Section.prototype.indent = function(val){
    this.css('text-indent', val);
  };

  var TextArea = extend(DisplayObject, function(){
    this.type = 'TextArea';
  });

  TextArea.prototype.size = function(){};

  TextArea.prototype.addSection = function(text, align, indent){
    var section = new Section(text);
    section.align(align);
    section.indent(indent);
    return section;
  };

  TextArea.prototype.removeSection = function(section){
    this.removeChild(section);
  };

  TextArea.prototype.refresh = function(){};

  /*
   * binding classes to BlxLayout name space;
   */

  BlxLayout.DisplayObject = DisplayObject;
  BlxLayout.DisplayContainer = DisplayContainer;
  BlxLayout.Image = Image;
  BlxLayout.Font = Font;
  BlxLayout.Section = Section;
  BlxLayout.TextArea = TextArea;

  // create an interface for BlxLayout;
  window.BlxLayout = BlxLayout;
})();

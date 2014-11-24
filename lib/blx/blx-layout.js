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
   *    base class
   *    all other class extend from DisplayObject.
   */
  var __DisplayObject = function(){};

  __DisplayObject.prototype.binding(dom){
    this.dom = dom;
  };

  __DisplayObject.prototype.css = function(){
  }

  var __DispalyContainer = extend(__DisplayObject, function(){});

  var __Image = extend(__DisplayObject, function(){});

  var __Font = extend(__DisplayObject, function(){});

  var __Text = extend(__DisplayObject, function(){});

  /*
   * binding classes to BlxLayout name space;
   */

  BlxLayout.DisplayObject = __DisplayObject;
  BlxLayout.DisplayContainer = __DispalyContainer;
  BlxLayout.Image = __Image;
  BlxLayout.Font = __Font;
  BlxLayout.Text = __Text;
})();

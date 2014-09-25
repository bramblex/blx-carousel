(function(){

  var initializeUI = function(){

    var body_width = $('body').width();
    //var body_width = window.screen.availWidth;
    console.log(body_width);

    var carousel_content = $('.blx-carousel-content');
    var carousel_page = $('.blx-carousel-page');

    carousel_page.width(body_width);
    carousel_content.width(carousel_page.length * carousel_page.width());

  };

  var onReady = function(){
    initializeUI();
  };

  $(document).ready(onReady);
})()

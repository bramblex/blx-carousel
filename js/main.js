(function(){
  var data = {
    'img': 'http://bramblex.github.io/blx-carousel/img/logo.png',
    'link': 'http://bramblex.github.io/blx-carousel/',
    'desc': '由华工软宣开发的强大的HTML5电子邀请函框架',
    'title': 'BlxCarousel.js'
  };

  var callback = function(){};

  wechat('timeline', data, callback);
  wechat('friend', data, callback);
})()

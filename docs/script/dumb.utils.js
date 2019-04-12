// start utilities

function Utils() {
    /*
      example use of element in view script
    */

    /* var isElementInView = Utils.isElementInView($('#element-id'), false);

    if (isElementInView) {
    	console.log('in view');
    } else {
    	console.log('out of view');
    } */

    /*
      example use of lazy load image
    */

    // <img class="lazyimg" img-source="img/boxpic.png" alt="">
}

Utils.prototype = {
  constructor: Utils,

  elementInView: function(element) {
    var pageTop = $(window).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var elementTop = $(element).offset().top;
    var elementBottom = elementTop + $(element).height();
    return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
  },

  loadImg: function (element) {
    let $image = $( element );
    let $imgSource = $image.attr('img-source');
    let $class = element.replace('.','');
    $image.attr('src', $imgSource);
    $image.removeClass($class);
  },

  lazyImg: function (element) {
    let $image = $( element );
    let isInView = Utils.elementInView(element);
    if (isInView) (Utils.loadImg(element));
  }
};

var Utils = new Utils();
// end utilities

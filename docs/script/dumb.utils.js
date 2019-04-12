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
}

Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
    },
    lazyLoadImg: function (element) {
        let a = $( element );
        let isInView = Utils.isElementInView(a, true);
        if (isInView) {
            a.attr('src', a.attr('img-source')); // load image from img-source
            a.removeClass(element.replace('.','').replace('#','')); // remove class after img load
        }
    }
};

var Utils = new Utils();
// end utilities
(function ($) {
    'use strict';

$(window).load(function() {
    $('#preloader-wrapper').fadeOut('slow');
});

    $('.gallery-slider').owlCarousel(
        {
        pagination : true,
        autoPlay : 5000,
        itemsDesktop  :  [1500,4],
        itemsDesktopSmall :  [979,3]
        }
    );

    // Gallery Popup
    $('.image-popup').magnificPopup({type:'image'});

})(jQuery);








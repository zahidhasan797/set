(function(){

    'use strict';


    var $projects = $('.pf_main');

    $projects.isotope({
        itemSelector: '.img_lay',
        // layoutMode: 'fitRows'
    });

    $('#filters > .btn').on('click', function(e){

        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('#filters > .btn').removeClass('active');
        $(this).addClass('active');

        $projects.isotope({filter: filter});

    });

    // $('.card').mouseenter(function(){

    //     $(this).find('.card-overlay').css({'top': '-100%'});
    //     $(this).find('.card-hover').css({'top':'0'});

    // }).mouseleave(function(){

    //     $(this).find('.card-overlay').css({'top': '0'});
    //     $(this).find('.card-hover').css({'top':'100%'});

    // });

})(jQuery);
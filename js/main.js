var transfer = false;


function init() {

    var windowHeight = $( window ).height();

    $('.welcome').css({
        'height' : $( window ).height()
    });

    if( $('.body').height() < windowHeight ) {
        $('.body').css({
           'paddingBottom' : windowHeight-$('.body').height()
        });
        $('.body-fake').css({
            'height' : windowHeight
        });
    } else {
        $('.body-fake').css({
            'height' : $('.body').height()
        });
    }


    $(window).scroll(function() {
        var val = $(window).scrollTop() < windowHeight ? (1- $(window).scrollTop() / windowHeight) : 0;
        $('.blind').css({
            'opacity' : val
        });

        if(val == 0) {
            $('.blind').hide();
        } else {
            $('.blind').show();
        }

        if ($(window).scrollTop() > windowHeight && !transfer) {
            transfer = true;
            $('.body').children().each(function () {
                $(this).appendTo('.body-fake');
            });
        }
        if ($(window).scrollTop() <= windowHeight && transfer) {
            transfer = false;
            $('.body-fake').children().each(function () {
                $(this).appendTo('.body');
            });
        }


    });






    $(window).resize(function() {

        // if($( window ).width() > 1050 && sizeWindow != 1) {
        //     sizeWindow = 1;
        //     $('.content').css({'width' : '1000px'});
        // }
        // if($( window ).width() <= 1050 && sizeWindow != 0) {
        //     sizeWindow = 0;
        //     $('.content').css({'width' : '950px'});
        // }

    });

}

function fac(n) {
    if(n == 0) {
        return 1
    } else {
        return n * fac(n - 1);
    }
}


function rand(min, max) {
    return Math.floor(Math.random()*(max-min+1))+1;
}


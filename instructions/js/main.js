var transfer = false;


function init() {




    var windowHeight = $( window ).height();

    var endNight = $('.gradient-morning').offset().top - windowHeight*1.5;
    var startMorning = $('.gradient-morning').offset().top - windowHeight;
    var endMorning = $('.gradient-morning').offset().top - windowHeight/3;
    var morning = 0;
    var morBlind = false;

    var saluteMiddle = $('.salute').offset().top - windowHeight/2;
    var skiMiddle = $('.gradient-flight').offset().top - windowHeight/2;


    saluteMiddle = $('.salute').position().top + $('.gradient-party').position().top;

    $('.morning-blind').hide();


    $(window).scroll(function() {

        endNight = $('.gradient-morning').offset().top - windowHeight*1.5;
        startMorning = $('.gradient-morning').offset().top - windowHeight;
        endMorning = $('.gradient-morning').offset().top - windowHeight/3;
        saluteMiddle = $('.salute').offset().top - windowHeight/2;
        skiMiddle = $('.gradient-flight').offset().top - windowHeight/2;



        var windowWidth = $( window ).width();
        var scroll = $(this).scrollTop();
        // var scroll = $(window).scrollTop();


        if(scroll > skiMiddle) {
            var t = (scroll-skiMiddle)/(windowHeight);
            var planeW = $('.plane').width();

            $('.plane').show();
            $('.plane').css({
                'left' : t*(windowWidth),
                'top' : windowHeight-t*windowHeight*1.3,
                'opacity' : 1
            });
        } else {
            $('.plane').hide();
        }

        // document.title = scroll + ' ' + saluteMiddle;

        if(scroll > saluteMiddle) {
            var t = (scroll-saluteMiddle)/(windowHeight/2);
            var opac;
            var topCake = windowHeight - Math.tanh(t)*(windowHeight/2+100);

            if(t>3 && t<4) {
                opac = 4-t;
            } else if(t<= 3){
                opac = 1;
            } else {
                opac = 0;
            }


            $('.cake').show();
            $('.cake').css({
                'left' : windowWidth/2,
                'top' : topCake,
                'opacity' : opac
            });
        } else {
            $('.cake').hide();
        }


        if (scroll >= startMorning && morning == 0) {
            morning = 1;
            $('.gradient-cake').addClass('gradient-white');
        }
        if (scroll < startMorning && morning > 0) {
            morning = 0;
            $('.gradient-cake').removeClass('gradient-white');
        }


        if (scroll >= endNight && scroll < startMorning) {
            if(!morBlind) {
                $('.morning-blind').show();
                morBlind = true;
            }
            var val = (scroll - endNight)/(startMorning-endNight);
            $('.morning-blind').css({
                'opacity' : val
            });
        }
        if (scroll >= startMorning && scroll < endMorning) {
            if(!morBlind) {
                $('.morning-blind').show();
                morBlind = true;
            }
            var val = 1 - (scroll - startMorning)/(endMorning-startMorning);
            $('.morning-blind').css({
                'opacity' : val
            });
        }
        if(scroll < endNight || scroll >= endMorning) {
            morBlind = false;
            $('.morning-blind').hide();
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



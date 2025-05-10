// jQuery code to initialize the counterUp plugin

$(document).ready(function () {

    // This code to initialize the counterUp plugin This code will run when the document is fully loaded
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Slick Carousel initialization
    $('.center').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    // TYped Plugin
    var typed = new Typed('#typewriter', {
        strings: ['Your Style', 'Your Mood', 'Your Personality'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        startDelay: 500,
        loop: true
    });

    $('.typewriter').each(function () {
        var el = $(this);
        var text = el.text();
        el.html('');
        var i = 0;
        var timer = setInterval(function () {
            if (i < text.length) {
                el.append(text.charAt(i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 100); // typing speed
    });




    // Magnific Popup
    $('.popup-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    $('.slider-for').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
        arrows: true,
        prevArrow: $('.custom-prev'),
        nextArrow: $('.custom-next'),
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    centerPadding: '60px'
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    centerPadding: '30px'

                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    centerPadding: '5px'
                }
            }
        ]
    });

});
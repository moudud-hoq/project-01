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

    // Magnific Popup
    $('.popup-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    $('.slider-for').slick({
        slidesToShow: 3, // or 1 or 2 based on your design
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
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

});
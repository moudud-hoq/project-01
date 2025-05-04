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

});
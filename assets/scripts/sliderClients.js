
$(document).ready(function () {
    $('.sliderClients').slick({
        infinite: true,
        slidesToShow: 4,
        speed: 600,
        easing: 'ease',
        cssEase: 'ease-in',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

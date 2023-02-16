
$(document).ready(function () {
    $('.sliderPortfolio').slick({
        infinite: true,
        rows: 3,
        slidesToShow: 3,
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

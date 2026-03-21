document.addEventListener('DOMContentLoaded', function () {
    if (typeof WOW === 'function') {
        new WOW().init();
    }

    if (typeof jQuery !== 'undefined' && jQuery().owlCarousel) {
        $('.testimonial-carousel').owlCarousel({
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 600,
            margin: 24,
            dots: true,
            loop: true,
            center: true,
            nav: true,
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                992: { items: 3 }
            }
        });
    }
});

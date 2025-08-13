    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,  // Default for smallest screens
        spaceBetween: 16,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        grabCursor: true,
        breakpoints: {
            // When window width is >= 480px
            480: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            // When window width is >= 640px
            640: {
                slidesPerView: 4,
                spaceBetween: 24
            },
            // When window width is >= 1024px
            1024: {
                slidesPerView: 5,
                spaceBetween: 32
            },
            // When window width is >= 1280px
            1280: {
                slidesPerView: 6,
                spaceBetween: 32
            }
        }
    });
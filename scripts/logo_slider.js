 
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 4,
                spaceBetween: 0, // consistent gap
                loop: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                grabCursor: true,
                breakpoints: {
                    320: {
                        slidesPerView: 2
                    },
                    640: {
                        slidesPerView: 3
                    },
                    1024: {
                        slidesPerView: 5
                    }
                }
            });

document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper(".mySwiper", {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 10000,
            disableOnInteraction: true,
        },
        spaceBetween: 30,
        breakpoints: {
            768: {
                slidesPerView: 1, // Adjust the number of slides visible on smaller screens
                spaceBetween: 20, // Adjust space between slides
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 30,
            }
        }
    });
    

    function handleScroll() {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add('visible');
                section.classList.remove('hidden');
            } else if (sectionTop > window.innerHeight) {
                section.classList.remove('visible');
                section.classList.add('hidden');
            }
        });

        const scrollToTopButton = document.querySelector('.scroll-to-top');
        if (window.scrollY > window.innerHeight) {
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
    }
    
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

   
    document.querySelector('.scroll-to-top').addEventListener('click', scrollToTop);
    window.addEventListener('scroll', handleScroll);
    // Add animated textured background effect
    const body = document.body;
    body.style.background = "linear-gradient(135deg, #000000, #000000, #ffa500)";
    body.style.backgroundSize = "400% 400%";
    body.style.animation = "backgroundAnimation 5s ease infinite";
    const styleElement = document.createElement("style");
    styleElement.innerHTML = `
        @keyframes backgroundAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
    `;
    document.head.appendChild(styleElement);
    
    // Adding IntersectionObserver for section animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    });

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
});

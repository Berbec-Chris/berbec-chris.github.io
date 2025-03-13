document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    // Show Menu
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show-menu');
        });
    }

    // Hide Menu
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    // Remove Menu on Link Click
    const navLink = document.querySelectorAll('.nav__link');

    function linkAction() {
        navMenu.classList.remove('show-menu');
    }

    navLink.forEach(n => n.addEventListener('click', linkAction));

    // Shadow Header
    const shadowHeader = () => {
        const header = document.getElementById('header');
        this.scrollY >= 50 ? header.classList.add('shadow-header') 
                           : header.classList.remove('shadow-header');
    }
    window.addEventListener('scroll', shadowHeader);

    // Contact Form Popup
    const contactButton = document.querySelector('.contact__button');
    const contactPopup = document.querySelector('.contact__popup');
    const contactOverlay = document.querySelector('.contact__overlay');

    contactButton.addEventListener('click', function() {
        contactPopup.classList.add('active');
        contactOverlay.classList.add('active');
    });

    contactOverlay.addEventListener('click', function() {
        contactPopup.classList.remove('active');
        contactOverlay.classList.remove('active');
    });

    // Contact Form Submission
    document.querySelector('.contact__form').addEventListener('submit', function (e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                form.reset();
                alert('Thank you for your message!');
            } else {
                alert('Oops! There was a problem submitting your form');
            }
        }).catch(() => {
            alert('Oops! There was a problem submitting your form');
        });
    });

    // ScrollReveal animations
    const sr = ScrollReveal({
        origin: 'top',
        distance: '50px',
        duration: 1000,
        delay: 200,
        reset: true
    });

    sr.reveal('.home__name, .home__description, .home__scroll, .home__social', { interval: 200 });
    sr.reveal('.about__title, .about__description, .about__list', { interval: 200 });
    
    // Scroll Down Button for Home Section
    const homeScrollButton = document.querySelector('.home__scroll-box');
    if (homeScrollButton) {
        homeScrollButton.addEventListener('click', () => {
            const nextSection = document.querySelector('#about');
            if (nextSection) {
                const headerHeight = document.querySelector('#header').offsetHeight;
                const offsetPosition = nextSection.offsetTop - headerHeight - 60; // Scroll 60px less
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Scroll Down Button for About Section
    const aboutScrollButton = document.querySelector('.about__scroll-box');
    if (aboutScrollButton) {
        aboutScrollButton.addEventListener('click', () => {
            const nextSection = document.querySelector('#services');
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Scroll Down Button for Services Section
    const servicesScrollButton = document.querySelector('.services__scroll-box');
    if (servicesScrollButton) {
        servicesScrollButton.addEventListener('click', () => {
            const nextSection = document.querySelector('#projects');
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    var swiper = new Swiper(".swiper", {

        direction: 'horizontal',
        loop: false,

        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // And if we need scrollbar
        scrollbar: {
        el: '.swiper-scrollbar',
        },          

        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      });
});

//togle & Responsive Navigation 
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navList = document.querySelector("nav");

    burger.addEventListener("click", () => {
        navList.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
};

navSlide();

//clear form before unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName ("form")) {
        form.reset ();
    }
};

// JavaScript for Lightbox
const openLightbox = document.getElementById('openLightbox');
const portofolioLinks = document.querySelectorAll('.portofolio-link');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox img');

portofolioLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const portofolioCover = this.closest('.portofolio').querySelector('.portofolio-cover img');
        lightboxImage.src = portofolioCover.src;
        lightbox.style.display = 'flex';
    });
});

lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
});


openLightbox.addEventListener('click', function(event) {
    event.preventDefault();
    lightboxImage.src = this.querySelector('img').src;
    lightbox.style.display = 'flex';
});

lightbox.addEventListener('click', function(event) {
    lightbox.style.display = 'none';
    history.back(); // Navigasi mundur ke halaman sebelumnya
});
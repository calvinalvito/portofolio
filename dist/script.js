// Navbar Fied
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixNav = header.offsetTop;

    if (!navMenu.classList.contains('hidden')) {
        // Jangan menambahkan class 'navbar-fixed' jika menu hamburger terbuka
        return;
    }

    if (window.pageYOffset > fixNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('hidden');

    // Hapus class 'navbar-fixed' saat hamburger diklik
    const header = document.querySelector('header');
    header.classList.remove('navbar-fixed');
});

// Close Navbar
const navClose = document.querySelector('#navbar-close');

navClose.addEventListener('click', function() {
    navMenu.classList.toggle('hidden');
});

document.addEventListener("DOMContentLoaded", function () {
    let animatedContainer = document.getElementById("animatedContainer");

    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY;
        animatedContainer.style.transform = `translateX(${scrollPosition / 2}px)`;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            var targetId = this.getAttribute("href").substring(1);
            var targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        });
    });
});



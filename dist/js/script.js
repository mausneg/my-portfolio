// Dark Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Check for saved theme preference or default to light mode
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

themeToggleBtn.addEventListener('click', function() {
    // Toggle icons
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // Toggle dark mode
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
    }
});

// Navbar Fixed on Scroll
window.onscroll = function() {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop

    if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
    }else{
        header.classList.remove("navbar-fixed");
    }
};

// Hamburger Menu Toggle
$("#hamburger").click(function () { 
    $(this).toggleClass("hamburger-active");
    $("#nav-menu").toggleClass("hidden");
});

// Load About Me Content
fetch("dist/txt/aboutme.txt")
    .then(response => response.text())
    .then(data => {
        document.querySelector("#about-content").innerHTML = data;
    });

// Load Social Media Content
fetch("dist/txt/socialmedia.txt")
    .then(response => response.text())
    .then(data => {
        document.querySelector("#social-media").innerHTML = data;
    });



window.onscroll = function() {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop

    if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
    }else{
        header.classList.remove("navbar-fixed");
    }
};

$("#hamburger").click(function () { 
    $(this).toggleClass("hamburger-active");
    $("#nav-menu").toggleClass("hidden");
});

fetch("dist/txt/aboutme.txt")
    .then(response => response.text())
    .then(data => {
        document.querySelector("#about-content").innerHTML = data;
    });

fetch("dist/txt/socialmedia.txt")
    .then(response => response.text())
    .then(data => {
        document.querySelector("#social-media").innerHTML = data;
    });



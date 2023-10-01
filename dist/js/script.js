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


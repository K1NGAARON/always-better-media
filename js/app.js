// function shuffleArray(array) {
//     array.sort(() => Math.random() - 0.5);
// };

// STICKY LARGE MENU
$(document).scroll(function () {
    const header = $('.header');
    const headerLogo = $('.header .logo');
    const darkHeader = document.querySelector('.header.dark');

    if (darkHeader) {
        if ($(this).scrollTop() > header.height()) {
            header.addClass('active');
            headerLogo.attr('src', "/assets/logo/always-better-black.png")
        } else {
            header.removeClass('active');
            headerLogo.attr('src', "/assets/logo/always-better-black.png")
        }
    } else {
        if ($(this).scrollTop() > header.height()) {
            header.addClass('active');
            headerLogo.attr('src', "/assets/logo/always-better-black.png")
        } else {
            header.removeClass('active');
            headerLogo.attr('src', "/assets/logo/always-better-white.png")
        }
    }
});

function closeMenu() {
    $('.small-menu-wrapper').css('display', 'none');
};

function closeAccordion(e) {
    $('.accordion-head').removeClass('active');
    $('.accordion-body').removeClass('active');
    $('.accordion-head').children('.icon').removeClass('active');
    $('.accordion-head').children('.icon').children('i').removeClass('fa-minus');
    $('.accordion-head').children('.icon').children('i').addClass('fa-plus');
};

$('.accordion-item').click(function () {
    closeAccordion();

    $(this).children('.accordion-head').toggleClass('active');
    $(this).children('.accordion-head').siblings('.accordion-body').toggleClass('active');
    $(this).children('.accordion-head').children('.icon').toggleClass('active');

    $(this).children('.accordion-head').children('.icon').children('i').removeClass('fa-plus');
    $(this).children('.accordion-head').children('.icon').children('i').addClass('fa-minus');
});


$('.small-menu-content .nav').click(closeMenu);

$("#menu-toggle").click(function() {
    $(".small-menu-wrapper").toggle("active");
});
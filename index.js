function one() {
    var nav = document.getElementById('nav');
    nav.classList.add('visible');

    // Play music
    var music = document.getElementById('it');
    music.play();

    // Delete Self
    var but = document.getElementById('but1');
    but.remove();
    var scroll = document.getElementById('scroll');
    scroll.remove();

    // Add new page
    var page2 = document.getElementById('page2');
    page2.classList.add('visible');
}

function final() {
    // Delete Main
    var main = document.getElementById('main');
    main.remove();


    // Make final visible
    var end = document.getElementById('end');
    end.classList.remove('invisible');
    end.classList.add('visible');
    document.body.style.height = '100vh';
}

// Scroll

$(document).ready(function() {

    $(window).scroll(function() {

        var scrollPos = $(window).scrollTop();
        p3 = document.getElementById('page3');
        p4 = document.getElementById('page4');
        p5 = document.getElementById('page5');

        p3l = $('#page3').offset().top - 150;
        p4l = $('#page4').offset().top - 150;
        p5l = $('#page5').offset().top - 150;


        if (scrollPos > p3l) {
            console.log('p3');
            p3.classList.remove('slide');
            p3.classList.add('visible');

            h1 = document.getElementById('h1');
            h1.src = 'static/images/heart.png';

        } 
        if (scrollPos > p4l) {
            console.log('p4');
            p4.classList.remove('slide');
            p4.classList.add('visible');

            h2 = document.getElementById('h2');
            h2.src = 'static/images/heart.png';
        } 
        if (scrollPos > p5l) {
            console.log('p5');
            p5.classList.remove('slide');
            p5.classList.add('visible');

            h3 = document.getElementById('h3');
            h3.src = 'static/images/heart.png';
        } 

        console.log(scrollPos);

    });

});
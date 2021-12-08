const anchors = document.querySelectorAll('a[href*="#"]')
const menuBtn = document.querySelector('.menu-btn')

for (let anchor of anchors) {
   anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const blockID = anchor.getAttribute('href')
      document.querySelector('' + blockID).scrollIntoView({
         behavior: "smooth",
         block: "start"
      })
   })
}

$(document).ready(function () {
   $('.menu-btn').on('click', function () {
      $('.container_menu').toggleClass('show-menu');
      $('body').toggleClass('lock');
   });
});

$(document).ready(function () {
   $('.lantern').on('click', function () {
      $('.lantern').toggleClass('tap');
      $('.blocks').toggleClass('tap');
   });
});

$(document).ready(function () {
   $('.logo').on('click', function () {
      $('.lantern').removeClass('tap');
      $('.blocks').removeClass('tap');
   });
});

$(document).ready(function () {
   $('.home1, .animation1, .stickers1, .installation1, .dish1, .costume1, .interior1, .postcards1, .dragon1, .decoration1').on('click', function () {
      $('.container_menu').removeClass('show-menu');
      $('body').removeClass('lock');
      $('.menu-btn').removeClass('open');
   });
});

let menuOpen = false;
menuBtn.addEventListener('click', () => {
   if (!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
   } else {
      menuBtn.classList.remove('open');
      menuOpen = false;
   }
});

var header = $('.header'),
   scrollPrev = 0;

$(window).scroll(function () {
   var scrolled = $(window).scrollTop();

   if (scrolled > 20 && scrolled > scrollPrev) {
      header.addClass('out');
   } else {
      header.removeClass('out');
   }
   scrollPrev = scrolled;
});

$(window).scroll(function () {
   if ($(window).scrollTop() > 1) {
      $('.blocks').addClass('tap');
      $('.lantern').addClass('tap');
   } else {
      $('.blocks').removeClass('tap');
      $('.lantern').removeClass('tap');
   }
});

$(function () {
   var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
         triggerHook: 'onLeave',
         duration: "200%" 
      }
   });

   var slides = document.querySelectorAll("section#animation, section#stickers, section#interior, section#dish, section#costume, section#installation, section#postcards, section#dragon, section#decoration");

   for (var i = 0; i < slides.length; i++) {
      new ScrollMagic.Scene({
         triggerElement: slides[i]
      })
         .setPin(slides[i], { pushFollowers: false })
         .addTo(controller);
   }
});




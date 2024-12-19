function hideMenu() {
    const ul = document.querySelector('ul');
    ul.style.right = '-170px';
    ul.style.transition = '1s';
}

function showMenu() {
    const ul = document.querySelector('ul');
    ul.style.right = '0';
    ul.style.transition = '1s';
}

function addDarkmodeWidget() {
    new Darkmode().showWidget();
}
const options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff', // default: '#fff'
    buttonColorDark: '#100f2c', // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();
window.addEventListener('load', addDarkmodeWidget);
$(window).on("load", function() {
    $(".loader-wrapper").fadeOut("slow");
});



// Get the navbar element
const wrapper1 = document.getElementById('wrapper1');

// Function to check scroll position and add/remove the 'scrolled' class
window.onscroll = function() {
  if (window.scrollY > 50) {  // Change 50 to any number you prefer for the scroll threshold
    wrapper1.classList.add('scrolled');
  } else {
    wrapper1.classList.remove('scrolled');
  }
};


// This is for the couresel
let currentIndex = 0;
const totalItems = document.querySelectorAll('.carousel-item').length;
const carousel = document.querySelector('.carousel');

// Function to update the carousel position
function updateCarousel() {
  const offset = -currentIndex * 33.33; // 33.33% per image
  carousel.style.transform = `translateX(${offset}%)`;
}

// Function to go to the previous slide
function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalItems - 3; // Wrap around to the last set of images
  }
  updateCarousel();
}

// Function to go to the next slide
function nextSlide() {
  if (currentIndex < totalItems - 3) {
    currentIndex++;
  } else {
    currentIndex = 0; // Wrap around to the first set of images
  }
  updateCarousel();
}

// Event listeners for the buttons
document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.next').addEventListener('click', nextSlide);

// Initialize the carousel
updateCarousel();


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

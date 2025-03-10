
/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
      console.log('click toggle');
      navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    console.log('click Close');
    navMenu.classList.remove('show-menu');
  });
}

// Remove the show-menu class when the user click on each nav__link

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));


/*============ CHANGE BACKGROUND HEADER ===========*/

function scrollHeader(){
  const header = document.getElementById('header');
  // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);


/*=============== QUESTIONS ACCORDION ===============*/

const accordionItems = document.querySelectorAll('.questions__item');

accordionItems.forEach((item) => {
  const accrdionHeader = item.querySelector('.questions__header');

  accrdionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open');
    toggleItem(item);
    
    if(openItem && openItem!== item){
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector('.questions__content');
  
  if(item.classList.contains('accordion-open')){
    accordionContent.removeAttribute('style');
    item.classList.remove('accordion-open');
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px';
    item.classList.add('accordion-open');
  }
}


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*="' + sectionId + '"]').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*="' + sectionId + '"]').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);


/*=============== SHOW SCROLL UP ===============*/ 

function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);


/*=============== DARK LIGHT THEME ===============*/ 

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously selected theme and icon from localStorage
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Function to get the current theme and icon status
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-sun-line' : 'ri-moon-line';

// Apply the saved theme and icon if they exist
if (selectedTheme) {
  document.body.classList.toggle(darkTheme, selectedTheme === 'dark');
  themeButton.classList.toggle(iconTheme, selectedIcon === 'ri-sun-line');
}

// Add event listener to toggle the theme and icon on click
themeButton.addEventListener('click', () => {
  // Toggle the dark theme and icon class
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  
  // Save the current theme and icon state in localStorage
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
});

sr.reveal('.home__data');
sr.reveal('.home__img', {delay: 500});
sr.reveal('.home__social', {delay: 600});
sr.reveal('.about__img.top, .contact__box', {origin: 'left'});
sr.reveal('.about__data, .about__img-bottom, .contact__form, .home__img', {origin: 'right'});
sr.reveal('.steps__card, .product__card, .questions__group, .gallery__item, .footer__container', {interval: 100});



/*=============== PRODUCT LOAD MORE  ===============*/

document.getElementById('loadMoreBtn').addEventListener('click', function() {
  const hiddenCards = document.querySelectorAll('.product__card-hidden');
  hiddenCards.forEach(card => {
      card.style.display = 'block'; // Show the hidden cards
  });
  this.style.display = 'none'; // Hide the button after showing the cards
});

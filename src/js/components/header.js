document.querySelector('.header__inside').addEventListener('mouseover', function () {
  document.querySelector('.header__list').style.visibility = 'hidden';
  document.querySelector('.header__list').style.opacity = '0';
  document.querySelector('.header__minus').style.transform = 'rotate(135deg)';
});



document.querySelector('.header__inside').addEventListener('mouseout', function () {
  document.querySelector('.header__list').style.visibility = 'visible';
  document.querySelector('.header__list').style.opacity = '1';
  document.querySelector('.header__minus').style.transform = 'rotate(90deg)';
});



let links = document.querySelectorAll('.header__item .header__link');
let flinks = document.querySelectorAll('.footer__item .footer__link');
let menu = document.querySelectorAll('.menu__item .menu__link');

// Loop through each link
for (let i = 0; i < links.length; i++) {
  // Check if the href attribute of the link matches the current URL
  if (links[i].href === window.location.href) {
    // If it matches, add a class to the link
    links[i].classList.add('header__link--active');
  }
}

for (let i = 0; i < flinks.length; i++) {
  // Check if the href attribute of the link matches the current URL
  if (flinks[i].href === window.location.href) {
    // If it matches, add a class to the link
    flinks[i].classList.add('header__link--active');
  }
}

for (let i = 0; i < menu.length; i++) {
  // Check if the href attribute of the link matches the current URL
  if (menu[i].href === window.location.href) {
    // If it matches, add a class to the link
    menu[i].classList.add('menu__link--active');
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let navMain = document.querySelector('.main-nav');
  let navToggle = document.querySelector('.main-nav__toggle');
  const btnBefore = document.querySelector('.buttons__button--before');
  const btnAfter = document.querySelector('.buttons__button--after');
  const sliderImgBefore = document.querySelector('.examle__image-before');
  const sliderImgAfter = document.querySelector('.examle__image-after');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });

  btnBefore.addEventListener('click', function(e) {
    e.preventDefault();
    sliderImgBefore.style.display = 'block';
    sliderImgAfter.style.display = 'none';
  });

  btnAfter.addEventListener('click', function(e) {
    e.preventDefault();
    sliderImgBefore.style.display = 'none';
    sliderImgAfter.style.display = 'block';
  });
});

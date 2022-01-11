document.addEventListener("DOMContentLoaded", () => {
  let navMain = document.querySelector('.main-nav');
  let navToggle = document.querySelector('.main-nav__toggle');
  const btnBefore = document.querySelector('.buttons__button--before');
  const btnAfter = document.querySelector('.buttons__button--after');
  const sliderImgBefore = document.querySelector('.examle__image-before');
  const sliderImgAfter = document.querySelector('.examle__image-after');
  const sliderImgBeforeAfter = document.querySelector('.examle__image-before-after');
  const slider = document.querySelector('.example__slider');

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
    sliderImgBeforeAfter.style.display = 'none';
    sliderImgAfter.style.display = 'none';
    if(window.innerWidth < 768) {
      slider.value = '6';
    } else {
      slider.value = '1';
    }
  });

  btnAfter.addEventListener('click', function(e) {
    e.preventDefault();
    sliderImgBefore.style.display = 'none';
    sliderImgBeforeAfter.style.display = 'none';
    sliderImgAfter.style.display = 'block';
    if(window.innerWidth < 768) {
      slider.value = '94';
    } else {
      slider.value = '100';
    }
  });

  slider.oninput = function() {
    if(this.value < 50) {
      sliderImgBefore.style.display = 'block';
      sliderImgBeforeAfter.style.display = 'none';
      sliderImgAfter.style.display = 'none';
    } else if(this.value == 50 && window.innerWidth >= 768) {
      sliderImgBefore.style.display = 'none';
      sliderImgAfter.style.display = 'none';
      sliderImgBeforeAfter.style.display = 'block';
    }
    else if(this.value > 50) {
      sliderImgBefore.style.display = 'none';
      sliderImgBeforeAfter.style.display = 'none';
      sliderImgAfter.style.display = 'block';
    }
  }
});

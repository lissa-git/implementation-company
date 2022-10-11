//функция определения поддержки WebP
function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});

if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
};


let lastScroll = 0;
const defaultOffset = 100;
const header = document.querySelector('.header');

function scrollPosition() {
  return window.pageYOffset || document.documentElement.scrollTop;
};

function containHidden() {
  return header.classList.contains('header--hidden');
};

window.addEventListener('scroll', function () {
  if (scrollPosition() > lastScroll && !containHidden() && scrollPosition() > defaultOffset) {
    header.classList.add('header--hidden');
  } else if (scrollPosition() < lastScroll && containHidden()) {
    header.classList.remove('header--hidden');
  };
  lastScroll = scrollPosition();
});

const anchors = document.querySelectorAll('a[href*="#"]')
if (anchors) {
  anchors.forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const blockID = anchor.getAttribute('href').substr(1)
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  });
};




$(document).ready(function () {
  $('.own-products__slider-inner').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 3300,
    easing: 'easeInSine',
    slidesToShow: 3,
    responsive: [{
      breakpoint: 1001,
      settings: {
        slidesToShow: 1
      }
    }, ]
  });
});




const loopBtns = document.querySelectorAll('.certificate__ico');

if (loopBtns) {
  loopBtns.forEach(function (loopBtn) {
    loopBtn.addEventListener('click', function () {
      loopBtn.parentNode.previousElementSibling.classList.add('zoom-image--visible');
      document.querySelector('.modal-bg').classList.add('modal-bg--visible');
    });
  });
};

document.addEventListener('click', function (e) {
  let containsClass = e.target.classList.contains('modal-bg--visible');
  if (containsClass) {
    document.querySelector('.modal-bg').classList.remove('modal-bg--visible');
    let allImages = document.querySelectorAll('.zoom-image');
    allImages.forEach(function (image) {
      if (image.classList.contains('zoom-image--visible')) {
        image.classList.remove('zoom-image--visible');
      }
    });
  };
});


document.addEventListener('click', function (e) {
  let containsClass = e.target.classList.contains('zoom-close');
  if (containsClass) {
    document.querySelector('.modal-bg').classList.remove('modal-bg--visible');
    let allImages = document.querySelectorAll('.zoom-image');
    allImages.forEach(function (image) {
      if (image.classList.contains('zoom-image--visible')) {
        image.classList.remove('zoom-image--visible');
      }
    });
  };
});


const miniLoopBtns = document.querySelectorAll('.certificate-slider__ico');
const miniImages = document.querySelectorAll('.mini-image');

if (miniLoopBtns) {
  miniLoopBtns.forEach(function (miniLoopBtn) {
    miniLoopBtn.addEventListener('click', function () {
      let certificateId = miniLoopBtn.getAttribute('data-id');
      miniImages.forEach(function (miniImage) {
        let imageId = miniImage.getAttribute('data-id');
        if (+imageId === +certificateId) {
          miniImage.classList.add('zoom-image--visible');
        }
      })
      document.querySelector('.modal-bg').classList.add('modal-bg--visible');
    });
  });
};



const showMoreBtn = document.querySelector('.showmore-btn');
const showText = document.querySelector('.product-support__all-text');

if (showMoreBtn) {
  showMoreBtn.addEventListener('click', function () {
    if (showText.classList.contains('product-support__all-text--visible')) {
      showText.classList.remove('product-support__all-text--visible');
      showMoreBtn.textContent = 'Показать всё';
    } else {
      showText.classList.add('product-support__all-text--visible');
      showMoreBtn.textContent = 'Скрыть';
    }
  });
};

const menuBtn = document.querySelector('.header__menu-ico');
const menu = document.querySelector('.burger-menu');

if (menuBtn) {
  menuBtn.addEventListener('click', function () {
    if (menuBtn.classList.contains('header__menu-ico--active')) {
      menu.classList.remove('burger-menu--active');
      menuBtn.classList.remove('header__menu-ico--active');
    } else {
      menu.classList.add('burger-menu--active');
      menuBtn.classList.add('header__menu-ico--active');
    }
  });
};
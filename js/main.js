"use strict";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

document.addEventListener('DOMContentLoaded', function () {
  new WOW().init(); // Anchors Scroll

  var anchors = document.querySelectorAll('[data-scroll-link]');

  var _iterator = _createForOfIteratorHelper(anchors),
      _step;

  try {
    var _loop = function _loop() {
      var anchor = _step.value;
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    } // nav Script

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var navBtn = document.querySelector('.nav__btn'),
      navList = document.querySelector('.nav__list'),
      body = document.body,
      shadow = document.querySelector('.shadow'),
      navLink = document.querySelectorAll('.nav__link');
  navBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    shadow.classList.toggle('shadow--active');
    navBtn.classList.toggle('nav__btn--active');
    navList.classList.toggle('nav__list_active');
    body.classList.toggle('body_overflow');
  });
  navLink.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.stopPropagation();
      navHide();
    });
  });

  function navHide() {
    navList.classList.remove('nav__list_active');
    navBtn.classList.remove('nav__btn--active');
    shadow.classList.remove('shadow--active');
    body.classList.remove('body_overflow');
  }

  document.addEventListener('click', function (e) {
    var target = e.target;
    var its_nav = target == navList || navList.contains(target);
    var its_burger = target == navBtn;

    if (!its_nav && !its_burger) {
      navHide();
    }
  }); // Window Scroll 

  window.addEventListener('scroll', function () {
    var windowScroll = window.pageYOffset,
        nav = document.querySelector('.nav'),
        contactsH = document.querySelector('.header__contacts').offsetTop,
        scrollTop = document.querySelector('.scrollTop__link');

    if (windowScroll > contactsH) {
      nav.classList.add('nav--fixed');
    } else {
      nav.classList.remove('nav--fixed');
    }

    if (windowScroll > 500) {
      scrollTop.classList.add('scrollTop__link--active');
    } else {
      scrollTop.classList.remove('scrollTop__link--active');
    }
  });
  window.addEventListener('load', function () {
    var windowScroll = window.pageYOffset,
        nav = document.querySelector('.nav'),
        contactsH = document.querySelector('.header__contacts').offsetTop,
        scrollTop = document.querySelector('.scrollTop__link');
    windowScroll > contactsH ? nav.classList.add('nav--fixed') : nav.classList.remove('nav--fixed');
    windowScroll > 500 ? scrollTop.classList.add('scrollTop__link--active') : scrollTop.classList.remove('scrollTop__link--active');
  }); 
  
  // Search Form Whow and  hide
  var navSearch = document.querySelector('.nav__search'),
      searchForm = document.querySelector('.search__form'),
      searchFormClose = document.querySelector('.search__form-close');
  navSearch.addEventListener('click', function (e) {
    e.stopPropagation();

    if (e.target) {
      searchForm.classList.add('search__form_active');
    }
  });
  searchFormClose.addEventListener('click', function () {
    searchForm.classList.remove('search__form_active');
  }); 

  // Swiper Slider
  var swiper = new Swiper('.intro__inner', {
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true
    },
    autoplay: {
      delay: 5000
    }
  }); 
  // Num progress
  function outNum(elem) {
    var number = document.querySelector('#' + elem),
        numberTop = number.getBoundingClientRect().top,
        start = number.innerHTML,
        end = +number.dataset.max;
    window.addEventListener('scroll', function onScroll() {
      if (window.pageYOffset > numberTop - window.innerHeight) {
        this.removeEventListener('scroll', onScroll);
        var interval = setInterval(function () {
          number.innerHTML = ++start;

          if (start == end) {
            clearInterval(interval);
          }
        }, 5);
      }
    });
  }

  outNum('numb-1');
  outNum('numb-2');
  outNum('numb-3');
  outNum('numb-4'); 
});
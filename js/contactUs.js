"use strict";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

document.addEventListener('DOMContentLoaded', function () {
      // Validation script
    var form = document.querySelector('.form'),
    name = document.querySelector('#name'),
    email = document.querySelector('#email'),
    message = document.querySelector('#message'),
    arrow = document.querySelectorAll('#form__arrow');
    form.addEventListener('submit', function (e) {
    var nameReg = name.value.match("[A-Za-zА-Яа-яЁё]{3,}");
    var emailReg = email.value.match(/^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$/);
    !nameReg ? name.classList.add('input__error') : name.classList.remove('input__error');
    !emailReg ? email.classList.add('input__error') : email.classList.remove('input__error');

    if (message.value.length <= 100 || !nameReg || !emailReg) {
    e.preventDefault();
    message.classList.add('input__error');
    arrow.forEach(function (item) {
        item.classList.add('form__arrow_error');
    });
    } else {
    message.classList.remove('input__error');
    arrow.forEach(function (item) {
        item.classList.remove('form__arrow_error');
    });
    }
    });
});
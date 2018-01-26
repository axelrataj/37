import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();


const Nav = function(el) {

    this.el = el;
    this.li = this.el.querySelectorAll('li');
    this.liLength = this.li.length;
    this.strip = this.el.querySelector('.link-decoration');

};

Nav.prototype = {

    addEvent: function (eType, fn) {

        this.el.addEventListener(eType, fn, false);

    },

    mouseMove: function () {

        const _this = this;

        this.addEvent('mousemove', function (e) {


            let strip = _this.strip,
                left = e.layerX;

            if( !strip.classList.contains('hover') ) strip.classList.add('hover');

            if( e.target.localName === 'a' ) {

                let width = e.target.offsetWidth - 20;

                strip.style.width = width + 'px';
                strip.style.left = '10px';

                for(let i = 0; i < _this.liLength; i++)
                    _this.li[i].classList.remove('hover');

                e.target.parentNode.classList.add('hover');

                left = e.target.offsetLeft;

                strip.style.transform = 'translateX('+ left + 'px)';
            }

        });
    }

};

const nav = new Nav(document.querySelector('.nav-main'));
nav.mouseMove();

/*
(function() {
    var navContainer = document.querySelector('.nav-main'),
        liLength = navContainer.querySelectorAll('li').length,
        strip = document.querySelector('.nav-main-container nav .strip');

    navContainer.addEventListener('mousemove', function(e) {
        if( !strip.classList.contains('hover') ) {
            strip.classList.add('hover');
            return false;
        }
        var width = e.target.clientWidth,
            left = e.layerX;
        if( e.target.localName === 'a' ) {
            strip.style.width = width + 'px';
            strip.style.left = 0;
            for(var i = 0; i < liLength; i++)
                document.querySelectorAll('.nav-main-container nav ul li')[i].classList.remove('hover');
            e.target.parentNode.classList.add('hover');
            left = e.target.offsetLeft;
            strip.style.transform = 'translateX('+ left + 'px)';
        }
    }, false);
})();*/

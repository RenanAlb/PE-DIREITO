"use strict";
const menu = document.querySelector('nav');
const iconMenu = document.querySelector('#menu');
const blurbk = document.querySelector('.blur');
menu.style.display = 'none';
iconMenu.addEventListener('click', () => {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        iconMenu.innerHTML = 'density_medium';
        blurbk.style.display = 'none';
    }
    else {
        menu.style.display = 'block';
        iconMenu.innerHTML = 'close';
        blurbk.style.display = 'block';
    }
});
const controleMenu = () => {
    if (window.innerWidth > 850) {
        menu.style.display = 'block';
        blurbk.style.display = 'none';
        iconMenu.style.display = 'none';
        iconMenu.innerHTML = 'density_medium';
    }
    else {
        menu.style.display = 'none';
        blurbk.style.display = 'none';
        iconMenu.style.display = 'block';
        iconMenu.innerHTML = 'density_medium';
    }
};
window.addEventListener('resize', controleMenu);
window.addEventListener('load', controleMenu);

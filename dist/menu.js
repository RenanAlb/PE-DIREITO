"use strict";
const menu = document.querySelector('nav');
const iconMenu = document.querySelector('#menu');
const blurbk = document.querySelector('.blur');
const closeMenu = document.getElementById('close-menu');
menu.style.display = 'none';
const controleMenuSpan = () => {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        iconMenu.innerHTML = 'density_medium';
        blurbk.style.display = 'none';
        closeMenu.style.display = 'none';
    }
    else {
        menu.style.display = 'block';
        iconMenu.innerHTML = 'close';
        blurbk.style.display = 'block';
        closeMenu.style.display = 'block';
    }
};
closeMenu.addEventListener('click', controleMenuSpan);
iconMenu.addEventListener('click', controleMenuSpan);
const controleMenu = () => {
    if (window.innerWidth > 850) {
        menu.style.display = 'block';
        blurbk.style.display = 'none';
        iconMenu.style.display = 'none';
        iconMenu.innerHTML = 'density_medium';
        closeMenu.style.display = 'none';
    }
    else {
        menu.style.display = 'none';
        blurbk.style.display = 'none';
        iconMenu.style.display = 'block';
        iconMenu.innerHTML = 'density_medium';
        closeMenu.style.display = 'none';
    }
};
window.addEventListener('resize', controleMenu);
window.addEventListener('load', controleMenu);

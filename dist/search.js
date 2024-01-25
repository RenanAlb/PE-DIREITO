"use strict";
const searchIcon = document.getElementById('search');
const divSearch = document.createElement('div');
divSearch.classList.add('search');
const construirSearch = () => {
    divSearch.innerHTML = `
    <input type="text" placeholder="O que você busca?">
    <button>Buscar</button>
  `;
    main.appendChild(divSearch);
};
searchIcon.addEventListener('click', () => {
    if (divSearch.style.display === 'block') {
        divSearch.style.display = 'none';
        blurbk.style.display = 'none';
    }
    else {
        divSearch.style.display = 'block';
        blurbk.style.display = 'block';
        construirSearch();
    }
});

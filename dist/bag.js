"use strict";
const bagIcon = document.querySelector('#bag');
const bagDiv = document.createElement('div');
bagDiv.classList.add('bag-div');
const montarBagDiv = () => {
    bagDiv.innerHTML = `
    <h1>Meu carrinho</h1>
  `;
    main.appendChild(bagDiv);
};
bagIcon.addEventListener('click', () => {
    if (bagDiv.style.display === 'block') {
        bagDiv.style.display = 'none';
        blurbk.style.display = 'none';
    }
    else {
        bagDiv.style.display = 'block';
        blurbk.style.display = 'block';
        montarBagDiv();
    }
});

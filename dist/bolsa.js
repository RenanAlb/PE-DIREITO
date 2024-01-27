"use strict";
const renderizarProdutosBolsa = () => {
    renderizarProdutos('bolsa');
};
const bolsaPage = () => {
    main.innerHTML = '';
    renderizarProdutosBolsa();
    document.body.appendChild(main);
    windowTop();
};

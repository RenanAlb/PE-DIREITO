"use strict";
const renderizarProdutosModa = () => {
    renderizarProdutos('moda');
};
const modaPage = () => {
    main.innerHTML = '';
    renderizarProdutosModa();
    document.body.appendChild(main);
    windowTop();
};
